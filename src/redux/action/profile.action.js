import * as TYPE from "../types";
// import axios from "axios";
// import { request } from "../../util/request";

export const setProfileData = (email) => (dispatch) => {
  dispatch({
    type: TYPE.ADD_SELECTEDTOPICSLIST,
    payload: selectedTopics,
  });
};

export const removeTopics = (selectedTopics) => (dispatch) => {
  dispatch({
    type: TYPE.REMOVE_SELECTEDTOPICSLIST,
    payload: selectedTopics,
  });
};

export const getProfileData = (email) => (dispatch) => {
  
  dispatch({
    type: TYPE.ADD_SELECTEDTOPICSLIST,
    payload: selectedTopics,
  });
};