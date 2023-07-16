import React from 'react';
import { styled } from 'styled-components';
import { getPosts } from '../../api/posts';
import { useQueries, useQuery } from 'react-query';
import { useParams,Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Category = () => {
    const params = useParams();
    console.log(params.id)// 페이지 id 

    const { isLoading, isError, data } = useQuery(`${params.id}`, () => getPosts(params.id));
    console.log(data);

    if (isLoading) {
        return <div>로딩 중...</div>
    }

    if (isError) {
        return <div>에러가 발생하였습니다!</div>
    }

    const Card = ({ item }) => {
        return (
            <Box>
                <TitleBox>
                    ◎ {item.title}
                    <StyledLink to={`/detail/${item.id}`}> . . . </StyledLink>
                </TitleBox>

                <ContentBox>
                    <Player> {/* 조절하려면 따로 감싸줘야함 */}
                        <ReactPlayer url={item.yUrl} controls />
                    </Player>
                    
                </ContentBox>
                    <Option>
                        <button>좋아요</button>
                        <span>+30</span>
                        <button>댓글</button>
                        <span>+30</span>
                    </Option>

                <TitleBox>
                    {item.comment}
                </TitleBox>
            </Box>
        );

    };

    return (
        <Wrap>
            {
                data?.map((item) => {
                    return (
                        <Card item={item} key={item.id} />
                    )
                })
            }
        </Wrap>
    );
};

export default Category;

export const Wrap = styled.div`
    display:flex;
    align-items:center;

    color:aliceblue;
    flex-direction:column;
    padding : 5%;
    width:100%;
    border:1px solid black;
    gap :40px;
    
`

export const Box = styled.div`
    display:flex;
    justify-content:center;

    color:aliceblue;
    flex-direction:column;
    
    width:80%;
    height:100%;
    min-height:50px;
    gap :10px;
    padding:10px;

    border-radius:10px;
    background-color:#303238;
    
`

export const TitleBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:10px;
    min-height:50px;

    border-bottom: 1px solid #555962;
`

export const ContentBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    
`

export const Player = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:5%;
    margin-top:5%;
    width:100%;
    max-width:700px;

    
`

export const Option = styled.div`
    display:flex;
    gap:10px;
    
`
export const StyledLink = styled(Link)`
    text-decoration:none;
    color:aliceblue;
 `
