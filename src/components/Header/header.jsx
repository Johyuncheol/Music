import React from 'react';
import { styled } from 'styled-components';


const Header = () => {
    return (
            <HeaderDiv>
                <Title>home</Title>
                <InputDiv> search : <Input /></InputDiv>
            </HeaderDiv>
    );
};

export default Header;



export const HeaderDiv = styled.div`
display:flex;
align-items:center;
gap : 10%;
background-color:#26282d;
padding-left:10%;
padding-top:1%;

`


export const Title = styled.div`
    color:lightgray;
    font-size: 40px;
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
border-radius:10px;
height:30px;
background-color:#31343a;
 color:#555962;
 gap:1px;
 padding : 1%;
 width:50%;
 max-width:200px;

 
`