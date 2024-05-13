import { call, put, takeEvery } from "redux-saga/effects";
import { INIT_EDIT_SONG_INFO } from "./actionType";
import axios, { AxiosResponse } from "axios";
import { editSongSuccess } from "./action";

export default function* editeSongInfo() {
  yield takeEvery(INIT_EDIT_SONG_INFO, updateSongInfo);
}
function* updateSongInfo(action: {
  type: string;
  songInfo: unknown;
  songId: string;
}) {
  const headeParams = {
    "content-type": "application/json",
  };
  try {
    const response: AxiosResponse = yield call(
      axios.put,
      `https://song-api-v1-0-0.onrender.com/song/${action.songId}`,
      action.songInfo,
      { headers: headeParams }
    );
    if (response.status === 200) {
      yield put(editSongSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}
