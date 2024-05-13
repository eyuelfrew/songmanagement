import express from "express";
import {
  createSong,
  updateSong,
  getAllSongs,
  deleteSong,
  numberOfSongsEveryGenre,
  getSingleSong,
  artistStats,
  overAllStatistics,
} from "../controller/Controller.js";
const router = express.Router();

//create song api
router.route("/").post(createSong);

//update song api
router.route("/:id").put(updateSong);

//get all songs
router.route("/").get(getAllSongs);

//delete single song
router.route("/test/:id").delete(deleteSong);

//over all song statstics

//all songs in every genere
router.route("/gen").get(numberOfSongsEveryGenre);

//get song info by id
router.route("/view/:id").get(getSingleSong);

//get artist statistics
router.route("/artist_stat").get(artistStats);
// router.route("/genrs_stat").get(songsInGenres);
// router.route("/artist_stat").get(artistStats);
router.route("/stats").get(overAllStatistics);
export default router;
