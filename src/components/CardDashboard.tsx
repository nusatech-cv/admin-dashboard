import * as React from "react";

interface CardDashboardProps {
  icon: React.ReactNode | React.ReactElement;
  amount: number;
  name: string;
}

export const CardDashboard = ({ icon, amount, name }: CardDashboardProps) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {icon}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between">
        <h4 className="text-title-md font-bold text-black dark:text-white">
          {amount}
        </h4>
        <span className="whitespace-nowrap text-right text-sm font-medium capitalize">
          Total {name}
        </span>
      </div>
    </div>
  );
};
