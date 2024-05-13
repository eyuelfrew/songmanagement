import Song from "../model/SongModel.js";

//create song information
export const createSong = async (req, res) => {
  const data = req.body;
  const song = await Song.create(data);
  if (song) {
    return res
      .status(201)
      .json({ status: 1, message: "Song created successfully" });
  } else {
    return res.status(500).json({ status: 0, error: "Internal Server Error" });
  }
};

//update song information
export const updateSong = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const song = await Song.findByIdAndUpdate(id, data);
    if (song) return res.json({ status: 1, message: "Song Info Updated!" });
  } catch (error) {
    console.log(error);
  }
};

//get all songs information
export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    return res.json(songs);
  } catch (error) {
    console.log(error);
  }
};

//delete single song
export const deleteSong = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await Song.findByIdAndDelete(id);
    return res.json({ message: "Song Info Deleted!", status: "OK" });
  } catch (error) {
    console.log(error);
    return res.send(`Error: ${error}`);
  }
};

//totoal number of songs in every genere
export const numberOfSongsEveryGenre = async (req, res) => {};

//get song by id
export const getSingleSong = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await Song.findById(id);
    if (song) return res.json(song);
  } catch (error) {
    return res.json({ error: error });
  }
};

//number of songs in each genres
export const songsInGenres = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching genres" });
  }
};

// get song information statistics

export const overAllStatistics = async (req, res) => {
  try {
    const [
      genres,
      ArtistCount,
      AlbumCount,
      GenresSongCount,
      SongsInAlbum,
      totalSong,
    ] = await Promise.all([
      Song.aggregate([
        { $group: { _id: "$genre" } },
        { $group: { _id: null, count: { $sum: 1 } } },
      ]),
      Song.aggregate([
        { $group: { _id: "$artist" } },
        { $group: { _id: null, count: { $sum: 1 } } },
      ]),
      Song.aggregate([
        { $group: { _id: "$album" } },
        { $group: { _id: null, count: { $sum: 1 } } },
      ]),
      Song.aggregate([{ $group: { _id: "$genre", count: { $sum: 1 } } }]),
      Song.aggregate([{ $group: { _id: "$album", count: { $sum: 1 } } }]),
      Song.countDocuments(),
    ]);

    res.json({
      genres,
      ArtistCount,
      AlbumCount,
      GenresSongCount,
      SongsInAlbum,
      totalSong,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching artist stats" });
  }
};

//get artists number of songs and number of album
export const artistStats = async (req, res) => {
  try {
    const artistStat = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          songs: { $sum: 1 },
          albums: { $addToSet: "$album" },
        },
      },
      {
        $project: {
          artist: "$_id",
          songCount: "$songs",
          albumCount: { $size: "$albums" },
        },
      },
    ]);

    res.json(artistStat);
  } catch (error) {
    res.json({ error: error });
  }
};
