import * as TYPE from "../types";
import axios from "axios";
// import { request } from "../../util/request";


export const getProfileData = (userId) => async (dispatch) => {
  try {
    var response = await axios.get(
      'api/profile',
      {
        query: userId,
      },
      // { headers: { Authorization: getState().user.token } }
    );
    if (response) {
      dispatch({
        type: TYPE.SET_USERPROFILE,
        payload: response.data.result,
      });
    }
  } catch (err) {
    console.log("Error", err);
    return;
  }
};