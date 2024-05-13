import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtistsStat } from "../data/fetchArtists/action";
import styled from "@emotion/styled";
import { Rootstate } from "../globalStore/store";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrraper = styled.div`
  width: 70%;
`;
const Card = styled.div`
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 25px;
  width: 100%;
  background: white;
  height: for-content;
  border-radius: 10px;
  div {
    text-align: center;
    h3 {
      font-weight: lighter;
      span {
        color: black;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
`;
const Artists = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state: Rootstate) => state.ArtistStaticsReducer
  );
  useEffect(() => {
    dispatch(getArtistsStat());
  }, []);
  return (
    <Container>
      <Wrraper>
        {data && data.length > 0 ? (
          data.map(
            (
              stat: { artist: string; albumCount: number; songCount: number },
              index: React.Key
            ) => (
              <Card key={index}>
                <div>
                  <h3>
                    Artist:{" "}
                    <span>
                      {" "}
                      <>
                        <br />
                      </>{" "}
                      {stat.artist}
                    </span>
                  </h3>
                </div>
                <div>
                  <h3>
                    Total Album:
                    <>
                      <br />
                    </>{" "}
                    <span>{stat.albumCount}</span>
                  </h3>
                </div>
                <div>
                  <h3>
                    Total Song:{" "}
                    <>
                      <br />
                    </>{" "}
                    <span> {stat.songCount}</span>
                  </h3>
                </div>
              </Card>
            )
          )
        ) : (
          <>
            <Card>
              <div>
                <h3>
                  Artist:{" "}
                  <span>
                    {" "}
                    <>
                      <br />
                    </>{" "}
                    0
                  </span>
                </h3>
              </div>
              <div>
                <h3>
                  Total Album:
                  <>
                    <br />
                  </>{" "}
                  <span>0</span>
                </h3>
              </div>
              <div>
                <h3>
                  Total Song:{" "}
                  <>
                    <br />
                  </>{" "}
                  <span> 0</span>
                </h3>
              </div>
            </Card>
          </>
        )}
      </Wrraper>
    </Container>
  );
};

export default Artists;
