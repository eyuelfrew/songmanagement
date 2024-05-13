import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import SongList from "../components/SongList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initGetSongInfo } from "../data/fetch/action";
import { Rootstate } from "../globalStore/store";
const SongContainer = styled.div``;
const EmptySong = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Wrraper = styled.div`
  display: block;
  text-align: center;

  h1 {
    color: white;
  }
  button {
    margin-top: 12px;
    height: 40px;
    width: 160px;
    color: white;
    background: #1e1e4e;
    border: 1px solid transparent;
    outline-border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 250ms;
  }
  button:hover {
    box-shadow: rgb(28, 145, 255) 0 4px 12px;
  }
`;

const Songs = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const allSongs = useSelector(
    (state: Rootstate) => state.SongListReducer.allSongs
  ) as [];
  console.log(allSongs);
  const handleNavigate = () => {
    navigateTo("/newsong");
  };
  useEffect(() => {
    dispatch(initGetSongInfo());
  }, []);
  return (
    <SongContainer>
      {allSongs && allSongs.length == 0 ? (
        <>
          <EmptySong>
            <Wrraper>
              <h1> Create Song info</h1>
              <button onClick={handleNavigate}>+ New</button>
            </Wrraper>
          </EmptySong>
        </>
      ) : (
        <>
          <SongList />
        </>
      )}
    </SongContainer>
  );
};

export default Songs;
