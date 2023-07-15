import React from 'react';
import { styled } from 'styled-components';
import { Link, Route, Routes } from "react-router-dom";
import MainContent from '../components/MainContent/mainContent'
import Search from '../components/Search/search';
import MyPage from '../components/MyPage/myPage';
import Add from '../components/Add/add';
import Login from '../components/Login/login';
import Register from '../components/Register/register';

const Main = () => {
    return (
        <Back>
            <Side>
                <Box>
                    <button>전체</button>
                    <button>카테고리</button>
                    <button>카테고리</button>
                    <Link to='/add'>글쓰기</Link>
                </Box>
            </Side>

            <Contents>
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
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


