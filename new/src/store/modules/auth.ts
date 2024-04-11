import {  createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import AuthAPI from "../../api/Auth";

const NAME = "auth";

const initialState = {
  userDetails: undefined,
};

const slice = createSlice({
  name: NAME,
  initialState,
  // mutation
  reducers: {
    SET_AUTH_DETAILS(state, { payload: details }) {
      window.localStorage.setItem("email", details.email);
      state.userDetails = details
    },
    SET_AUTH_TOKEN(state, { payload: token }) {
      window.localStorage.setItem("token", token);
    },

    RESET(state) {
      state.userDetails = undefined;
    },
  },
});

export const { reducer } = slice;

export const actions = {
  login: (payload) => async (dispatch) => {
    try {
      const response = await AuthAPI.login(payload);
      dispatch(slice.actions.SET_AUTH_TOKEN(response.token));
      dispatch(slice.actions.SET_AUTH_DETAILS(payload));
      toast.success("Login Successful");
      return response.token;
    } catch (error) {
      console.error(error);
    }
  },
  register: (payload) => async (dispatch) => {
    try {
      const response = await AuthAPI.register(payload);
      dispatch(slice.actions.SET_AUTH_TOKEN(response.token));
      dispatch(slice.actions.SET_AUTH_DETAILS(payload));
      toast.success("User registered Successfully");
      return response.token;
    } catch (error) {
      console.error(error);
    }
  },
  logout: () => async () => {
    try {
      const response = await AuthAPI.logout();
      if(response){
        window.localStorage.clear()
        toast.success("User logout Successfully");
      }
    } catch (error) {
      console.error(error);
    }
  },
};

const getters = {

  getUserDetails(rootState) {
    const state = rootState[NAME];
    return state.userDetails;
  },
};
export default {
  actions,
  getters,
  slice,
};
