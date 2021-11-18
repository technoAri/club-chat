import * as TYPE from "../types";

const initialState = {
  isLoaded: false,
  profileData: {}
};
const profile = (
  state = {
    ...initialState,
  },
  action
) => {
  switch (action.type) {
    case TYPE.SET_USERPROFILE:
      return {
        ...state,
        isLoaded: true,
        profileData: { ...action.payload },
      };
    default:
      return { ...state };
  }
};

export default profile;
