import React from 'react';
import { styled } from 'styled-components';
import { Link, Route, Routes } from "react-router-dom";
import MainContent from '../components/MainContent/mainContent'
import Search from '../components/Search/search';
import MyPage from '../components/MyPage/myPage';
import Add from '../components/Add/add';
import NonExistent from './NonExistent';
import Detail from '../components/Detail/detail';

const Main = () => {
    return (
        <Back>
            <Side>
                <Box>
                    <StyledLink to='/posts/all'>전체</StyledLink>
                    <StyledLink to='/posts/ballad'>발라드</StyledLink>
                    <StyledLink to='/posts/hiphop'>힙합</StyledLink>
                    <StyledLink to='/add'>글쓰기</StyledLink>
                </Box>
            </Side>

            <Contents>
                <Routes>
                    <Route path="/" element={<MainContent />} />

                    {/* 컴포넌트 이름 수정해놓자  여기서 검색 및 카테고리별 출력*/}
                    <Route path="/search/:id" element={<Search />} />
                    <Route path="/posts/:id" element={<Search />} />
  
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/all" element={<Add />} />

                </Routes>
            </Contents>
        </Back>
    );
};

export default Main;

export const Back = styled.div`
    display: grid;
    grid-template-columns: 10vw 80vw;
    grid-gap: 1vw;
    background-color:#26282d;
    padding:3%;
 
`
export const Header = styled.div`
display:flex;
gap : 10%;

`

export const Box = styled.div`
display:flex;
flex-direction:column;

top:10%;
position:sticky;

padding:10%;
gap : 20px;

border: 1px solid lightgrey;
max-width:150px;
border-radius:10px;

`

export const Title = styled.div`
    color:lightgray;
    font-size: 40px;
`
export const Div = styled.div`



`

export const Side = styled.div`
top:10%;
position:sticky;

display:flex;
flex-direction:column;
align-items:center;

max-width: 100px;

`

export const Contents = styled.div`
    display:flex;
 border: 1px solid lightgrey;
 border-radius:10px;
 min-height:600px;
 padding : 4px;
`


export const StyledLink = styled(Link)`
    text-decoration:none;
    color:aliceblue;
 `
