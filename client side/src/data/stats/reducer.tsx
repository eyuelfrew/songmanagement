import { GET_STAT_SUCCESS } from "./actionTypes";

const initialState = {
  statistics: undefined,
};
const SongStatisticsReducer = (
  state = initialState,
  action: { type: string; data: object }
) => {
  switch (action.type) {
    case GET_STAT_SUCCESS:
      return { ...state, statistics: action.data };
    default:
      return state;
  }
};
export default SongStatisticsReducer;
