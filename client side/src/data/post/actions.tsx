import {
  SAVE_SONG_VALUE,
  SAVE_SONG_VALUE_FAILED,
  SAVE_SONG_VALUE_SUCCESSFUL,
} from "./actionType";

//create new song info action
export const initSaveSongValue = (songInfo: {
  title: string;
  album: string;
  genre: string;
  artist: string;
}) => {
  return {
    type: SAVE_SONG_VALUE,
    songInfo,
  };
};
export function initSaveSongSuccessfull(status: number) {
  return {
    type: SAVE_SONG_VALUE_SUCCESSFUL,
    status,
  };
}
export function initSaveSongValueFaild(failed: boolean) {
  return {
    type: SAVE_SONG_VALUE_FAILED,
    failed,
  };
}
