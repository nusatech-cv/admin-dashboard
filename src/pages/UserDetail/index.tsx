import Breadcrumb from "../../components/Breadcrumb";
import moment from "moment-mini";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userSingleFetch,
  selectUserSingle,
  UserInterface,
} from "@modules/index";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

const UserDetail = () => {
  useDocumentTitle("User Detail");
  const dispatch = useDispatch();
  const { id = "" } = useParams<{ id?: string }>();
  const user: UserInterface = useSelector(selectUserSingle);

  useEffect(() => {
    dispatch(userSingleFetch(id));
  }, [id]);

  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="User Detail" />
        <div className="mb-8 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="mb-4 flex items-center justify-start gap-4">
            <img
              src={user.avatar}
              alt="Brand"
              width={60}
              height={60}
              className="rounded-full"
            />
            <p className="hidden text-2xl text-black dark:text-white sm:block">
              {user.first_name} {user?.role ? `- ${user.role}` : ""}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 border-r-2 border-gray pr-12 dark:border-x-graydark">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">ID</p>
                <p className="text-sm font-semibold text-boxdark dark:text-white">
                  {user.id}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">First Name</p>
                <p className="text-sm font-semibold text-boxdark dark:text-white">
                  {user.first_name}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Created at</p>
                <p className="text-sm font-semibold text-boxdark dark:text-white">
                  {moment(user.created_at).format('hh:mm:ss A, DD-MM-YYYY')}
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-12">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Email</p>
                <p className="text-sm font-semibold text-boxdark dark:text-white">
                  {user.email}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Last Name</p>
                <p className="text-sm font-semibold text-boxdark dark:text-white">
                  {user.last_name}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Updated at</p>
                <p className="text-sm font-semibold text-boxdark dark:text-white">
                  {moment(user.updated_at).format('hh:mm:ss A, DD-MM-YYYY')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
