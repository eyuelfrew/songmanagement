import {
  INIT_VIEW_SONG,
  VIEW_SONG_FAILED,
  VIEW_SONG_SUCCESS,
} from "./actionTypes";

export const ViewSongInfo = (_id: string) => {
  return {
    type: INIT_VIEW_SONG,
    _id: _id,
  };
};
export const SongViewSuccess = (songDetail: {
  title: string;
  artist: string;
  album: string;
  genre: string;
}) => {
  return {
    type: VIEW_SONG_SUCCESS,
    songDetail: songDetail,
  };
};
export const SongViewFailed = () => {
  return {
    type: VIEW_SONG_FAILED,
  };
};
