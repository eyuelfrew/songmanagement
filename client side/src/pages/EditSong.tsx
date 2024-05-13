import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ViewSongInfo } from "../data/details/action";
import { initEditSong } from "../data/edit/action";
import styled from "@emotion/styled";
import { Rootstate } from "../globalStore/store";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4%;
`;
const Card = styled.div`
  height: 500px;
  width: 500px;
  background: blue;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  h1 {
    text-align: center;
    margin-top: 14px;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 14px;
    input {
      padding: 17px;
      margin: 10px;
      border-radius: 5px;
      border: none;
      font-size: 18px;
    }
    button {
      height: 50px;
      width: 60%;
      border-radius: 5px;
      background: green;
      color: white;
      font-size: 20px;
      border: none;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 5%;
`;
const EditSong = () => {
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  const { editResponse } = useSelector(
    (state: Rootstate) => state.UpdateSOngInformation
  ) as {
    editResponse: {
      status: number;
      message: string;
    };
  };
  console.log(editResponse);
  const id = useParams().id;
  const { songInfo } = useSelector(
    (state: Rootstate) => state.ViewSongReducer
  ) as {
    songInfo: {
      title: string;
      artist: string;
      album: string;
      genre: string;
    };
  };
  console.log(songInfo.title);
  const [title, setTitle] = useState(songInfo ? songInfo.title : "");
  const [artist, setArtist] = useState(songInfo ? songInfo.artist : "");
  const [album, setAlbum] = useState(songInfo ? songInfo.album : "");
  const [genre, setGenre] = useState(songInfo ? songInfo.genre : "");
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(initEditSong(id ?? "", { title, artist, album, genre }));
  };

  useEffect(() => {
    if (editResponse.status == 1) {
      navigateTo("/");
    }
  }, [editResponse, navigateTo]);
  useEffect(() => {
    dispatch(ViewSongInfo(id ?? ""));
  }, []);
  useEffect(() => {
    if (songInfo) {
      setTitle(songInfo.title);
      setArtist(songInfo.artist);
      setAlbum(songInfo.album);
      setGenre(songInfo.genre);
    }
  }, [songInfo]);
  return (
    <Container>
      <Card>
        <h1>Edit Song Info!</h1>
        <form>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="artist"
            name="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <input
            type="text"
            id="album"
            name="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
          <input
            type="text"
            id="genre"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />

          <ButtonContainer>
            <button onClick={handleSubmit}>save</button>
          </ButtonContainer>
        </form>
      </Card>
    </Container>
  );
};

export default EditSong;
