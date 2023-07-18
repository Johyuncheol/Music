import React from 'react';
import { styled } from 'styled-components';
import { Link } from "react-router-dom";

const Side = () => {
    return (
        <Section>
            <Box>
                <StyledLink to='/posts/ALL'>전체</StyledLink>
                <StyledLink to='/posts/KAYO'>가요</StyledLink>
                <StyledLink to='/posts/POP'>팝</StyledLink>
                <StyledLink to='/posts/ROCK'>락</StyledLink>
                <StyledLink to='/posts/EDM'>EDM</StyledLink>
                <StyledLink to='/posts/JAZZ-CLASSIC'>재즈/클래식</StyledLink>
                <StyledLink to='/posts/J-POP'>J-POP</StyledLink>
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

    border-radius:20px;
    &:hover{
        text-decoration: underline;

}
 `
