import {
  FEATCHING_GET_SONG_DATA,
  FEATCHING_GET_SONG_DATA_FAILED,
  FEATCHING_GET_SONG_DATA_SUCCESS,
} from "./actionTypes";

const intialState = {
  songList: [],
  isFeatching: false,
  isFeatchingFailed: false,
};
const SongListReducer = (
  state = intialState,
  action: { type: string; SongList: unknown }
) => {
  switch (action.type) {
    case FEATCHING_GET_SONG_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case FEATCHING_GET_SONG_DATA_SUCCESS:
      return {
        ...state,
        songList: action.SongList,
      };
    case FEATCHING_GET_SONG_DATA_FAILED:
      return {
        ...state,
        isFeatchingFailed: true,
      };

    default:
      return state;
  }
};

export default SongListReducer;
