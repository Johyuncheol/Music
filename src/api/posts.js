import axios from "axios";

//전체 / 카테고리별 조회 
export const getPosts = async(key)=>{
    const response = await axios.get(`/api/${key}`);
    console.log(response.data);
    return response.data; 
}

//선택 게시글 조회

export const getOnePost = async(key)=>{
    const response = await axios.get(`/api/posts/${key}`);
    console.log(response.data);
    return response.data; 
}


//게시글 등록
export const addPosts = async(newPost)=>{
    console.log(newPost)
    const response =await axios.post(`/api/posts`,newPost);
    console.log(response);
}

//게시글 검색(제목으로)
export const searchPosts = async(id)=>{
    const response =await axios.get(`/api/posts/search/${id}`);
    console.log(response);
    return response.data;
}

// 댓글 등록 
export const addComment = async(id,comment)=>{
    console.log(comment)
    const response =await axios.post(`/api/posts/${id}/comments`,comment);
    console.log(response);
/*     return response.data; */
}

// 댓글 삭제 
export const delComment = async(id)=>{
    const response =await axios.delete(`/api/comments/${id}`);
    console.log(response);
/*     return response.data; */
}