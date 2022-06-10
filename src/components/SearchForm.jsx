import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./search.scss";

import { getCovidDataByCountry } from "../features/covidSlice";
import { getSpecifiedImage } from "../features/imageSlice";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const covidSearchFormHandler = (e) => {
    e.preventDefault();
    dispatch(getCovidDataByCountry(searchTerm));
    dispatch(getSpecifiedImage(searchTerm));
  };

  return (
    <div className="covid-search-container">
      <div className="search-form">
        <form onSubmit={covidSearchFormHandler}>
          <input
            type="text"
            placeholder="Country..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
