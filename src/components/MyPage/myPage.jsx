import React from 'react';
import { styled } from 'styled-components';


const MyPage = () => {
    return (
        <Wrap>
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
    display:flex;
    color:aliceblue;
    flex-direction:column;
    padding : 5%;
    width:100%;
    border:1px solid black;
    gap :10px;
    
`

export const Box = styled.div`
    display:flex;
    justify-content:center;

    color:aliceblue;
    flex-direction:column;
    
    width:100%;
    height:10vh;
    min-height:50px;
    border-bottom: 2px solid darkolivegreen;
    gap :10px;
    
`