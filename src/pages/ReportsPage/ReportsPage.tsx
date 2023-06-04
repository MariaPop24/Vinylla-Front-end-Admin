import React, { useEffect, useState } from "react";
import "./ReportsPage.scss";
import Navbar from "../../components/organisms/Navbar/Navbar";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { FormattedMessage } from "react-intl";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import ReportCard from "../../components/molecules/ReportCard/ReportCard";

const ReportsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reports, setReports] = useState([]);

  const fetchReports = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/reports/getReports"
      );
      console.log(response);
      const reports = response.data.reports;
      setReports(reports);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="all-products--container">
        <TextBlock messageId="pages.reports.title" />
        <div className="all-product--albums">
          {isLoading ? (
            <div className="all-products--spinner">
              <BeatLoader />
            </div>
          ) : (
            <div className="all-products--list">
              {reports.length > 0 ? (
                reports.map((item: any, index: number) => (
                  <div key={index}>
                    <ReportCard
                      item={item}
                      setIsLoading={setIsLoading}
                      fetchReports={fetchReports}
                    />
                  </div>
                ))
              ) : (
                <div className="all-products--no-results">
                  <FormattedMessage id="pages.allProducts.no-results" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
