import { combineReducers } from "@reduxjs/toolkit";
import AddSongReducer from "../data/post/reducers";
import SongListReducer from "../data/fetch/reducers";
import ViewSongReducer from "../data/details/reducer";
import UpdateSOngInformation from "../data/edit/reducer";
import SongStatisticsReducer from "../data/stats/reducer";
import ArtistStaticsReducer from "../data/fetchArtists/reducer";
const rootReducer = combineReducers({
  AddSongReducer,
  SongListReducer,
  ViewSongReducer,
  UpdateSOngInformation,
  SongStatisticsReducer,
  ArtistStaticsReducer,
});
export default rootReducer;
