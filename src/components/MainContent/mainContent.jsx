import React, { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
import SlideComponent from "../Slider/slider";
import axios from "axios";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [top5Data, setTop5Data] = useState([]);
  const [params, setParams] = useState({
    key: "AIzaSyDpo_zRizVg4Yvitzy31ODTzEuGu4lVjGk",
    part: "snippet",
    id: '', // 동적으로 추출된 ID를 할당하기 위해 초기값은 빈 문자열로 설정
    maxResults: 20,
  });
  const [pic, setPic] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTop5Data();
  },[]);

  useEffect(() => {
    if (top5Data.length > 0) {
      extractVideoIdFromUrl();
    }
  }, [top5Data]);

  const fetchTop5Data = async () => {
    try {
      const response = await axios.get("/api/posts/top5");
      console.log(response.data);
      setTop5Data(response.data);
    } catch (error) {
      console.error("상위 5개 데이터 불러오는 중 오류 발생", error);
    }
  };

  const extractVideoIdFromUrl = () => {
    if (top5Data.length > 0) {
      const youtubeLink = top5Data[0].yurl;

      const videoId = youtubeLink.split("v=")[1];
      setParams((prevParams) => ({
        ...prevParams,
        id: videoId,
      }));
      setTitle(top5Data[0].title); 
    }
  };

  useEffect(() => {
    if (params.id) {
      // 동영상 ID가 할당되면 API 요청 수행
      axios
        .get("https://www.googleapis.com/youtube/v3/videos", { params })
        .then((res) => {
          console.log(res);
          console.log(res.data.items[0].snippet.thumbnails.standard.url);
          setPic(res.data.items[0].snippet.thumbnails.maxres.url);
        })
        .catch((error) => {
          console.error("유튜브 API 요청 실패", error);
        });
    }
  }, [params]);

  return (
    <Div>
      <Contents>
        <Box>
          <div>MOST</div>
          <Link to={`/detail`}>
            <Img src={pic}></Img>
          </Link>
          <Title>{title}</Title> {/* 수정된 부분 */}
        </Box>

        <hr></hr>

        <Box>
          <div>좋아요 TOP 5</div>
          
          {top5Data.map((item, index) => (
           <Item key={item.postId}>
           {`${index + 1}. `}<CustomLink to= {``}><Title>{item.title}</Title></CustomLink>
         </Item>
          ))}
         
        </Box>
      </Contents>
      <SlideComponent />
    </Div>
  );
};

export default MainContent;

export const Div = styled.div`
  color: aliceblue;
  padding: 3px;
`;

export const Contents = styled.div`
  display: grid;
  grid-template-columns: 48% 1% 48%;
  grid-gap: 1vw;
  background-color: #26282d;
  padding: 5%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Img = styled.img`
  width: 95%;
`;

export const Item = styled.div`
  background-color: #31343a;
  padding: 10px;
  overflow: hidden;
  display: flex; /* 추가 */
  align-items: center; /* 추가 */
  gap: 10px; /* 추가 (원하는 간격으로 조절) */
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 500px; /* 원하는 글자수에 맞게 조절 */
  min-width: 250px;
`;
export const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 500px; /* 원하는 글자수에 맞게 조절 */
  min-width: 250px;
`;
export const CustomLink = styled(Link)`
  color: #00a8ff; /* 링크의 색상을 원하는 색상으로 변경 */
  text-decoration: none; /* 밑줄 제거 */
  cursor: pointer; /* 포인터로 변경하여 마우스 호버 효과 표시 */
`;

