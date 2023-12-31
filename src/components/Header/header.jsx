import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useCookies } from 'react-cookie';

import { useNavigate } from 'react-router-dom';
import { inMypage } from '../../api/posts';

const Header = () => {

  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(['User']);

  const [value, setValue] = useState('');

  const logOut = () => {
    console.log(cookie.User)
    removeCookie('User');
  }

    const handlePressEnter = e => {
        if (e.key === 'Enter') {
            navigate(`/search/${value}`)
        }
      };

    const InMyPage =()=>{
        if(cookie.User!==undefined){
    
            navigate('/mypage');
        }
        else{
            alert('로그인해주세요');
        } 
    }

    return (
        <HeaderDiv>
            <Title>
                <StyledLink to='/'>
                    Muzik is my life...
                </StyledLink>
            </Title>

            <InputDiv>
                <span>search :</span>
                <Input onChange={(e)=>{setValue(e.target.value)}} onKeyDown={handlePressEnter}/>
            </InputDiv>

            <HeaderOption>
                {
                    cookie.User ===undefined
                        ?
                        <StyledLink to='/login'>로그인/회원가입</StyledLink>
                        :
                        <StyledLink onClick={logOut}>로그아웃</StyledLink>


                }
                <StyledDiv onClick={InMyPage}>마이페이지</StyledDiv>
            </HeaderOption>

        </HeaderDiv>
    );

};



export default Header;



export const HeaderDiv = styled.div`
display:flex;
align-items:center;
gap : 10%;
background-color:#26282d;
padding-left:4%;
padding-top:1%;

`


export const Title = styled.div`
    color:lightgray;
    font-size: 50px;
    font-family: 'Black Han Sans', sans-serif;

`
export const Div = styled.div`
background-color:#26282d;
padding:3%;
height:100%;

`
export const Input = styled.input`
background-color:#31343a;
color:aliceblue;
 border:none;
 outline:none;
 width:60%;
 
`

export const InputDiv = styled.div`

display:flex;
align-items:center;
border-radius:50px;
border: 4px solid darkred;
height:30px;
background-color:#31343a;
 color:#555962;
 gap:1px;
 padding : 1%;
 width:50%;
 max-width:200px;

`

export const HeaderOption = styled.div`
display:flex;
flex-grow:0.8;
justify-content:right;
align-items:center;
gap :10px;
color:#555962;

width:30%;

 `

export const StyledLink = styled(Link)`
    text-decoration:none;
    color:aliceblue;
 `

export const StyledDiv = styled.div`
text-decoration:none;
color:aliceblue;
`
