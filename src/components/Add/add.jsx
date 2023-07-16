import React, { useState } from 'react';
import { styled } from 'styled-components';
import { addPosts } from '../../api/posts';
import { useMutation, useQueryClient } from 'react-query';

const Add = () => {

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
        <Div>
            <Wrap>
                <LinkItem>
                    <div>{'<'}</div>

                </LinkItem>
                <Header>
                    <Select value={newPost.category} onChange={(e) => ChangeInputValue(e, 'category')}>
                        <option value="ballad" >발라드</option>
                        <option value="hiphop">힙합</option>
                    </Select>
                    <button onClick={SubmitNewPost}>올리기</button>
                </Header>

                <div>
                    <input value={newPost.yUrl} onChange={(e) => ChangeInputValue(e, 'yUrl')} placeholder='유튜브링크' />
                </div>

                <div>
                    <input value={newPost.title} onChange={(e) => ChangeInputValue(e, 'title')} placeholder='제목'></input>
                </div>

                <div>
                    <textarea value={newPost.comment} onChange={(e) => ChangeInputValue(e, 'comment')} placeholder='내용'></textarea>
                </div>
            </Wrap>
        </Div>
    );
};

export default Add;

export const Div = styled.div`
background-color:#26282d;
height:100vh;

display:flex;
flex-direction:column;
padding-top:30px;
align-items:center;
gap : 10px;

`

export const Wrap = styled.div`
    width: 80%;
    display:flex;
    flex-direction:column;
    gap:20px;
`

export const LinkItem = styled.div`
    margin-bottom:70px;
`



export const Select = styled.select`
width:100px;

`

export const Header = styled.div`
color:aliceblue;
margin-bottom:10px;
display:flex;
justify-content:space-between;



`