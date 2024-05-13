import { GET_ATRTIST_SUCCESS, INIT_GET_ARTIST } from "./actionType";

const initialState = {
  data: [],
  isFetchSuccess: false,
  isFetchFaild: false,
};
const ArtistStaticsReducer = (
  state = initialState,
  action: { type: string; data: [] }
) => {
  switch (action.type) {
    case INIT_GET_ARTIST:
      return { ...state };
    case GET_ATRTIST_SUCCESS:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
export default ArtistStaticsReducer;
