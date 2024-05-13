import {
  INIT_VIEW_SONG,
  VIEW_SONG_FAILED,
  VIEW_SONG_SUCCESS,
} from "./actionTypes";

const initialState = {
  songInfo: {},
  isFeatching: false,
  isFeatchingFaild: false,
};
const ViewSongReducer = (
  state = initialState,
  action: {
    type: string;
    songDetail: unknown;
  }
) => {
  switch (action.type) {
    case INIT_VIEW_SONG:
      return { ...state, isFeatching: true };
    case VIEW_SONG_SUCCESS:
      return { ...state, songInfo: action.songDetail, isFeatching: false };
    case VIEW_SONG_FAILED:
      return { ...state, isFeatching: false };
    default:
      return state;
  }
};
export default ViewSongReducer;
