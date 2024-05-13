import {
  EDIT_SONG_SUCCESS,
  INIT_EDIT_SONG_INFO,
  SONG_SAVED_SUCCESS,
} from "./actionType";

const initialState = {
  editResponse: {},
  isEditSuccess: false,
  isEditeFaild: false,
};

const UpdateSOngInformation = (
  state = initialState,
  action: { type: string; editResponse: unknown }
) => {
  switch (action.type) {
    case INIT_EDIT_SONG_INFO:
      return { ...state };
    case EDIT_SONG_SUCCESS:
      return {
        ...state,
        editResponse: action.editResponse,
        isEditSuccess: true,
      };
    case SONG_SAVED_SUCCESS:
      return { ...state, editResponse: {} };
    default:
      return state;
  }
};
export default UpdateSOngInformation;
