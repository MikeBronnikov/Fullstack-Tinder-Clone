import { UserType } from "./../Types/Types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";


export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState: {
    usersCards: null as null | Array<UserType>,
  },
  reducers: {
    addToUsersCards: (state, action: PayloadAction<Array<UserType>>) => {
      state.usersCards = action.payload;
    },
  },
});

export const GetUsersCards = createAsyncThunk(
  "users/GetUsersCards",
  async (params,  { dispatch }) => {
    try {
      const response: Array<UserType> = await axios
        .get("http://localhost:8001/tinder/cards")
        .then((res) => res.data);
        dispatch(addToUsersCards(response));
      
    } catch (error) {

      console.error(error)
      
    }
  }
);
// Action creators are generated for each case reducer function
export const { addToUsersCards } = mainPageSlice.actions;

export default mainPageSlice.reducer;
