import axios from "axios";

export const getPosts = async(id)=>{
    const response = await axios.get(`/api/posts`);
    console.log(response.data);
/*     //여기는 임시적으로 필터링 하는곳 백엔드에서 해서 줄거임 
    if(id==='all') return response.data;
    let aa;
    if(isNaN(id)){
         aa = response.data.filter((item)=>{
            return  item.category==id;
         })
    }
    else{
        aa = response.data.filter((item)=>{
            return  item.id==id;
         })
    }


    console.log(aa)*/
    return response.data; 
}

export const addPosts = async(newPost)=>{
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/post`,newPost);
}