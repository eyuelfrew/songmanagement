import { call, put, takeEvery } from "redux-saga/effects";
import { INIT_VIEW_SONG } from "./actionTypes";
import axios, { AxiosResponse } from "axios";
import { SongViewSuccess } from "./action";

export default function* viewSongDetail() {
  yield takeEvery(INIT_VIEW_SONG, getDetail);
}
function* getDetail(action: { type: string; _id: string }) {
  const songID = action._id;
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      `https://song-api-v1-0-0.onrender.com/song/view/${songID}`
    );
    if (response.status === 200) {
      yield put(SongViewSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}
