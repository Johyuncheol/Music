import React from 'react';
import { styled } from 'styled-components';
import { getPosts } from '../../api/posts';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { isLoading, isError, data } = useQuery('all', () => getPosts(params.id));


    const Card = ({ item }) => {
        return (
            <Box>
                <TitleBox>
                    ◎ {item.title}
                </TitleBox>

                <ContentSection>
                    <VideoSection>
                        <Player> {/* 조절하려면 따로 감싸줘야함 */}
                            <ReactPlayer url={item.yUrl} controls width={'100%'} />
                        </Player>

    {/*                     <Option>
                            <OptionLeft>
                                <button>좋아요 +30</button>
                                <span>{`댓글 수 +${item.comments.length}`}</span>
                            </OptionLeft>
                            <button>댓글쓰기</button>
                        </Option> */}
                    </VideoSection>
                    
                    <CommentSection>
                        {
                            item.comments?.map((c) => {
                                return (
                                    <CommentBox>
                                        <StyledSpan>ID: {c.username}</StyledSpan>
                                        <StyledSpan>{c.comment}</StyledSpan>
                                    </CommentBox>
                                );

                            })
                        }
                    </CommentSection>
                </ContentSection>
            </Box>

        );

    };

    return (
        <Wrap>
            <StyledLink onClick={() => navigate(-1)}> {'<'} </StyledLink>
            <Content>
                {
                    data?.map((item) => { // 일단은 테스트용 data는 [{}]형식으로 오기 때문
                        return (
                            <Card item={item} key={item.id} />
                        )
                    })
                }
            </Content>
        </Wrap>


    );
};

export default Detail;


export const CommentSection = styled.div`
    color:aliceblue;
    width:10%;
    min-width:190px;
   
`

export const ContentSection = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    color:aliceblue;

    margin-top:1%;

`

export const Wrap = styled.div`
    display:flex;

    color:aliceblue;
    flex-direction:column;
    width:100%;
`

export const Content = styled.div`
    display:flex;
    align-items:center;

    flex-direction:column;
    margin-bottom:5%;
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

export const VideoSection = styled.div`
    display:flex;
    flex-direction:column;
    position:sticky;
    top:0;
     justify-content:center; 
    align-items:center;

    background-color:#303238;


    width:65%;
    height:500px;
  
    
`

export const Player = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:clear;
    width:100%;
`

export const Option = styled.div`
    padding:3% 0 3% 0;
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    gap:10px;
    background-color:clear;
    
`

export const OptionLeft = styled.div`
    display:flex;
    gap:10px;

`
export const StyledLink = styled(Link)`
    text-decoration:none;
    color:aliceblue;
    font-size:30px;
    width:30px;
    padding:20px;
 `

export const CommentBox = styled.div`
    border-bottom: 1px solid #555962;
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:20px;

    word-break:break;
`

export const StyledSpan = styled.span`
    word-break:break-all;
`

