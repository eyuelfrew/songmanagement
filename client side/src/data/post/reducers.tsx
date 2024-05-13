import {
  SAVE_SONG_VALUE_FAILED,
  SAVE_SONG_VALUE_SUCCESSFUL,
} from "./actionTypes";
interface SongAction {
  type: string;
  status: boolean;
}
interface AddSongState {
  success: boolean;
  status: number;
}
const initialState: AddSongState = {
  success: false,
  status: 0,
};
const AddSongReducer = (state = initialState, action: SongAction) => {
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
