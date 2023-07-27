import Breadcrumb from "../../components/Breadcrumb";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TherapistInterface,
  selectTherapist,
  therapistFetch,
} from "@modules/index";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Map } from "@components/Map";

const TherapistLocations = () => {
  useDocumentTitle("All Therapist Location");
  const dispatch = useDispatch();
  const therapist: TherapistInterface[] = useSelector(selectTherapist);

  useEffect(() => {
    dispatch(therapistFetch());
  }, []);

  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="All Theraphist Location" />

        <div className="w-full">
          <Map locations={therapist} type="multiple" />
        </div>
      </div>
    </>
  );
};

export default TherapistLocations;
