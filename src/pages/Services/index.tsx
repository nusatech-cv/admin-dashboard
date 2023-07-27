import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  serviceFetch,
  serviceCreate,
  serviceDelete,
  serviceUpdate,
  selectService,
  selectServiceLoading,
  selectServiceCreateLoading,
  selectServiceCreateSuccess,
  selectServiceUpdateLoading,
  selectServiceUpdateSuccess,
  selectServiceDeleteLoading,
  selectServiceDeleteSuccess,
  ServiceInterface,
} from "@modules/index";
import Breadcrumb from "../../components/Breadcrumb";
import TableOne from "../../components/TableOne";
import { Modal } from "../../components/Modal";
import moment from "moment-mini";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

const Services = () => {
  useDocumentTitle("Service List");
  const dispatch = useDispatch();
  const services: ServiceInterface = useSelector(selectService);
  const fetchLoading: boolean = useSelector(selectServiceLoading);
  const createLoading: boolean = useSelector(selectServiceCreateLoading);
  const createSuccess: boolean = useSelector(selectServiceCreateSuccess);
  const updateLoading: boolean = useSelector(selectServiceUpdateLoading);
  const updateSuccess: boolean = useSelector(selectServiceUpdateSuccess);
  const deleteLoading: boolean = useSelector(selectServiceDeleteLoading);
  const deleteSuccess: boolean = useSelector(selectServiceDeleteSuccess);

  const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);

  const [service_id, setServiceId] = useState<string | number>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price_per_hour, setPricePerHour] = useState<string>("");
  const [minimum_duration, setMinimumDuration] = useState<string | number>(30);
  const [image, setImage] = useState<File | null | string>(null);

  useEffect(() => {
    dispatch(serviceFetch());
  }, []);

  useEffect(() => {
    if (createSuccess || updateSuccess || deleteSuccess) {
      dispatch(serviceFetch());
      setIsOpenModalCreate(false);
      setIsOpenModalUpdate(false);
      setIsOpenModalDelete(false);
      setName("");
      setDescription("");
      setServiceId("");
      setPricePerHour("");
      setMinimumDuration("");
      setImage(null);
    }
  }, [createSuccess, updateSuccess, deleteSuccess]);

  const handleSubmitCreate = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price_per_hour", price_per_hour);
    formData.append("minimum_duration", minimum_duration.toString());
    formData.append("image", image);

    dispatch(serviceCreate(formData));
  };

  const handleSubmitUpdate = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price_per_hour", price_per_hour);
    formData.append("minimum_duration", minimum_duration.toString());
    formData.append("image", image);

    dispatch(serviceUpdate(formData, service_id));
  };

  const handleSubmitDelete = () => {
    dispatch(serviceDelete({ service_id }));
  };

  const handleChangeDescription = (e: string) => {
    setDescription(e);
  };

  const handleChangeName = (e: string) => {
    setName(e);
  };

  const handleChangePricePerHour = (e: string) => {
    const value = e.replace(/[^0-9\.]/g, "");
    setPricePerHour(value);
  };

  const handleChangeMinimumDuration = (e: string | number) => {
    const value = e?.toString()?.replace(/[^0-9\.]/g, "");
    setMinimumDuration(value);
  };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImage(file);
  };

  const handleShowCreate = () => {
    setIsOpenModalCreate(!isOpenModalCreate);
  };

  const handleShowEdit = () => {
    setIsOpenModalUpdate(!isOpenModalUpdate);
  };

  const handleShowDelete = () => {
    setIsOpenModalDelete(!isOpenModalDelete);
  };

  const renderModal = (
    <form className="flex flex-col gap-4">
      <div>
        <label className="mb-2 block font-medium text-black dark:text-white">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChangeName(e.target.value)}
          placeholder="Your Name"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div>
        <label className="mb-2 block font-medium text-black dark:text-white">
          Description
        </label>
        <textarea
          name="desc"
          value={description}
          onChange={(e) => handleChangeDescription(e.target.value)}
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 focus:border-primary active:border-primary disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          rows={5}
        ></textarea>
      </div>
      <div>
        <label className="mb-2 block font-medium text-black dark:text-white">
          Price per hour
        </label>
        <input
          name="price"
          value={price_per_hour}
          onChange={(e) => handleChangePricePerHour(e.target.value)}
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 focus:border-primary active:border-primary disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        ></input>
      </div>
      <div>
        <label className="mb-2 block font-medium text-black dark:text-white">
          Minimum Duration in minute (min. 30 minutes)
        </label>
        <input
          name="min"
          value={minimum_duration}
          onChange={(e) => handleChangeMinimumDuration(e.target.value)}
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 focus:border-primary active:border-primary disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        ></input>
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-medium text-black dark:text-white">
          Image
        </label>
        <input
          type="file"
          name="image"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeImage(event)
          }
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 focus:border-primary active:border-primary disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        ></input>
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={
            createLoading ||
            updateLoading ||
            deleteLoading ||
            !name ||
            !description ||
            !minimum_duration ||
            !price_per_hour ||
            !image
          }
          className={`inline-flex justify-center rounded-md border border-transparent bg-primary bg-opacity-90 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2  disabled:cursor-not-allowed disabled:bg-primary/50`}
          onClick={service_id ? handleSubmitUpdate : handleSubmitCreate}
        >
          {service_id ? "Edit" : "Create"}
        </button>
      </div>
    </form>
  );

  const data = services?.data?.map((item) => ({
    name: (
      <div className="mr-2 flex items-start justify-start gap-2 text-sm">
        <p className="hidden text-left text-black dark:text-white sm:block">
          {item.name}
        </p>
      </div>
    ),
    description: (
      <div className="flex gap-2 pr-4">
        <span className="text-justify text-sm font-medium">
          {item.description?.slice(0, 80)}..
        </span>
      </div>
    ),
    created_at: (
      <span className="pr-4 text-center text-sm font-medium">
        {moment(item.created_at).format('hh:mm:ss A, DD-MM-YYYY')}
      </span>
    ),
    updated_at: (
      <span className={`cursor-pointer pr-4 text-center text-sm font-medium`}>
        {moment(item.updated_at).format('hh:mm:ss A, DD-MM-YYYY')}
      </span>
    ),
    action: (
      <>
        <div className="flex items-center gap-2 px-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                handleShowEdit();
                setName(item.name);
                setDescription(item.description);
                setServiceId(item?.id);
                setMinimumDuration(item?.minimum_duration);
                setPricePerHour(item?.price_per_hour);
                setImage(item?.image?.url);
              }}
              className="inline-flex min-w-[75px] items-center justify-center rounded-full bg-secondary px-1 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-3 xl:px-4"
            >
              Edit
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              handleShowDelete();
              setName(item.name);
              setServiceId(item?.id);
            }}
            className="inline-flex min-w-[75px] items-center justify-center rounded-full bg-danger px-2 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-3 xl:px-4"
          >
            Delete
          </button>
        </div>
      </>
    ),
  }));

  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="Services" />
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={() => {
              handleShowCreate();
              setName("");
              setDescription("");
              setServiceId("");
              setPricePerHour("");
              setMinimumDuration("");
              setImage(null);
            }}
            className="inline-flex min-w-[75px] items-center justify-center rounded-full bg-primary px-1 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-3 xl:px-4"
          >
            Add
          </button>
        </div>
        <TableOne
          data={data}
          headers={[
            { key: "name", title: "Name" },
            { key: "description", title: "Description" },
            { key: "created_at", title: "Create at" },
            { key: "updated_at", title: "Update at" },
            { key: "action", title: "Action" },
          ]}
          loading={fetchLoading}
        />
      </div>

      <Modal
        closeModal={handleShowCreate}
        isOpen={isOpenModalCreate}
        desc={renderModal}
        title={
          <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            {"Add Service"}
          </h3>
        }
        size="large"
        withButton={false}
      />

      <Modal
        closeModal={handleShowEdit}
        isOpen={isOpenModalUpdate}
        desc={renderModal}
        title={"Edit Service"}
        size="large"
        withButton={false}
      />

      <Modal
        closeModal={handleShowDelete}
        isOpen={isOpenModalDelete}
        desc={`Are you sure you want to delete ${name}, deleted service will not be restored.`}
        title="Delete Service"
        buttonText="Delete"
        type="delete"
        centerContent
        onClick={handleSubmitDelete}
        withButton={true}
      />
    </>
  );
};

export default Services;
