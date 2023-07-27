import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TableOne from "../../components/TableOne";
import { Modal } from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  TherapistInterface,
  selectTherapist,
  therapistFetch,
  HistoryInterface,
} from "@modules/index";
import { Map } from "@components/Map";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import ExportCSV from "@components/ExportCsv";

const Therapist = () => {
  useDocumentTitle("Therapist List");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const therapist: TherapistInterface[] = useSelector(selectTherapist);
  const [isOpenMaps, setIsOpenMaps] = useState(false);
  const [therapistLocation, setTherapistLocation] =
    useState<HistoryInterface>();

  useEffect(() => {
    dispatch(therapistFetch());
  }, []);

  function closeModalMaps() {
    setIsOpenMaps(false);
  }

  function openModalMaps(item) {
    setIsOpenMaps(true);
    setTherapistLocation(item);
  }

  const renderMaps = (
    <div className="w-full">
      <Map location={therapistLocation} type="single" />
    </div>
  );

  const renderMapsTitle = (
    <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white">
      Therapist Location
    </h3>
  );

  const dataTherapist =
    therapist &&
    therapist?.map((item) => ({
      name: (
        <div className="flex items-center justify-start gap-2 mb-2">
          <img
            width={36}
            height={36}
            className="rounded-full"
            src={item?.avatar}
            alt="Brand"
          />
          <p className="hidden text-black dark:text-white sm:block">
            {item?.first_name} {item?.last_name}
          </p>
          <span className={`rounded-sm ${Number(item.average_rating) < 1 ? 'bg-danger' : Number(item.average_rating) < 2 ? 'bg-meta-7' : Number(item.average_rating) < 3 ? 'bg-meta-6' : Number(item.average_rating) < 4 ? 'bg-success': 'bg-primary'} p-1 text-xs text-white`}>
            {item?.average_rating ? item?.average_rating : "0.0"}
          </span>
        </div>
      ),
      email: (
        <span className="text-left text-sm font-medium">{item?.email}</span>
      ),
      balance: (
        <span className="text-left text-sm font-medium">
          {item?.balances}
        </span>
      ),
      location: (
        <span
          onClick={() => openModalMaps(item)}
          className={`cursor-pointer text-center text-sm font-medium text-secondary`}
        >
          Location
        </span>
      ),
      available: (
        <span
          className={`text-center text-xs font-medium text-white ${
            item?.is_available ? "bg-primary " : "bg-danger"
          } rounded-lg px-2 py-1`}
        >
          {item?.is_available ? "Yes" : "No"}
        </span>
      ),
      rating: (
        <Link
          to={`/therapist/rating/${item.id}`}
          className={`text-center text-sm font-medium text-secondary`}
        >
          Detail
        </Link>
      ),
    }));

    const headerExportCsv = [
      { label: "Name", key: "name" },
      { label: "Email", key: "email" },
      { label: "Balance", key: "balance" },
      { label: "Available", key: "available" },
      { label: "Average Rating", key: "average_rating" },
    ]
  
    const dataExportCsv = therapist?.map((item)=> ({
      name: item?.first_name + ' ' + item?.last_name, 
      email: item?.email,
      balance: item?.balances,
      available : item?.is_available,
      average_rating : item?.average_rating,
    }))
    
  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="Therapist" />
         <div className="mb-4 flex justify-between">
          <div className="bg-success px-4 text-white text-sm py-2 rounded-lg">
            <ExportCSV data={dataExportCsv} headers={headerExportCsv} filename={'therapist_home_spa.csv'} />
          </div>
          <button
            type="button"
            onClick={() => navigate('/therapist/all')}
            className="inline-flex min-w-[75px] items-center justify-center rounded-full bg-primary py-1 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-3 xl:px-4"
          >
            All Theraphist Location
          </button>
        </div>
        <TableOne
          data={dataTherapist}
          headers={[
            { key: "name", title: "Name" },
            { key: "email", title: "Email" },
            { key: "balance", title: "Balance" },
            { key: "location", title: "Location" },
            { key: "available", title: "Available" },
            { key: "rating", title: "Rating" },
          ]}
          loading={false}
        />
      </div>

      <Modal
        closeModal={closeModalMaps}
        isOpen={isOpenMaps}
        desc={renderMaps}
        title={renderMapsTitle}
        buttonText="close"
        size="large"
      />
    </>
  );
};

export default Therapist;
