import { call, put, takeEvery } from "redux-saga/effects";
import { INIT_GET_SONG } from "./actionTypes";
import axios, { AxiosResponse } from "axios";
import { GetSongSuccess } from "./action";
export default function* GetSongListSaga() {
  yield takeEvery(INIT_GET_SONG, getAllSongs);
}

function* getAllSongs() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      "https://song-api-v1-0-0.onrender.com/song"
    );
    const createData = [];
    if (response && response.status === 200) {
      const { data } = response;

      for (const key in data) {
        createData.push(data[key]);
      }
    }
    yield put(GetSongSuccess(createData));
  } catch (error) {
    console.log(error);
  }
}
