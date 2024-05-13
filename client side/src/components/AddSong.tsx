import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initSaveSongSuccessfull,
  initSaveSongValue,
} from "../data/post/actions";
import { useNavigate } from "react-router-dom";
const SongContainer = styled.div`
  margin-top: 7%;
  display: flex;
  justify-content: center;
  height: 100vh;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background: #1e1e4e;
  padding: 20px 20px;
  input {
    padding: 15px;
    border: none;
    border-radius: 13px;
    margin: 10px 0px;
  }
  select {
    padding: 15px;
    border: none;
    border-radius: 13px;
    margin: 10px 0px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
`;
const SaveButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: #17eb00;
  cursor: pointer;
  outline-border: none;
  border-radius: 5px;
`;
const ResetButton = styled.button`
  padding: 10px 20px;
  border: none;
  outline-border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #2b2e2b;
  color: white;
`;
const AddSong = () => {
  const navigatTo = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.AddSongReducer);
  interface SongInfo {
    title: string;
    album: string;
    artist: string;
    genre: string;
  }
  const [songInfo, setSongInfo] = useState<SongInfo>({
    title: "",
    album: "",
    artist: "",
    genre: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSongInfo({ ...songInfo, [e.target.name]: e.target.value });
  };
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSongInfo({ ...songInfo, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    dispatch(initSaveSongValue(songInfo));
  };
  useEffect(() => {
    if (status) {
      dispatch(initSaveSongSuccessfull(0));
      navigatTo("/");
    }
  }, [dispatch, status]);
  return (
    <SongContainer>
      <Card>
        <input
          type="text"
          placeholder="Song Title"
          name="title"
          value={songInfo.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Album Name"
          name="album"
          value={songInfo.album}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Artist"
          name="artist"
          value={songInfo.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          value={songInfo.genre}
          onChange={handleChange}
        />

        <ButtonContainer>
          <ResetButton>Reset</ResetButton>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ButtonContainer>
      </Card>
    </SongContainer>
  );
};

export default AddSong;
