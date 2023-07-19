import React, { useState } from 'react';
import { styled } from 'styled-components';
import { getOnePost } from '../../api/posts';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { delComment } from '../../api/posts';
import InputValue from './inputValue';
import { useMutation, useQueryClient } from 'react-query';

const Detail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [commentState, setCommentState] = useState(false);

    const { isLoading, isError, data } = useQuery(`${params.id}`, () => getOnePost(params.id));

    const queryClient = useQueryClient();

    const CommentDel =(id)=>{
        mutation.mutate(id);
    }
    const mutation = useMutation((id) => delComment(id), {
        onSuccess: () => {

            queryClient.invalidateQueries(`${params.id}`)
            console.log("성공")
        }
    })

    // 데이터 통신 상태 출력 
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
                </TitleBox>
                <TitleBox>
                    {item.content}
                </TitleBox>
                <ContentSection>
                    <VideoSection>
                        <Player> {/* 조절하려면 따로 감싸줘야함 */}
                            <ReactPlayer url={item.yurl} controls width={'100%'} />
                        </Player>

                        <Option>
                            <OptionLeft>
                                <button>좋아요 {item.likes}</button>
                                <span>{`댓글 수 +${item.commentList.length}`}</span>
                            </OptionLeft>
                            <button onClick={() => setCommentState(!commentState)}>
                                {
                                    commentState
                                        ? "입력창 닫기"
                                        : "댓글쓰기"
                                }
                            </button>
                        </Option>
                    </VideoSection>



                    <CommentSection>
                        {
                            commentState
                                ?
                                <CommentBox>
                                    <InputValue id={params.id}></InputValue>
                                </CommentBox>
                                :
                                <></>

                        }
                        {
                            item.commentList?.map((c) => {
                                return (
                                    <CommentBox>
                                        <CommentOption>
                                        <StyledSpan>ID: {c.commentId}</StyledSpan>
                                        <button onClick={()=>CommentDel(c.commentId)}>삭제</button>
                                        </CommentOption>
                                        
                                        <StyledSpan>{c.content}</StyledSpan>
                                        
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
                    <Card item={data} key={data.postId} />
                }
            </Content>
        </Wrap>


    );
};

export default Detail;


export const CommentSection = styled.div`
    color:aliceblue;
    width:30%;
    min-width:190px;
   
`

export const ContentSection = styled.div`
    display:flex;
    justify-content:space-between;

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
    
    width:90%;
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
    padding-left:10px;
    height:70px;

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


    width:70%;
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

export const CommentOption = styled.div`
    display:flex;
    justify-content:space-between;
`
