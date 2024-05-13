import { GET_ATRTIST_SUCCESS, INIT_GET_ARTIST } from "./actionType";

export const getArtistsStat = () => {
  return { type: INIT_GET_ARTIST };
};
export const getArtistSuccess = (data: []) => {
  return { type: GET_ATRTIST_SUCCESS, data: data };
};
