import * as TYPE from "../types";

const initialState = {
  topicsList: [],
  selectedTopics: [],
};
const profile = (
  state = {
    ...initialState,
  },
  action
) => {
  switch (action.type) {
    case TYPE.ADD_SELECTEDTOPICSLIST:
      const temp = state.selectedTopics;
      temp.push(action.payload);
      return {
        ...state,
        selectedTopics: [...temp],
      };
    case TYPE.REMOVE_SELECTEDTOPICSLIST:
      let temp2 = state.selectedTopics;
      temp2 = temp2.filter((item) => item !== action.payload);
      return {
        ...state,
        selectedTopics: [...temp2],
      };
    default:
      return { ...state };
  }
};

export default profile;
