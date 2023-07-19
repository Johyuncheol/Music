
import React,{useEffect} from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const MyPage = () => {

    const navigate = useNavigate();
    const [cookie] = useCookies(['User']);

    const checkAuth = ()=>{
        if(cookie.User===undefined){
            alert("로그인 해주세요")
            navigate("/")
        }
    }
    useEffect(()=>{
        checkAuth();
    },[cookie])


    return (
        <Wrap>
            <div>
                <h3>이메일 주소(계정 정보)</h3>{/* 쿠키데이터로 처리하면? */}
            </div>
            <Box>내가 작성한 글 </Box>
            <Box>내가 작성한 글 </Box>
            <Box>내가 작성한 글 </Box>
            <Box>내가 작성한 글 </Box>
            <Box>내가 작성한 글 </Box>
            <Box>내가 작성한 글 </Box>
        </Wrap>
    );

};

export default MyPage;

export const Wrap = styled.div`
  display: flex;
  color: aliceblue;
  flex-direction: column;
  padding: 5%;
  width: 100%;
  border: 1px solid black;
  gap: 10px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;

  color: aliceblue;
  flex-direction: column;

  width: 100%;
  height: 10vh;
  min-height: 50px;
  border-bottom: 2px solid darkolivegreen;
  gap: 10px;
`;
