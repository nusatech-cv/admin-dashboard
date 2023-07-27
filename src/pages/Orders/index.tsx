import Breadcrumb from "../../components/Breadcrumb";
import TableOne from "../../components/TableOne";
import { Modal } from "../../components/Modal";
import moment from "moment-mini";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HistoryInterface,
  OrdersInterface,
  TherapistInterface,
  UserInterface,
  ordersFetch,
  selectOrders,
  selectOrdersLoading,
  selectTherapist,
  selectTherapistLoading,
  selectUser,
  selectUserLoading,
  therapistFetch,
  userFetch,
} from "@modules/index";
import { Map } from "@components/Map";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import ExportCSV from "@components/ExportCsv";

const Orders = () => {
  useDocumentTitle("Orders");
  const dispatch = useDispatch();
  const orders: OrdersInterface = useSelector(selectOrders);
  const ordersloading = useSelector(selectOrdersLoading)
  const users: UserInterface[] = useSelector(selectUser);
  const userloading = useSelector(selectUserLoading);
  const therapist: TherapistInterface[] = useSelector(selectTherapist);
  const therapistloading = useSelector(selectTherapistLoading);
  const loadingTable = ordersloading|| userloading || therapistloading;
  const [isOpenMaps, setIsOpenMaps] = useState(false);
  const [ordersLocation, setOrdersLocation] = useState<HistoryInterface>();

  useEffect(() => {
    dispatch(ordersFetch());
    dispatch(userFetch());
    dispatch(therapistFetch());
  }, []);

  const getUserName = (userId:string) =>{
    const userData:UserInterface = users?.find((item) => item.id.toString() === userId);
    return (userData?.first_name + ' ' + userData?.last_name
    )
  }

  const getTherapistName = (therapistId:string) =>{
    const therapistData:TherapistInterface = therapist?.find((item) => item.id.toString() === therapistId);
    return (
      therapistData?.first_name + therapistData?.last_name
    )
  }

  function closeModalMaps() {
    setIsOpenMaps(false);
  }

  function openModalMaps(item) {
    setIsOpenMaps(true);
    setOrdersLocation(item);
  }

  const renderMaps = (
    <>
      <div className="w-full">
        <Map location={ordersLocation} type="single" />
      </div>
    </>
  );

  const renderMapsTitle = (
    <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white">
      Order Location
    </h3>
  );

  const dataOrders =
    orders?.orders &&
    orders?.orders?.map((item) => ({
      name: (
        <span className="text-center uppercase text-sm font-medium">
          {getUserName(item.user_id.toString())}
        </span>
      ),
      therapist: (
        <span className="text-center text-sm uppercase font-medium">
          {getTherapistName(item.therapist_id.toString())}
        </span>
      ),
      price: (
        <span className="text-center text-sm uppercase font-medium">
          {item.total_price}
        </span>
      ),
      date: (
        <span className={`cursor-pointer text-center uppercase text-sm font-medium `}>
          {moment(item.created_at).format('hh:mm:ss A, DD-MM-YYYY')}
        </span>
      ),
      location: (
        <span
          onClick={() => openModalMaps(item)}
          className={`cursor-pointer text-center text-sm  font-medium text-secondary`}
        >
          Location
        </span>
      ),
      status: (
        <span className={`text-center text-sm capitalize  font-medium ${item.order_status === 'done' ? 'text-success' : item.order_status === 'paid' ? 'text-secondary' :item.order_status === 'waiting_payment' || item.order_status === 'waiting_confirmation'  ? 'text-warning':'text-danger'}`}>
          {item.order_status.toLowerCase() == 'waiting_payment' ? 'Waiting Payment' :item.order_status.toLowerCase() == 'waiting_confirmation' ? 'Waiting confirmation': item.order_status}
        </span>
      ),
      detail: (
        <Link
          to={`/orders/detail/${item.id}`}
          className={`text-center text-sm font-medium text-secondary`}
        >
          Detail
        </Link>
      ),
    }));

    const headerExportCsv = [
      { label: "Name", key: "name" },
      { label: "Therapist", key: "therapist" },
      { label: "Total Price", key: "price" },
      { label: "Date", key: "date" },
      { label: "Status", key: "status" },
    ]
  
    const dataExportCsv = orders?.orders?.map((item)=> ({
      name: getUserName(item?.user_id.toString()),
      therapist: getTherapistName(item.therapist_id.toString()),
      price: item?.total_price,
      date : moment(item?.created_at).format('L'),
      status : item.order_status,
    }))
  
  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="Orders" />
        <div className="flex justify-start mb-6">
          <div className="bg-success px-4 text-white text-sm py-2 rounded-lg">
            <ExportCSV data={dataExportCsv} headers={headerExportCsv} filename={'orders_home_spa.csv'} />
          </div>
        </div>
        <TableOne
          data={dataOrders}
          headers={[
            { key: "name", title: "Name" },
            { key: "therapist", title: "Therapist" },
            { key: "price", title: "Price" },
            { key: "date", title: "Date" },
            { key: "location", title: "Location" },
            { key: "status", title: "Status" },
            { key: "detail", title: "Detail" },
          ]}
          loading={loadingTable}
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

export default Orders;
