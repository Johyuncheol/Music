import React from 'react';
import { styled } from 'styled-components';

const Search = () => {
    return (
        <Wrap>
            <Box>검색된 정보들 </Box>
            <Box>검색된 정보들 </Box>
            <Box>검색된 정보들 </Box>
            <Box>검색된 정보들 </Box>
        </Wrap>
    );
};

export default Search;

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