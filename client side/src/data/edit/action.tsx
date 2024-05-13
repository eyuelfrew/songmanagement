import {
  EDIT_SONG_SUCCESS,
  INIT_EDIT_SONG_INFO,
  SONG_SAVED_SUCCESS,
} from "./actionType";

export const initEditSong = (
  id: string,
  editedSongInf: {
    title: string;
    artist: string;
    album: string;
    genre: string;
  }
) => {
  return {
    type: INIT_EDIT_SONG_INFO,
    songInfo: editedSongInf,
    songId: id,
  };
};

export const editSongSuccess = (editedSongInfo: unknown) => {
  return { type: EDIT_SONG_SUCCESS, editResponse: editedSongInfo };
};
export const SaveSongSuccess = () => {
  return { type: SONG_SAVED_SUCCESS };
};
