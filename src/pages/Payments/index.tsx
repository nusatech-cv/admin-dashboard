import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb";
import TableOne from "../../components/TableOne";
import moment from "moment-mini";
import { PaymentInterface, paymentFetch, selectPayment } from "@modules/index";
import { useEffect } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import ExportCSV from "@components/ExportCsv";

const Payments = () => {
  useDocumentTitle("Payments List");
  const dispatch = useDispatch();
  const payments: PaymentInterface = useSelector(selectPayment);

  useEffect(() => {
    dispatch(paymentFetch());
  }, []);

  const dataPayments =
    payments?.payments &&
    payments?.payments.map((item) => ({
      sender: (
        <span className="text-center px-2 text-sm font-medium">
          {item.sender_account}
        </span>
      ),
      to: (
        <span className="text-center px-2 text-sm font-medium">
          {item.to_account}
        </span>
      ),
      amount: (
        <span className="text-center px-2 text-sm font-medium">
          {item.amount_paid}
        </span>
      ),
      method: (
        <span className="text-center px-2 text-sm font-medium">
          {item.payment_method}
        </span>
      ),
      payment_at: (
        <span className={`cursor-pointer text-center whitespace-nowrap text-sm font-medium`}>
          {moment(item.payment_at).format('hh:mm:ss A, DD-MM-YYYY')}
        </span>
      ),
      payment_expired: (
        <div className="flex flex-col items-center gap-2 text-sm">
          {moment(item.payment_expired).format('hh:mm:ss A, DD-MM-YYYY')}
        </div>
      ),
      status: (
        <span className={`${item.payment_status.includes('success') ? 'text-success' : item.payment_status.includes('failed') ? 'text-danger' : 'text-warning' } text-center px-2 text-sm font-medium lowercase`}>
          {item.payment_status}
        </span>
      ),
    }));

    const headerExportCsv = [
      { label: "Sender", key: "sender" },
      { label: "To", key: "to" },
      { label: "Amount", key: "amount" },
      { label: "Payment Method", key: "method" },
      { label: "Payment At", key: "payment_at" },
      { label: "Payment Expired", key: "payment_expired" },
      { label: "Status", key: "status" },
    ]
  
    const dataExportCsv = payments?.payments?.map((item)=> ({
      sender: item?.sender_account,
      to: item?.to_account,
      amount: item?.amount_paid,
      method : item?.payment_method,
      payment_at : moment(item?.payment_at).format('L'),
      payment_expired : moment(item?.payment_expired).format('L'),
      status : item?.payment_status,
    }))

  return (
    <>
      <div className="p-4">
        <Breadcrumb pageName="Payments" />
        <div className="flex justify-start mb-6">
          <div className="bg-success px-4 text-white text-sm py-2 rounded-lg">
            <ExportCSV data={dataExportCsv} headers={headerExportCsv} filename={'payments_home_spa.csv'} />
          </div>
        </div>
        <TableOne
          data={dataPayments}
          headers={[
            { key: "sender", title: "Sender Account" },
            { key: "to", title: "To Account" },
            { key: "amount", title: "Amount" },
            { key: "method", title: "Method" },
            { key: "payment_at", title: "Payment At" },
            { key: "payment_expired", title: "Payment Expired" },
            { key: "status", title: "Status" },
          ]}
          loading={false}
        />
      </div>
    </>
  );
};

export default Payments;
