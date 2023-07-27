import Breadcrumb from "../../components/Breadcrumb";
import moment from "moment-mini";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  OrderSingleInterface,
  selectTherapist,
  therapistFetch,
  orderSingleFetch,
  selectSingleOrder,
  TherapistInterface,
} from "@modules/index";
import { useLocation } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

const OrderDetail = () => {
  useDocumentTitle("Order Detail");
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const id = path.split("/")[3];
  const ordersDetail: OrderSingleInterface = useSelector(selectSingleOrder);
  const therapist: TherapistInterface[] = useSelector(selectTherapist);
  const therapistData: TherapistInterface = therapist?.find(
    (item) => item?.id === ordersDetail?.order?.therapist?.id || ""
  );

  useEffect(() => {
    dispatch(orderSingleFetch(id));
  }, []);

  useEffect(() => {
    dispatch(therapistFetch());
  }, []);


  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="Orders Detail" />
        <div className="mb-8 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex justify-between">
            <div className="w-1/2 border-r-2 border-gray pr-12 dark:border-x-graydark">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">User</p>
                <p className="text-sm font-semibold capitalize text-boxdark dark:text-white">
                  {ordersDetail?.order?.user.first_name}{" "}
                  {ordersDetail?.order?.user.last_name}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Therapist</p>
                <p className="text-sm font-semibold capitalize text-boxdark dark:text-white">
                  {therapistData?.first_name} {therapistData?.last_name}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Service Name</p>
                <p className="text-sm font-semibold capitalize text-boxdark dark:text-white">
                  {ordersDetail?.order?.service?.name}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Service Description</p>
                <p className="text-sm text-right font-semibold capitalize text-boxdark dark:text-white">
                  {ordersDetail?.order?.service?.description}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Service Duration</p>
                <p className="text-sm font-semibold text-boxdark capitalize dark:text-white">
                  {ordersDetail?.order?.appointment_duration}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Total Price</p>
                <p className="text-sm font-semibold text-boxdark capitalize dark:text-white">
                  {ordersDetail?.order?.total_price}
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-12">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Order Status</p>
                <span className={`text-center text-sm capitalize font-medium ${ordersDetail?.order?.order_status === 'done' ? 'text-success' : ordersDetail?.order?.order_status === 'paid' ? 'text-secondary' :ordersDetail?.order?.order_status === 'waiting_payment' || ordersDetail?.order?.order_status === 'waiting_confirmation'  ? 'text-warning':'text-danger'}`}>
                  {ordersDetail?.order?.order_status.toLowerCase() == 'waiting_payment' ? 'Waiting Payment' :ordersDetail?.order?.order_status.toLowerCase() == 'waiting_confirmation' ? 'Waiting confirmation': ordersDetail?.order?.order_status}
                </span>
                
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Rating</p>
                <p className="text-sm font-semibold text-warning capitalize dark:text-warning">
                  {ordersDetail?.order?.rating}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Note</p>
                <p className="text-sm font-semibold text-boxdark capitalize dark:text-white">
                  {ordersDetail?.order?.note}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Created At</p>
                <p className="text-sm font-semibold text-boxdark capitalize dark:text-white">
                {moment(ordersDetail?.order?.created_at).format('hh:mm:ss A, DD-MM-YYYY')}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Payment Method</p>
                <p className="text-sm font-semibold text-boxdark capitalize dark:text-white">
                  {ordersDetail?.order?.payment?.payment_method}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Payment Expired</p>
                <p className="text-sm font-semibold text-boxdark capitalize dark:text-white">
                {moment(ordersDetail?.order?.payment?.payment_expired).format('hh:mm:ss A, DD-MM-YYYY')}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <h3 className="mb-4 text-xl font-semibold text-boxdark dark:text-white">
          Location
        </h3> */}
        {/* <Map location={maps} type="single" /> */}
      </div>
    </>
  );
};

export default OrderDetail;
