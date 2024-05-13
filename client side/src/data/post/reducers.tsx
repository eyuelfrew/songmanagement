import {
  SAVE_SONG_VALUE_FAILED,
  SAVE_SONG_VALUE_SUCCESSFUL,
} from "./actionTypes";

const initialState = {
  success: false,
  status: 0,
};
const AddSongReducer = (
  state = initialState,
  action: { type: string; status: boolean; failed: boolean }
) => {
  switch (action.type) {
    case SAVE_SONG_VALUE_SUCCESSFUL:
      return {
        ...state,
        status: action.status,
      };
    case SAVE_SONG_VALUE_FAILED:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};
export default AddSongReducer;
