import React from "react";
import { styled } from 'styled-components';
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { getPosts } from "../../api/posts";
import { useNavigate } from "react-router-dom";

const SlideComponent = () => {
    const navigate = useNavigate();
    const { isLoading, isError, data } = useQuery(`as`, () => getPosts('posts'));


    const getPicsOnURL = async() => {

        if (data !== undefined) {
            console.log(data);
            const Recent50 = data.slice(0, 49);
            Recent50.map((item) => {
                console.log(item)
                item['yID'] = item.yurl.split("v=")[1]

            })
            console.log(Recent50)
            GetThumbnail(Recent50);
        }

    }
    const [pic, setPic] = useState([]);

    const GetThumbnail = (Recent50) => {
        console.log(Recent50)
        Recent50.map(async (item) => {

            let params = {
                key: 'AIzaSyDpo_zRizVg4Yvitzy31ODTzEuGu4lVjGk',
                part: 'snippet',
                id: item.yID, //정규식으로 받아온 URL의 v=뒷부분을 가져오자
                maxResults: 20,
            };

            await axios.get('https://www.googleapis.com/youtube/v3/videos', { params })
                .then((res) => {
                    console.log(res)
                    if (res.data.items['0'] !== undefined) {
                        item['Thumbnails'] = res.data.items['0'].snippet.thumbnails.standard.url
                    }
                })


        })

        setPic(Recent50);

    }
    console.log(pic)


    useEffect(() => {
        getPicsOnURL();
    }, [data])


    const slideRef = useRef(null);

    const [currentImgOrder, setcCurrentImgOrder] = useState(0);


    const MoveSlider = () => {
        if (slideRef.current !== null) {
            slideRef.current.style.transition = "all 0.5s ease-in-out";
            const size = slideRef.current.getBoundingClientRect().width
            slideRef.current.style.transform = `translateX(-${(size) * currentImgOrder}px)`;
        }

    }

    useEffect(() => {
        MoveSlider();

    }, [currentImgOrder]);

    const moveToNextSlide = () => {
        if (currentImgOrder === 12) return;
        setcCurrentImgOrder(currentImgOrder + 1);
    };

    const moveToPrevSlide = () => {
        if (currentImgOrder === 0) return;
        setcCurrentImgOrder(currentImgOrder - 1);
    };

    // 데이터 통신 상태 출력 
    if (isLoading) {
        return <div>로딩 중...</div>
    }

    if(pic==undefined)
    return <div>로딩중 ...</div>

    if (isError) {
        return <div>에러가 발생하였습니다!</div>
    }

    return (
        <Div>
            <StyledButton onClick={moveToPrevSlide}>{'<'}</StyledButton>
            <Wrapper >
                <SlideWrapper ref={slideRef}>
                    {
                        console.log(pic)
                    }
                    {
                        pic?.map((item) => {
                            return <Img onClick={() => navigate(`detail/${item.postId}`)} src={item.Thumbnails} key={item.postId}></Img>
                        })
                    }

                </SlideWrapper>
            </Wrapper>
            <StyledButton onClick={moveToNextSlide}>{'>'}</StyledButton>
        </Div>
    );
};

export default SlideComponent;

export const Div = styled.div`
    display:flex;
    justify-content:center;
    gap :10px;
    padding-bottom:10%;
    width:100%;

    @media only screen and (min-width: 50px) {
    width:90%;
  }

  @media only screen and (min-width: 700px) {
    width:100%;
}
    
`

export const Wrapper = styled.div`
  width: 70%;
  height: 200px;
  overflow: hidden;
`

export const SlideWrapper = styled.div`
  display: flex;
  width: 100%;
  height:100%;
`
export const Img = styled.img`

  height: 200px;

  @media only screen and (min-width: 100px) {
    width:50%;
  }

  @media only screen and (min-width: 600px) {
    width: 25%;
}

@media only screen and (min-width: 900px) {
    width: 20%;
}
`
export const StyledButton = styled.button`
    background-color:#26282d;
    border:none;
    color:aliceblue;
    font-weight:bold;
    font-size:40px;

    &:hover{
        font-size:50px;
}
`

