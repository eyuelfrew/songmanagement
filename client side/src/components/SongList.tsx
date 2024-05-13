import styled from "@emotion/styled";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { initGetSongInfo } from "../data/fetch/action";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteSongInfo } from "../data/delete/action";
const Container = styled.div`
  padding: 0px 90px;
  height: 100%;
  width: 100%;
  margin-top: 2%;
  color: white;
`;
const SongCard = styled.div`
  height: 600px;
  padding: 0px 45px;
`;
const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 43px;
`;
const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  color: black;
  padding: 7px 20px 2px 40px;
  border-radius: 15px;
  margin: 5px;
  span {
    color: black;
    font-size: 25px;
    opacity: 1;
  }
`;
const SongInfo = styled.p`
  opacity: 0.5;
  font-size: 14px;
`;
const SongData = styled.span`
  font-size: 1.2rem !important;
`;
const OptionButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 4px;
`;
const Button = styled.button`
  margin: 1px;
  width: 27px;
  height: 27px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 100%;
  background-color: ${(props) =>
    props.val % 3 === 0 ? "green" : props.val % 3 === 1 ? "red" : "blue"};
`;
const AddButton = styled.div`
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;
const SongList = () => {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { songList } = useSelector((state) => state.SongListReducer);

  const handleNavigate = (id: string) => {
    navigate(`/song/${id}`);
  };
  const handleEditClick = (id: string) => {
    navigate(`/edit/${id}`);
  };
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteSongInfo(id));
      }
    });
  };
  const naigateTo = useNavigate();
  const handleAddButton = () => {
    naigateTo("newsong");
  };

  useEffect(() => {
    if (songList.length === 0) {
      console.log("asfas");
      naigateTo("/");
    }
  }, [songList]);
  useEffect(() => {
    dispatch(initGetSongInfo());
    setSongs(songs);
  }, []);
  return (
    <Container>
      <SongCard>
        <CardHeader>
          <h2>Song Info's</h2>
          <AddButton onClick={handleAddButton}>+ Add New</AddButton>
        </CardHeader>
        {songList &&
          songList.map(
            (song: {
              _id: string;
              title: string;
              artist: string;
              album: string;
              genre: string;
            }) => (
              <CardBody key={song._id}>
                <span>
                  <SongInfo>Title:</SongInfo>
                  <SongData>{song.title}</SongData>
                </span>{" "}
                <span>
                  <SongInfo>Artist:</SongInfo>
                  <SongData>{song.artist}</SongData>
                </span>{" "}
                <span>
                  <SongInfo>Album:</SongInfo>
                  <SongData>{song.album}</SongData>
                </span>{" "}
                <span>
                  <SongInfo>Genre:</SongInfo>
                  <SongData>{song.genre}</SongData>
                </span>
                <OptionButtons>
                  <OptionButtons>
                    <Button val={0} onClick={() => handleEditClick(song._id)}>
                      <MdModeEditOutline />
                    </Button>
                    <Button
                      onClick={() => {
                        handleDelete(song._id);
                      }}
                      val={1}
                    >
                      <MdDelete />
                    </Button>
                    <Button onClick={() => handleNavigate(song._id)} val={2}>
                      <FaEye />
                    </Button>
                  </OptionButtons>
                </OptionButtons>
              </CardBody>
            )
          )}
      </SongCard>
    </Container>
  );
};

export default SongList;
