import { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TableOne from "../../components/TableOne";
import moment from "moment-mini";
import { Map } from "@components/Map";
import { Modal } from "@components/Modal";
import {
  HistoryInterface,
  selectActivity,
  activityFetch,
  selectActivityLoading,
} from "@modules/index";
import { useDispatch, useSelector } from "react-redux";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";
import ExportCSV from "@components/ExportCsv";

const Activity = () => {
  useDocumentTitle("Activity List");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activity: HistoryInterface[] = useSelector(selectActivity);
  const fetchLoading: boolean = useSelector(selectActivityLoading);
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [location, setLocation] = useState<HistoryInterface>();

  useEffect(() => {
    dispatch(activityFetch());
  }, [dispatch]);

  const handleShowLocation = () => {
    setShowLocation(!location);
  };

  const handleShowMaps = (item: HistoryInterface) => {
    setShowLocation(true);
    setLocation(item);
  };

  const renderMaps = (
    <>
      <div className="w-full">
        <Map location={location} type="single" />
      </div>
    </>
  );

  const data = activity?.map((item) => ({
    name: (
      <>
        <div className="flex items-center gap-2">
          <p className="hidden text-black dark:text-white capitalize sm:block">
            {item.first_name} {item.last_name}
          </p>
        </div>
      </>
    ),
    action: (
      <span className="text-center text-sm font-medium">{item.activity_type}</span>
    ),
    timestamp: (
      <span className="text-center text-sm font-medium">
        {moment(item.created_at).format('hh:mm:ss A, DD-MM-YYYY')}
      </span>
    ),
    ip_address: (
      <span className={`cursor-pointer text-center text-sm font-medium`}>
        {item.ip_address}
      </span>
    ),
    location: (
      <span
        onClick={() => item?.location.x !== null && handleShowMaps(item)}
        className={`${
          item?.location.x !== null
            ? "cursor-pointer text-secondary"
            : "text-secondary/50"
        }  text-center text-sm font-medium `}
      >
        Location
      </span>
    ),
    detail: (
      <span
        onClick={() => navigate(`/activity/detail/${item.id}`)}
        className={`cursor-pointer text-center text-sm font-medium text-secondary`}
      >
        Detail
      </span>
    ),
  }));

  const headerExportCsv = [
    { label: "Name", key: "name" },
    { label: "action", key: "action" },
    { label: "timestamp", key: "timestamp" },
    { label: "Ip Address", key: "ip_address" },
    { label: "Device", key: "device" },
  ]

  const dataExportCsv = activity?.map((item)=> ({
    name: item?.last_name + ' ' + item?.last_name,
    action: item?.activity_type,
    timestamp: moment(item?.timestamp).format('L'),
    ip_address : item?.ip_address,
    device : item?.device_info,
  }))

  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="Activity" />
        <div className="flex justify-start mb-6">
          <div className="bg-success px-4 text-white text-sm py-2 rounded-lg">
            <ExportCSV data={dataExportCsv} headers={headerExportCsv} filename={'activity_home_spa.csv'} />
          </div>
        </div>
        <TableOne
          data={data}
          headers={[
            { key: "name", title: "Name" },
            { key: "action", title: "Action" },
            { key: "timestamp", title: "Timestamp" },
            { key: "ip_address", title: "Ip Address" },
            { key: "location", title: "Location" },
            { key: "detail", title: "Detail" },
          ]}
          loading={fetchLoading}
        />

        <Modal
          closeModal={handleShowLocation}
          isOpen={showLocation}
          desc={renderMaps}
          title={
            <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white">
              Location
            </h3>
          }
          buttonText="close"
          size="large"
        />
      </div>
    </>
  );
};

export default Activity;
