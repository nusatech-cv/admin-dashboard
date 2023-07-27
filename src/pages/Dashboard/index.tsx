import { useDispatch, useSelector } from "react-redux";
import TableOne from "../../components/TableOne.tsx";
import {
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
  selectService,
  serviceFetch,
} from "@modules/index.ts";
import { useEffect, useMemo } from "react";
import moment from "moment-mini";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle.tsx";
import { CardDashboard } from "../../components";
import { OrdersIcon, ServicesIcon, UsersIcon } from "../../assets/icon";

const Dashboard = () => {
  useDocumentTitle("Dashboard");
  const dispatch = useDispatch();
  const orders: OrdersInterface = useSelector(selectOrders);
  const ordersloading = useSelector(selectOrdersLoading);
  const users: UserInterface[] = useSelector(selectUser);
  const userloading = useSelector(selectUserLoading);
  const therapist: TherapistInterface[] = useSelector(selectTherapist);
  const therapistloading = useSelector(selectTherapistLoading);
  const services = useSelector(selectService);
  const loadingTable = ordersloading || userloading || therapistloading;

  useEffect(() => {
    dispatch(ordersFetch());
    dispatch(userFetch());
    dispatch(therapistFetch());
    dispatch(serviceFetch());
  }, []);

  const getUserName = (userId: string) => {
    const userData: UserInterface = users?.find(
      (item) => item.id.toString() === userId
    );
    return (
      <span>
        {userData?.first_name} {userData?.last_name}
      </span>
    );
  };

  const getTherapistName = (therapistId: string) => {
    const therapistData: TherapistInterface = therapist?.find(
      (item) => item.id.toString() === therapistId
    );
    return (
      <span>
        {therapistData?.first_name} {therapistData?.last_name}
      </span>
    );
  };

  const dataOrders = useMemo(() => {
    return (
      orders?.orders &&
      orders?.orders?.slice(0, 10).map((item) => ({
        name: (
          <span className="text-left text-sm font-medium">
            {getUserName(item?.user_id?.toString())}
          </span>
        ),
        therapist: (
          <span className="text-center text-sm font-medium">
            {getTherapistName(item?.therapist_id?.toString())}
          </span>
        ),
        price: (
          <span className="text-center text-sm font-medium">
            {item.total_price}
          </span>
        ),
        date: (
          <span className={`cursor-pointer text-center text-sm font-medium `}>
            {moment(item.created_at).format('hh:mm:ss A, DD-MM-YYYY')}
          </span>
        ),
        status: (
          <span
            className={`text-center text-sm font-medium capitalize ${
              item.order_status === "done"
                ? "text-success"
                : item.order_status === "paid"
                ? "text-secondary"
                : item.order_status === "waiting_payment" ||
                  item.order_status === "waiting_confirmation"
                ? "text-warning"
                : "text-danger"
            }`}
          >
            {item.order_status.toLowerCase() == "waiting_payment"
              ? "Waiting Payment"
              : item.order_status.toLowerCase() == "waiting_confirmation"
              ? "Waiting confirmation"
              : item.order_status}
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
      }))
    );
  }, [orders, orders?.orders, getUserName, getTherapistName]);

  const cards = [
    {
      name: "Users",
      amount: users?.length,
      icon: <UsersIcon />,
    },
    {
      name: "Orders",
      amount: orders?.orders?.length,
      icon: <OrdersIcon />,
    },
    {
      name: "Therapist",
      amount: therapist?.length,
      icon: <UsersIcon />,
    },
    {
      name: "Services",
      amount: services?.data?.length,
      icon: <ServicesIcon />,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {cards?.map((card, i) => (
          <CardDashboard
            key={i}
            amount={card?.amount}
            icon={card?.icon}
            name={card?.name}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <h3 className="mb-4 text-xl font-semibold text-boxdark dark:text-white">
            Latest Order
          </h3>
          <TableOne
            data={dataOrders}
            loading={loadingTable}
            headers={[
              { key: "name", title: "Name" },
              { key: "therapist", title: "Therapist" },
              { key: "price", title: "Price" },
              { key: "date", title: "Date" },
              { key: "status", title: "Status" },
              { key: "detail", title: "Detail" },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
