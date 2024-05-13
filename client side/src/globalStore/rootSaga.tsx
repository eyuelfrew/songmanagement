import { all, fork } from "redux-saga/effects";
import AddSongInfoSaga from "../data/post/saga";
import GetSongListSaga from "../data/fetch/saga";
import viewSongDetail from "../data/details/saga";
import editeSongInfo from "../data/edit/saga";
import deleteSongSaga from "../data/delete/saga";
import GetStatisticsSaga from "../data/stats/saga";
import getArtistStatSaga from "../data/fetchArtists/saga";
export default function* rootSaga() {
  yield all([
    fork(AddSongInfoSaga),
    fork(GetSongListSaga),
    fork(viewSongDetail),
    fork(editeSongInfo),
    fork(deleteSongSaga),
    fork(GetStatisticsSaga),
    fork(getArtistStatSaga),
  ]);
}
