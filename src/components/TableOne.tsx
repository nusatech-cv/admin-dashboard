import { ReactNode, memo } from "react";
import { useDefaultProps } from "../hooks/useDefaultProps";

interface BimaTableProps {
  headers: {
    key: string;
    title?: ReactNode;
  }[];
  data: any[];
  loading?: boolean;
}

const TableOne = memo((_props: BimaTableProps) => {
  const { headers, data, loading } = useDefaultProps(_props, {});

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-2 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-1.5 xl:pb-1">
        <table className="w-full table-auto border-separate border-spacing-y-4 px-6">
          <thead className={`sticky top-0`}>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`text-light6 text-base font-semibold text-left px-2 whitespace-nowrap first:rounded-l-lg last:rounded-r-lg `}
                >
                  {header.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={""}>
            {!loading ? (
              data?.length ? (
                data.map((e, i) => (
                  <tr key={i}>
                    {headers?.map((col, i) => (
                      <td
                        key={i}
                        className={`mb-6 first:rounded-l-lg last:rounded-r-lg`}
                      >
                        {e![col.key.toLowerCase()]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10}>
                    <div className="mx-auto grid place-items-center py-5">
                      'Data Not Found'
                    </div>
                  </td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan={10}>
                  <div className="mx-auto grid place-items-center py-5">
                    Loading...
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
});

export default TableOne;
