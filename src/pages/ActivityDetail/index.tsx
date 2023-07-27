import Breadcrumb from "../../components/Breadcrumb";
import moment from "moment-mini";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ActivitySingleInterface,
  activitySingleFetch,
  selectSingleActivity,
} from "@modules/index";
import { Map } from "@components/Map";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

const ActivityDetail = () => {
  useDocumentTitle("Activity Detail");
  const dispatch = useDispatch();
  const { id = "" } = useParams<{ id?: string }>();
  const activity: ActivitySingleInterface = useSelector(selectSingleActivity);

  useEffect(() => {
    dispatch(activitySingleFetch(id));
  }, [id]);

  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="Activity Detail" />
        <div className="mb-8 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex justify-between">
            <div className="w-1/2 border-r-2 border-gray pr-12 dark:border-x-graydark">
              <div className="mb-4 flex items-center justify-between gap-6">
                <p className="text-base font-medium">User ID</p>
                <p className="text-right text-sm font-semibold text-boxdark dark:text-white">
                  {activity.activity.id}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-6">
                <p className="text-base font-medium">First Name</p>
                <p className="text-right text-sm font-semibold text-boxdark dark:text-white">
                  {activity.activity.first_name}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-6">
                <p className="text-base font-medium">Activity Type</p>
                <p className="text-right text-sm font-semibold text-boxdark dark:text-white">
                  {activity.activity.activity_type}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-6">
                <p className="text-base font-medium">IP Address</p>
                <p className="text-right text-sm font-semibold text-boxdark dark:text-white">
                  {activity.activity.ip_address}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Date</p>
                <p className="text-sm font-semibold text-boxdark dark:text-white">
                {moment(activity.activity.created_at).format('hh:mm:ss A, DD-MM-YYYY')}
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-12">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Email</p>
                <p className="text-sm font-semibold text-boxdark dark:text-white">
                  {activity.activity.user_email}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-base font-medium">Last Name</p>
                <p className="text-sm font-semibold text-boxdark dark:text-white">
                  {activity.activity.last_name}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-6">
                <p className="text-base font-medium">Result</p>
                <p
                  className={`text-right text-sm font-semibold capitalize ${
                    activity.activity.result === "failed"
                      ? "text-danger"
                      : activity.activity.result === "success"
                      ? "text-success"
                      : "text-warning"
                  }`}
                >
                  {activity.activity.result}
                </p>
              </div>
              <div className="mb-4 flex items-center justify-between gap-6">
                <p className="text-base font-medium">Device</p>
                <p className="text-right text-sm font-semibold text-boxdark dark:text-white">
                  {activity.activity.device_info}
                </p>
              </div>
            </div>
          </div>
        </div>
        {activity.activity.location.x !== null && (
          <>
            <h3 className="mb-4 text-xl font-semibold text-boxdark dark:text-white">
              Location
            </h3>
            <Map location={activity.activity} type="single" />
          </>
        )}
      </div>
    </>
  );
};

export default ActivityDetail;
