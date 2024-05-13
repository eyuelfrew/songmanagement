import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatistics } from "../data/stats/action";
import styled from "@emotion/styled";
const Container = styled.div`
  // width: 95%;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px;
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 190px;
  width: 220px;
  background: white;
  border-radius: 5px;
  text-align: center;
  span {
    font-size: 37px;
  }
`;
const Title = styled.div`
  margin-bottom: 25px;
`;
const GenreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
`;
const Genreview = styled.div`
  // display: flex;
  border-radius: 5px;
  width: 40%;
  padding: 12px;
  background: white;
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    text-align: start;
  }
`;
const Statistis = () => {
  const dispatch = useDispatch();

  const { statistics } = useSelector((state) => state.SongStatisticsReducer);
  useEffect(() => {
    dispatch(getStatistics());
  }, []);
  return (
    <Container>
      <Row>
        <Card>
          <div>
            <Title>
              <h2>Artists</h2>
            </Title>
            <span>{statistics && statistics.ArtistCount[0].count}</span>
          </div>
        </Card>
        <Card>
          <div>
            <Title>
              <h2>Albums</h2>
            </Title>
            <span>{statistics && statistics.AlbumCount[0].count}</span>
          </div>
        </Card>
        <Card>
          <div>
            <Title>
              <h2>Songs</h2>
            </Title>
            <span>{statistics && statistics.totalSong}</span>
          </div>
        </Card>
        <Card>
          <div>
            <Title>
              <h2>Genres</h2>
            </Title>
            <span>{statistics && statistics.genres[0].count}</span>
          </div>
        </Card>
      </Row>
      <GenreContainer>
        <Genreview>
          <h1>Songs In Genres</h1>
          {statistics &&
            statistics.GenresSongCount.map(
              (song: { _id: string; count: number }, index: number) => (
                <div key={index}>
                  <h3>
                    {song._id}: {"     "}
                    <span> {song.count}</span>
                  </h3>
                </div>
              )
            )}
        </Genreview>
      </GenreContainer>
      <GenreContainer>
        <Genreview>
          <h1>Songs In Albums</h1>
          {statistics &&
            statistics.SongsInAlbum.map(
              (song: { _id: string; count: number }, index: number) => (
                <div key={index}>
                  <h3>
                    {song._id}: {"     "}
                    <span> {song.count}</span>
                  </h3>
                </div>
              )
            )}
        </Genreview>
      </GenreContainer>
    </Container>
  );
};

export default Statistis;
