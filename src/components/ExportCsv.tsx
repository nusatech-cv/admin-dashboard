import { CSVLink } from 'react-csv';

const ExportCSV = ({ data, filename, headers }) => {
  return (
    <CSVLink data={data} headers={headers} filename={filename}>
      Export to CSV
    </CSVLink>
  );
};

export default ExportCSV;