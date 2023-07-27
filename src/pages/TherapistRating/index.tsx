import { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TableOne from "../../components/TableOne";
import { useDispatch, useSelector } from "react-redux";
import {
  TherapistRatingInterface,
  selectTherapistRating,
  therapistRatingFetch,
} from "@modules/index";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { useParams } from "react-router-dom";
import moment from "moment-mini";
import ExportCSV from "@components/ExportCsv";

const TherapistRating = () => {
  useDocumentTitle("Therapist Rating List");
  const dispatch = useDispatch();
  const { id = "" } = useParams<{ id?: string }>();
  const therapistRating: TherapistRatingInterface[] = useSelector(
    selectTherapistRating
  );  

  useEffect(() => {
    dispatch(therapistRatingFetch(id));
  }, []);

  const dataTherapistRating =
    therapistRating &&
    therapistRating?.map((item) => ({
      user: (
        <div className="flex items-center justify-start gap-2">
        <img
          src={item.user.avatar}
          alt="Brand"
          width={36}
          height={36}
          className="rounded-full"
        />
        <span className="text-left text-sm font-medium">
          {item?.user.first_name} {item?.user.last_name}
        </span>
      </div>
        
      ),
      service: (
        <span className="text-center text-sm font-medium">
          {item.service.name}
        </span>
      ),
      description: (
        <span className="text-center text-sm font-medium">
          {item.service.description.slice(0,100)}..
        </span>
      ),
      rating: (
        <span className={`rounded-sm  mx-4 ${Number(item.rating) < 1 ? 'bg-danger' : Number(item.rating) < 2 ? 'bg-meta-7' : Number(item.rating) < 3 ? 'bg-meta-6' : Number(item.rating) < 4 ? 'bg-success': 'bg-primary'} p-1 text-xs text-white`}>
            {item.rating ? item.rating : "0.0"}
          </span>
      ),
      note: (
        <span className="text-center text-sm font-medium">{item.note}</span>
      ),
      date: (
        <span className="text-center text-sm font-medium whitespace-nowrap">
          {moment(item.created_at).format('hh:mm:ss A, DD-MM-YYYY')}
        </span>
      ),
    }));

    const headerExportCsv = [
      { label: "User", key: "user" },
      { label: "Service", key: "Service" },
      { label: "description", key: "description" },
      { label: "rating", key: "rating" },
      { label: "note", key: "note" },
      { label: "date", key: "date" },
    ]
  
    const dataExportCsv = therapistRating?.map((item)=> ({
      user: item?.user,
      Service: item?.service,
      description: item?.service.description,
      rating : item?.rating,
      note : item?.note,
      date : moment(item?.created_at).format('L'),
    }))
  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="Therapist Rating" />
        <div className="flex justify-start mb-6">
          <div className="bg-success px-4 text-white text-sm py-2 rounded-lg">
            <ExportCSV data={dataExportCsv} headers={headerExportCsv} filename={'therapist_rating_home_spa.csv'} />
          </div>
        </div>
        <TableOne
          data={dataTherapistRating}
          headers={[
            { key: "user", title: "User" },
            { key: "service", title: "Services" },
            { key: "description", title: "Description" },
            { key: "rating", title: "Rating" },
            { key: "note", title: "Note" },
            { key: "date", title: "date" },
          ]}
          loading={false}
        />
      </div>
    </>
  );
};

export default TherapistRating;
