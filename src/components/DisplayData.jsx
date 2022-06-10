import React from "react";
import { useSelector } from "react-redux";

import "./displayData.scss";

const DisplayData = () => {
  const covidData = useSelector((state) => state.covidTracker.covidData);

  let renderData = "";

  renderData =
    covidData !== [] ? (
      covidData.map((data, index) => {
        return (
          <div className="data-card" key={index}>
            <div className="cases-data">
              <h2 className="cases-data-top">
                {data.country} <span>{data.continent}</span>
              </h2>
              <div className="cases">
                <h2 className="active-cases">Active: {data.cases.active}</h2>
                <h2 className="new-cases">New: {data.cases.new}</h2>
                <h2 className="critical-cases">
                  Critical: {data.cases.critical}
                </h2>
                <h2 className="recovered-cases">
                  Recovered: {data.cases.recovered}
                </h2>
                <h2 className="total-cases">Total: {data.cases.total}</h2>
                <h2 className="total-deaths">
                  Total-deaths: {data.deaths.total}
                </h2>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="error">
        <h3>Data not found</h3>
      </div>
    );

  // console.log(covidData);

  return <div className="display-Container">{renderData}</div>;
};

export default DisplayData;
