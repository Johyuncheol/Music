import React from 'react';
import { styled } from 'styled-components';
import { Link } from "react-router-dom";



const Side = () => {
    return (
        <Section>
            <Box>
                <StyledLink to='/posts/all'>전체</StyledLink>
                <StyledLink to='/posts/ballad'>발라드</StyledLink>
                <StyledLink to='/posts/pop'>팝</StyledLink>
                <StyledLink to='/posts/rock'>락</StyledLink>
                <StyledLink to='/posts/edm'>EDM</StyledLink>
                <StyledLink to='/posts/classic'>재즈/클래식</StyledLink>
                <StyledLink to='/posts/j-pop'>J-POP</StyledLink>
                <StyledLink to='/add'>글쓰기</StyledLink>
            </Box>
        </Section>

    );
};

export default Side;

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

export const Section = styled.div`
top:10%;
position:sticky;

display:flex;
flex-direction:column;
align-items:center;

max-width: 100px;

`

export const StyledLink = styled(Link)`
    text-decoration:none;
    color:aliceblue;
 `
