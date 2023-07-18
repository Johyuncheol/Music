import React,{useState} from 'react';
import { addComment } from '../../api/posts';

const InputValue = ({id}) => {
    console.log(id)
    const ChangeInputValue = (e, key) => {
        setnewComment({ ...newComment, [key]: e.target.value });
        console.log(newComment);
    }
    
    const AddCommentHandler = () => {
        addComment(id,newComment)
    }

    const [newComment, setnewComment] = useState({//json은 noSQL이라 id 자동생성됨
        postId:id,
        username:"",
        content: ""
     });
 

    return (
        <div>
            <input
                value={newComment.username}
                placeholder='username'
                onChange={(e) => ChangeInputValue(e, 'username')}
            />


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