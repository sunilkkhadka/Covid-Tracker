import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSpecifiedImage = createAsyncThunk(
  "image/getSpecifiedImage",
  async (search_term) => {
    try {
      let response = await fetch(
        `https://image-api2.p.rapidapi.com/?image_name=${search_term}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "7171c1d894msh549cd8c5c8cade0p11cac8jsnc5b66a3afd49",
            "X-RapidAPI-Host": "image-api2.p.rapidapi.com",
          },
        }
      );

      let data = await response.json();
      return data.results[0];
    } catch (err) {
      console.log(err.message);
    }
  }
);

const imageSlice = createSlice({
  name: "image",
  initialState: {
    images: [],
    isLoading: false,
  },
  reducers: {
    drainData: (state) => {
      state.images = [];
    },
  },
  extraReducers: {
    [getSpecifiedImage.pending]: (state) => {
      state.isLoading = true;
    },
    [getSpecifiedImage.fulfilled]: (state, action) => {
      state.images = action.payload;
      state.isLoading = false;
    },
    [getSpecifiedImage.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { drainData } = imageSlice.actions;
export default imageSlice.reducer;
