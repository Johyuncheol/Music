import React,{useEffect, useState} from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { inMypage } from '../../api/posts';

const MyPage = () => {

    const navigate = useNavigate();
    const [cookie] = useCookies(['User']);
    const [data,setData] = useState()

    const checkAuth = ()=>{
        if(cookie.User===undefined){
            alert("로그인 해주세요")
            navigate("/")
        }
    }

    const getUserData=async()=>{
        const data=await inMypage(cookie.User)
     
        setData(data);
    
    }
    console.log(data);


    useEffect(()=>{
        checkAuth();
        getUserData();
    },[cookie])

    //데이터 받아오기전에 에러뜰수있음
    if(data===undefined) return <div>로딩중</div>

    return (
        <Wrap>
            <div>
                <h3>사용자 ID : {data.username}</h3>{/* 쿠키데이터로 처리하면? */}
            </div>
        {
            data.responseList?.map((item)=>{
                 return <Box onClick={()=>navigate(`/detail/${item.postId}`)}>{item.title} </Box>
            })
        }
            

        </Wrap>
    );
};

export default MyPage;


export const Wrap = styled.div`
    display:flex;
    color:aliceblue;
    flex-direction:column;
    padding : 5%;
    width:100%;
    border:1px solid black;
    gap :10px;
    
`

export const Box = styled.div`
    display:flex;
    justify-content:center;

    color:aliceblue;
    flex-direction:column;
    
    width:100%;
    height:10vh;
    min-height:50px;
    border-bottom: 2px solid darkolivegreen;
    gap :10px;
    
`