import React, { useState } from 'react';
import { addComment, getOnePost } from '../../api/posts';
import { useMutation, useQueryClient, useQuery } from 'react-query';

const InputValue = ({ id }) => {

    console.log(id)
    const ChangeInputValue = (e, key) => {
        setnewComment({ ...newComment, [key]: e.target.value });
        console.log(newComment);
    }

    const queryClient = useQueryClient();

    const AddCommentHandler = () => {
        mutation.mutate();
    }

    //리액트 쿼리 관련 코드 

    const mutation = useMutation(() => addComment(id, newComment), {
        onSuccess: () => {
            //싱크를 맞춰주는 부분, 하지만 추가를 별도의 페이지에서 하기에 필요는 없다...
            //페이지 전환하면서 다시 불러오기때문

            queryClient.invalidateQueries(`${id}`)
            console.log("성공")
        }
    })

    const [newComment, setnewComment] = useState({//json은 noSQL이라 id 자동생성됨
        postId: id,
        username: "",
        content: ""
    });


    return (
        <div>
{/*             <input
                value={newComment.username}
                placeholder='username'
                onChange={(e) => ChangeInputValue(e, 'username')}
            /> */}


            <input
                value={newComment.content}
                placeholder='comment'
                onChange={(e) => ChangeInputValue(e, 'content')}

            />
            <button onClick={AddCommentHandler}>댓글등록</button>
        </div>
    );
};

export default InputValue;