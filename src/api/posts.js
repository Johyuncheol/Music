import axios from "axios";


//전체 / 카테고리별 조회 
export const getPosts = async (key) => {
    const response = await axios.get(`/api/${key}`);
    console.log(response.data);
    return response.data;

}

//선택 게시글 조회

export const getOnePost = async (key) => {
    const response = await axios.get(`/api/posts/${key}`);
    console.log(response.data);
    return response.data;
}


//게시글 등록
export const addPosts = async (newPost, token) => {
    console.log(newPost)
    const response = await axios.post(`/api/posts`, newPost
        , {
            headers:
            {
                Authorization: token
            }
        }
    );
    console.log(response);
}

//게시글 삭제
export const delPosts = async (id,token) => {
    const response = await axios.delete(`/api/posts/${id}`
        , {
            headers:
            {
                Authorization: token
            }
        }
    );
    console.log(response);
}





//게시글 검색(제목으로)
export const searchPosts = async (id) => {
    const response = await axios.get(`/api/posts/search/${id}`);
    console.log(response);
    return response.data;
}


//게시글 수정 
export const updatePosts = async (id,token) => {
    const response = await axios.put(`/api/posts/${id}`
    , {
        headers:
        {
            Authorization: token
        }
    });

    console.log(response);
    return response.data;
}


// 댓글 등록 

export const addComment = async (id, comment, token) => {
    console.log(id,comment,token)
    const response = await axios.post(`/api/comments`, comment
    , {
        headers:
        {
            Authorization: token
        }
    });

    console.log(response);
    /*     return response.data; */
}

// 댓글 삭제 

export const delComment = async (id,token) => {
    const response = await axios.delete(`/api/comments/${id}`
    ,{
        headers:
        {
            Authorization: token
        }
    });

    console.log(response);
    /*     return response.data; */
}



// 좋아요! 
export const likePost = async (id,token) => {
    const response = await axios.post(`/api/posts/${id}/likes`)

    /*     return response.data; */
}



// 마이페이지 데이터 
export const inMypage = async (token) => {
    const response = await axios.get(`/api/users/mypage`
    ,{
        headers:
        {
            Authorization: token
        }
    });
    console.log(response.data);
    return response.data;


}