import {
  FEATCHING_GET_SONG_DATA,
  FEATCHING_GET_SONG_DATA_FAILED,
  FEATCHING_GET_SONG_DATA_SUCCESS,
  INIT_GET_SONG,
} from "./actionTypes";
//************** * /
/********* Get All Song Action's *******
//************ */

export const initGetSongInfo = () => {
  console.log("test");
  return {
    type: INIT_GET_SONG,
  };
};
export const initGetFetching = () => {
  return {
    type: FEATCHING_GET_SONG_DATA,
  };
};
export const GetSongFaild = () => {
  return {
    type: FEATCHING_GET_SONG_DATA_FAILED,
  };
};
export const GetSongSuccess = (SongList: unknown) => {
  console.log("error");
  return {
    type: FEATCHING_GET_SONG_DATA_SUCCESS,
    SongList,
  };
};
