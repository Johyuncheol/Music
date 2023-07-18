import React, { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
import SlideComponent from "../Slider/slider";
import axios from "axios";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [top5Data, setTop5Data] = useState([]);

  // 유튭 api url에 담긴 정보
  const [params, setParams] = useState({
    key: "AIzaSyDpo_zRizVg4Yvitzy31ODTzEuGu4lVjGk",// 유튭 api에서 발급받은 거랑 나중에 삭제<div className=""></div>
    part: "snippet",
    id: "VwdkWQQzos4", //정규식으로 받아온 URL의 v=뒷부분을 가져오자
    maxResults: 20,
  });

  const [pic, setPic] = useState("");

  useEffect(() => {
    fetchTop5Data();
    axios
      .get("https://www.googleapis.com/youtube/v3/videos", { params })
      .then((res) => {
        console.log(res)
        console.log(res.data.items["0"].snippet.thumbnails.standard.url);
        setPic(res.data.items["0"].snippet.thumbnails.maxres.url);
      });
  }, []);

  const fetchTop5Data = async () => {
    try {
      const response = await axios.get("/api/posts/top5");
      // const sortedData = response.data.sort((a, b) => b.likes - a.likes);
      // const top5Titles = sortedData.slice(0, 5).map(item => item.title);
      // setTop5Data(top5Titles);
      // 5개를 뽑아서 순서대로 줌(서버에서)-> sort 써서 조작할 필요 없음 수정해
      console.log(response.data);
      setTop5Data(response.data);
    } catch (error) {
      console.error("상위 5개 데이터 불러오는 중 오류 발생", error);
    }
    // fetchTop5Data();
  };

  return (
    <Div>
      <Contents>
        <Box>
          <div>MOST</div>
          <Link to={`/detail`}>
            <Img src={pic}></Img>
          </Link>
          <div>제목이 들어갑니다</div>
        </Box>

        <hr></hr>

        <Box>
          <div>좋아요 TOP 5</div>
          {top5Data.map((item, index) => (
            <Item key={item.postId}>{`${index + 1}. ${item.title}`}</Item>
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
`;
