import React from 'react';
import { styled } from 'styled-components';
import { getPosts,likePost } from '../../api/posts';
import { useQueries, useQuery } from 'react-query';
import { useParams,Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useCookies } from 'react-cookie';

const Category = () => {
    const params = useParams();
    console.log(params["*"])// 페이지 id 

    let key='';
    if(params.id=='ALL') key='posts' 
    else key = `/posts/category/${params.id}`

    //전체 , 카테고리별 조회일 때
    const { isLoading, isError, data } = useQuery(`${params.id}`, () => getPosts(key));
    console.log(data);


    const [cookie] = useCookies(['User']);

    const PostLike=(id)=>{
        likePost(id,cookie.User)
    }
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

                    <Span>◎ {item.title}</Span>
                    <StyledLink to={`/detail/${item.postId}`}> . . . </StyledLink>

                </TitleBox>

                <ContentBox>
                    <Player> {/* 조절하려면 따로 감싸줘야함 */}
                        <ReactPlayer url={item.yurl} controls />
                    </Player>
                    
                </ContentBox>

                    <Option>

                        <button onClick={()=>PostLike(item.postId)}>좋아요 {item.likes}</button>

                        {
                            console.log(item)
                        }

                            <span>
                                {`댓글 수 +${item.commentList==null
                                        ? 0
                                        : item.commentList.length
                                    }`
                                }
                                </span>

                    </Option>
 




                <TitleBox>
                    {item.content}
                </TitleBox>
            </Box>
        );

    };

    return (
        <Wrap>
            {
                Array.isArray(data)
                ?
                data?.map((item) => {
                    return (
                        <Card item={item} key={item.postId} />
                    )
                })
                :
                <div>로딩중</div>
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
    padding : 5% 0 5% 0;
    width:100%;
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

    padding:3%;

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

    width:100%;

    
`

export const Option = styled.div`
    display:flex;
    gap:10px;
    
`
export const StyledLink = styled(Link)`
    text-decoration:none;
    color:aliceblue;

    font-size:20px;
 `

export const Span = styled.span`
    width:80%;
    text-decoration:none;
    color:aliceblue;


 `