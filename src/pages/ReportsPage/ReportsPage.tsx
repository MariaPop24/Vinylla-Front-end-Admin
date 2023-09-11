import React, { useEffect, useState } from "react";
import "./ReportsPage.scss";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { FormattedMessage } from "react-intl";
import TextBlock from "../../components/molecules/TextBlock/TextBlock";
import ReportCard from "../../components/molecules/ReportCard/ReportCard";
import { useNavigate } from "react-router-dom";

const ReportsPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [reports, setReports] = useState([]);
  const user = localStorage.getItem("usersData");

  const fetchReports = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/reports/getReports"
      );
      const reports = response.data.reports;
      setReports(reports);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <div className="all-products--container">
        <TextBlock messageId="pages.reports.title" />
        <div className="all-product--albums">
          {isLoading ? (
            <div className="all-products--spinner">
              <BeatLoader />
            </div>
          ) : (
            <div className="all-products--list">
              {reports && reports.length > 0 ? (
                reports.map((item: any, index: number) => (
                  <div key={index}>
                    <ReportCard item={item} fetchReports={fetchReports} />
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
