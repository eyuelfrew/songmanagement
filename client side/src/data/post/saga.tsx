import { takeEvery, call, put } from "redux-saga/effects";
import { SAVE_SONG_VALUE } from "./actionTypes";
import axios, { AxiosResponse } from "axios";
import { initSaveSongSuccessfull, initSaveSongValueFaild } from "./actions";

// Create New Song Info Saga
export default function* AddSongInfoSaga() {
  yield takeEvery(SAVE_SONG_VALUE, saveNotesSaga);
}

function* saveNotesSaga(action: { songInfo: unknown }) {
  const headeParams = {
    "content-type": "application/json",
  };
  try {
    const response: AxiosResponse = yield call(
      axios.post,
      "https://song-api-v1-0-0.onrender.com/song",
      action.songInfo,
      { headers: headeParams }
    );
    if (response.status === 201) {
      yield put(initSaveSongSuccessfull(response.data.status));
    }
  } catch (error) {
    yield put(initSaveSongValueFaild(true));
  }
}
