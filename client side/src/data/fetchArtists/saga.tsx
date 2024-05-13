import { call, put, takeEvery } from "redux-saga/effects";
import { INIT_GET_ARTIST } from "./actionType";
import axios, { AxiosResponse } from "axios";
import { getArtistSuccess } from "./action";

export default function* getArtistStatSaga() {
  yield takeEvery(INIT_GET_ARTIST, getArtistStatistics);
}
function* getArtistStatistics() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      "https://song-api-v1-0-0.onrender.com/song/artist_stat"
    );
    if (response.status === 200) {
      yield put(getArtistSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}
