import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ViewSongInfo } from "../data/details/action";
import { Rootstate } from "../globalStore/store";
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  // width: 100%;
`;
const Card = styled.div`
  width: 500px;
  height: fit-content;
  background: white;
  border-radius: 20px;
  border: 4px solid blue;
  div {
    margin: 24px;
    padding: 12px;
  }
  h2 {
    font-size: 24px;
  }
  h2 span {
    font-size: 20px;
  }
`;
const Header = styled.h1`
  text-align: center;
  font-size: 24px;
`;

const ViewPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(ViewSongInfo(id ?? ""));
  }, []);
  return (
    <Container>
      <Card>
        <Header>Song Detail</Header>
        <div>
          <h2>
            Title: <span>{songInfo.title}</span>
          </h2>
        </div>
        <div>
          <h2>
            Artist: <span>{songInfo.artist}</span>
          </h2>
        </div>
        <div>
          <h2>
            Album: <span>{songInfo.album}</span>
          </h2>
        </div>
        <div>
          <h2>
            Genre: <span>{songInfo.genre}</span>
          </h2>
        </div>
      </Card>
    </Container>
  );
};

export default ViewPage;
