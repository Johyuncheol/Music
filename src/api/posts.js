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



export const addPosts = async(newPost)=>{
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/post`,newPost);
}