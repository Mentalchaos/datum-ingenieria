import { useEffect, useState } from "react";
import { api } from "../../config/api";

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const csrfToken = localStorage.getItem('csrf_token');

      api.get("complaints/", {
        headers: {
          "X-CSRFToken": csrfToken,
        }
      })
      .then((res) => {
        setReports(res.results);
      })
      .catch((err) => console.log(err));
    };

    fetchReports();
  }, []);

  const reportRender = () => {
    return reports.map((report) => (
      <div key={report.id} className="order-b border-gray-200 pb-4 mb-4 border-b">
        <div>
          <h2 className="text-lg font-bold">Email: {report.contact_email}</h2>
          <p className="text-sm text-gray-500">Teléfono: {report.contact_phone}</p>
        </div>
        <p className="p-4 border-l-2 border-gray-200">{report.incident_description}</p>
      </div>
    ));
  };

  const renderReports = () => {
    return (
      <div>
        <div className="p-4">
          <div>
            {reportRender()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <h1 className="text-2xl font-bold">Reports</h1>

      <div>
        {renderReports()}
      </div>
    </div>
  );
};

export default Reports;
