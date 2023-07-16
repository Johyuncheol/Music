import React from 'react';
import { styled } from 'styled-components';
import { Link, Route, Routes } from "react-router-dom";
import MainContent from '../components/MainContent/mainContent'
import Category from '../components/Categoty/category';
import MyPage from '../components/MyPage/myPage';
import Add from '../components/Add/add';
import Detail from '../components/Detail/detail';
import Side from '../components/Side/side';
import Login from '../components/Login/login';
import Register from '../components/Register/register';
import NonExistent from './NonExistent';

const Main = () => {
    return (
        <Back>
            <Side />
            <ContentSection>
                <Routes>
                    <Route path="/" element={<MainContent />} />

                    {/*  검색 및 카테고리별 출력은 형태가 같다 ..*/}
                    <Route path="/search/:id" element={<Category />} />
                    <Route path="/posts/:id" element={<Category />} />
  
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/mypage" element={<MyPage />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/add" element={<Add />} />
                    <Route path="/all" element={<Add />} />

                    <Route path="*" element={<NonExistent />} />

                </Routes>
            </ContentSection>
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


export const ContentSection = styled.div`
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
