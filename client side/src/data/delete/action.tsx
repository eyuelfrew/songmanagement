import { INIT_DELETE_SONG_INFO } from "./actionType";

export const deleteSongInfo = (id: string) => {
  return {
    type: INIT_DELETE_SONG_INFO,
    id: id,
  };
};
