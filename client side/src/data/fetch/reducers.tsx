import {
  FEATCHING_GET_SONG_DATA,
  FEATCHING_GET_SONG_DATA_FAILED,
  FEATCHING_GET_SONG_DATA_SUCCESS,
} from "./actionTypes";

interface AllSongList {
  allSongs: {
    _id: string;
    title: string;
    album: string;
    genre: string;
    artist: string;
  }[];
  isFeatching: boolean;
  isFeatchingFailed: boolean;
}
const initialState: AllSongList = {
  allSongs: [],
  isFeatching: false,
  isFeatchingFailed: false,
};
const SongListReducer = (
  state = initialState,
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
        allSongs: action.SongList,
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
