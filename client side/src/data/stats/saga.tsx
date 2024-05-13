import { put, call, takeEvery } from "redux-saga/effects";
import { INIT_GET_STAT } from "./actionTypes";
import axios, { AxiosResponse } from "axios";
import { SongStatistics } from "./action";

export default function* GetStatisticsSaga() {
  yield takeEvery(INIT_GET_STAT, getStat);
}

function* getStat() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      "https://song-api-v1-0-0.onrender.com/song/stats"
    );
    if (response.status == 200) {
      yield put(SongStatistics(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}
