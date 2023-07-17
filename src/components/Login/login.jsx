import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

const Login = () => {
  const formRef = useRef();
  const [cookies, setCookie] = useCookies(['id']);
  // 쿠키를 전역적으로 쓰라.
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.id) {
      // 이미 로그인된 상태이므로 메인 페이지로 이동
      navigate('/');
    }
  }, [cookies, navigate]);


  const login = (e) => {
    e.preventDefault();
    const { id, password } = formRef.current;

    axios
      .post('http://3.38.191.164/login', { // 로그인 요청
        id: id.value,
        password: password.value,
      })
      .then((res) => {
        setCookie('id', res.data.token); // 쿠키에 토큰 저장
        console.log(cookies);
        navigate('/'); // 로그인 후 이동할 경로
      
      
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Wrap>
      <Box>
        <h1>로그인</h1>
        <form onSubmit={login} ref={formRef}>
          <label>사용자 이름</label>
          <input
            type="text"
            name="id"
            placeholder='사용자 이름을 입력해주세요.'
            required
          />
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            placeholder='비밀번호를 입력해주세요.'
            required
          />
          <ButtonGroup>
            <Button type="submit">로그인</Button>
            <Link to="/signup"><Button>회원가입</Button></Link>
          </ButtonGroup>
        </form>
      </Box>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.div`
  display: flex;
  color: aliceblue;
  flex-direction: column;
  padding: 5%;
  width: 100%;
  border: 1px solid black;
  gap: 10px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  color: aliceblue;
  flex-direction: column;
  width: 100%;
  height: 10vh;
  min-height: 50px;
  border-bottom: 2px solid darkolivegreen;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: darkolivegreen;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;
