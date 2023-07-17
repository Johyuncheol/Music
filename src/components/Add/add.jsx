import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { addPosts } from '../../api/posts';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";

const Add = () => {
    const navigate = useNavigate();
    const [cookie] = useCookies(['User']);

    const checkAuth = ()=>{
        // 이슈 로그인 -> 토큰값 있다 서버에서 응답 주면 페이지 들여보내줌 
        if(cookie.User===undefined){
            alert("로그인 해주세요")
            navigate("/")
        }
    }

    useEffect(()=>{
        checkAuth();
    },[cookie])

    const [newPost, setnewPost] = useState({//json은 noSQL이라 id 자동생성됨
        title: "",
        yUrl: "",
        comment: "",
        category: "ballad", //셀렉트 박스에서 변동이 없으면 onchange가 동작안함 기본값 설정
    });

    const ChangeInputValue = (e, key) => {
        setnewPost({ ...newPost, [key]: e.target.value });
        console.log(newPost);
    }

    //리액트 쿼리 관련 코드 
    const queryClient = useQueryClient();
    const mutation = useMutation(addPosts, {
        onSuccess: () => {
            //싱크를 맞춰주는 부분, 하지만 추가를 별도의 페이지에서 하기에 필요는 없다...
            //페이지 전환하면서 다시 불러오기때문

            queryClient.invalidateQueries(`all`)
            queryClient.invalidateQueries(`${newPost.category}`)
            console.log("성공")
        }
    })

    const SubmitNewPost = () => {
        mutation.mutate(newPost)
    }



    return (
        <AddSection>
            <LinkItem onClick={() => navigate(-1)}>{'<'}</LinkItem>
            <Div>
                <Wrap>
                    <Header>
                        <Select
                            value={newPost.category}
                            onChange={(e) => ChangeInputValue(e, 'category')}
                        >
                            <option value="ballad" >발라드</option>
                            <option value="hiphop">힙합</option>
                        </Select>

                        <button onClick={SubmitNewPost}>올리기</button>

                    </Header>

                    <StyledInput
                        value={newPost.yUrl}
                        onChange={(e) => ChangeInputValue(e, 'yUrl')}
                        placeholder='유튜브링크'
                    />

                    <StyledInput
                        value={newPost.title}
                        onChange={(e) => ChangeInputValue(e, 'title')}
                        placeholder='제목'
                    />

                    <StyledTextarea
                        value={newPost.comment}
                        onChange={(e) => ChangeInputValue(e, 'comment')}
                        placeholder='내용'
                    />

                </Wrap>
            </Div>

        </AddSection>
    );
};

export default Add;


export const AddSection = styled.div`
    width:100%;
    color:aliceblue;
`
export const Div = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`

export const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    gap:20px;

`

export const LinkItem = styled.div`
    width:50px;
    font-size:30px;
    padding:10px 0 20px 30px;
`



export const Select = styled.select`
    border:none;
    color:aliceblue;
    background-color:#31343a;

`

export const StyledTextarea = styled.textarea`
    height:300px;
    color:aliceblue;
    background-color:#26282d;
    border:1px solid darkgray;

`

export const Header = styled.div`
display:flex;
justify-content:space-between;

`

export const StyledInput = styled.input`
    color:aliceblue;
    background-color:#26282d;
    font-size:100%;
    padding:5px;
    border:none;
    border-bottom:1px solid darkgray;
    outline:none;

`