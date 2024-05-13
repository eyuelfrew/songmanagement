import { GET_STAT_SUCCESS, INIT_GET_STAT } from "./actionTypes";

export const getStatistics = () => {
  return {
    type: INIT_GET_STAT,
  };
};
export const SongStatistics = (stat_data: unknown) => {
  return {
    type: GET_STAT_SUCCESS,
    data: stat_data,
  };
};
