import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCovidDataByCountry = createAsyncThunk(
  "covidTracker/getCovidDataByCountry",
  async (search_term) => {
    try {
      let response = await fetch(
        `https://covid-193.p.rapidapi.com/statistics?country=${search_term}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "7171c1d894msh549cd8c5c8cade0p11cac8jsnc5b66a3afd49",
            "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
          },
        }
      );

      let data = await response.json();
      return data.response;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const covidSlice = createSlice({
  name: "covidTracker",
  initialState: {
    covidData: [],
    isLoading: false,
  },
  extraReducers: {
    [getCovidDataByCountry.pending]: (state) => {
      state.isLoading = true;
    },
    [getCovidDataByCountry.fulfilled]: (state, action) => {
      state.covidData = action.payload;
      state.isLoading = false;
    },
    [getCovidDataByCountry.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default covidSlice.reducer;
