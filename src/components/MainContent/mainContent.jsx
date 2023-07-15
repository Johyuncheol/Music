import React, { useEffect,useState,useRef } from 'react';
import { styled } from 'styled-components';
import SlideComponent from '../Slider/slider';
import axios from 'axios';

const MainContent = () => {
    const [params, setParams] = useState({
        key: 'AIzaSyDpo_zRizVg4Yvitzy31ODTzEuGu4lVjGk',
        part: 'snippet',
        id: 'VwdkWQQzos4', //정규식으로 받아온 URL의 v=뒷부분을 가져오자
        maxResults: 20,
      });

    const [pic,setPic]=useState('')

useEffect(()=>{
         axios.get('https://www.googleapis.com/youtube/v3/videos', { params })
        .then((res)=>{
          console.log(res.data.items['0'].snippet.thumbnails.standard.url);
          setPic(res.data.items['0'].snippet.thumbnails.maxres
          .url)
        })
},[])



    return (
        <Div>
            <Contents>
                <Box>
                <div>MOST</div>
                    <Img src={pic}></Img>
                    <div>제목이 들어갑니다</div>
                
                </Box>
                <hr></hr>
                <Box>
                    <div>TOP 5</div>
                    <Item>1. top</Item>
                    <Item>2. top</Item>
                    <Item>3. top</Item>
                    <Item>4. top</Item>
                    <Item>5. top</Item>
                </Box>
                
            </Contents>
            <SlideComponent />

            
  
        </Div>
    );
};

export default MainContent;

export const Div = styled.div`
    color:aliceblue;
    padding:3px;
`

export const Contents = styled.div`
    display: grid;
    grid-template-columns: 48% 1% 48%;
    grid-gap: 1vw;
    background-color:#26282d;
    padding:5%;

`

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content:center;
   
`

export const Img = styled.img`
    width:95%;
 
`

export const Item = styled.div`
 background-color:#31343a;
 padding:10px;
    
`