import { call, put, takeEvery } from "redux-saga/effects";
import { INIT_DELETE_SONG_INFO } from "./actionType";
import axios, { AxiosResponse } from "axios";
import { initGetSongInfo } from "../fetch/action";

export default function* deleteSongSaga() {
  yield takeEvery(INIT_DELETE_SONG_INFO, deleteSongInfo);
}
function* deleteSongInfo(action: { type: string; id: string }) {
  try {
    const response: AxiosResponse = yield call(
      axios.delete,
      `https://song-api-v1-0-0.onrender.com/song/test/${action.id}`
    );
    if (response.status === 200) {
      yield put(initGetSongInfo());
    }
  } catch (error) {
    console.log(error);
  }
}
