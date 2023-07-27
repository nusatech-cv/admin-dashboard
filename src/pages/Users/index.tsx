import * as React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { Modal } from "../../components/Modal";
import TableOne from "../../components/TableOne";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectUserLoading,
  UserInterface,
  userFetch,
  userUpdate,
  selectUserUpdateLoading,
  selectUserUpdateSuccess,
} from "@modules/index";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";
import ExportCSV from "@components/ExportCsv";
import moment from "moment-mini";

const Users = () => {
  useDocumentTitle("Users List");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchLoading: boolean = useSelector(selectUserLoading);
  const updateLoading: boolean = useSelector(selectUserUpdateLoading);
  const updateSuccess: boolean = useSelector(selectUserUpdateSuccess);
  const users: UserInterface[] = useSelector(selectUser);

  const [isOpenEdit, setIsOpenEdit] = React.useState<boolean>(false);
  const [first_name, setFirstName] = React.useState<string>("");
  const [last_name, setLastName] = React.useState<string>("");
  const [avatar, setAvatar] = React.useState<string>("");
  const [user_id, setUserId] = React.useState<string | number>();
  const [role, setRole] = React.useState<string>("");

  React.useEffect(() => {
    dispatch(userFetch());
  }, []);

  React.useEffect(() => {
    if (updateSuccess) {
      setIsOpenEdit(!isOpenEdit);
      dispatch(userFetch());
    }
  }, [updateSuccess]);

  const dataUsers = users?.filter((item) => item.role !== "Therapist");

  const handleUpdateUser = (user_id: number | string) => {
    dispatch(
      userUpdate(
        {
          first_name,
          last_name,
          avatar,
          role,
        },
        user_id
      )
    );
  };

  const handleChangeFirstName = (e: string) => {
    setFirstName(e);
  };

  const handleChangeLastName = (e: string) => {
    setLastName(e);
  };

  const handleChangeAvatar = (e: string) => {
    setAvatar(e);
  };

  const handleShowModalEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };

  const renderEditUserForm = (
    <form className="flex flex-col gap-4">
      <div>
        <label className="mb-2 block font-medium text-black dark:text-white">
          First Name
        </label>
        <input
          type="text"
          value={first_name}
          onChange={(e) => handleChangeFirstName(e.target.value)}
          placeholder="Your first name"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div>
        <label className="mb-2 block font-medium text-black dark:text-white">
          Last Name
        </label>
        <input
          type="text"
          value={last_name}
          onChange={(e) => handleChangeLastName(e.target.value)}
          placeholder="Your last name"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-medium text-black dark:text-white">
          Avatar
        </label>
        <input
          type="text"
          value={avatar}
          onChange={(e) => handleChangeAvatar(e.target.value)}
          placeholder="Default Input"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className={`inline-flex justify-center rounded-md border border-transparent bg-primary bg-opacity-90 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2  disabled:cursor-not-allowed disabled:bg-primary/50`}
          disabled={updateLoading || !first_name || !last_name || !avatar}
          onClick={() => handleUpdateUser(user_id)}
        >
          Update
        </button>
      </div>
    </form>
  );

  const headerUser = [
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "role", title: "Role" },
    { key: "action", title: "Action" },
  ];

  const dataUser = dataUsers?.map((item) => ({
    name: (
      <div className="flex items-center justify-start gap-2">
        <img
          src={item.avatar}
          alt="Brand"
          width={36}
          height={36}
          className="rounded-full"
        />
        <p className="hidden text-black dark:text-white sm:block">
          {item.first_name}
        </p>
      </div>
    ),
    email: (
      <span className="text-center text-sm font-medium">{item.email}</span>
    ),
    role: (
      <span className="text-center text-sm font-medium">
        {item.role ? item.role : "-"}
      </span>
    ),
    action: (
      <>
        <div className="flex items-center  gap-4">
          <span
            onClick={() => navigate(`/users/detail/${item.id}`)}
            className={`cursor-pointer text-center text-sm font-medium text-secondary`}
          >
            Detail
          </span>
          <button
            type="submit"
            disabled={updateLoading || fetchLoading}
            onClick={() => {
              handleShowModalEdit();
              setUserId(item.id);
              setFirstName(item.first_name);
              setLastName(item.last_name);
              setAvatar(item.avatar);
              setRole(item.role);
            }}
            className="inline-flex min-w-[75px] items-center justify-center rounded-full bg-secondary px-2 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-3 xl:px-4"
          >
            Edit
          </button>
        </div>
      </>
    ),
  }));

  const headerExportCsv = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Role", key: "role" },
    { label: "Created At", key: "created_at" },
  ];

  const dataExportCsv = dataUsers?.map((item) => ({
    name: item?.first_name + " " + item?.last_name,
    email: item?.email,
    role: item?.role,
    created_at: moment(item?.created_at).format("L"),
  }));

  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="Users" />
        <div className="mb-6 flex justify-start">
          <div className="rounded-lg bg-success px-4 py-2 text-sm text-white">
            <ExportCSV
              data={dataExportCsv}
              headers={headerExportCsv}
              filename={"users_home_spa.csv"}
            />
          </div>
        </div>
        <TableOne data={dataUser} headers={headerUser} loading={fetchLoading} />
      </div>

      <Modal
        closeModal={handleShowModalEdit}
        isOpen={isOpenEdit}
        desc={renderEditUserForm}
        title={
          <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            Edit User
          </h3>
        }
        size="large"
        withButton={false}
      />
    </>
  );
};

export default Users;
