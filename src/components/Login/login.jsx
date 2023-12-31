import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import { useCookies } from "react-cookie";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [cookie, setCookie] = useCookies(['User']);
  const [cID, setCID] = useCookies(['userID']);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState(false);
  const [password, setPassword] = useState('');
  const [pwState, setPwState] = useState(false);

  //const history = useHistory();

  const checkFrame = () => {
    const IDRegex = new RegExp('[a-z0-9]+@[a-z]+[.][a-z]{2,3}');
    if (IDRegex.test(email)) setEmailState(false);
    else setEmailState(true);

    var PWRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/);
    if (PWRegex.test(password)) setPwState(false);
    else setPwState(true);

  }

  useEffect(() => {
    checkFrame()
  }, [email, password])


  const handleLogin = () => {

    if (emailState || email==='') {
      alert("이메일 형식이 아닙니다");
      return -1;
    }

    if (pwState || password==='') {
      alert("비밀번호 형식이 아닙니다");
      return -1;
    }

    // 로그인 로직

    // 로그인 로직을 구현하고 성공 시에 다음 경로로 이동(메인페이지)
    axios.post('/api/users/login', { username: email, password: password }) //로컬호스트가 아니라 주소가같아서 CORS 안켜도됨
      .then(response => {

        if (response.status === 200) {
          setCID('userID', email);
          const Token = response.headers.authorization
          setCookie('User', Token, {
            path: "/",
            expire: 0
          });
          console.log(Token)

          alert("로그인!");

          navigate("/")
        }
      })

      .catch(error => {
        alert('확인 후 다시 시도해주세요')
      });

  };


  return (
    <Wrap>
      <h1>로그인</h1>
      <Box>
        <label>Email</label>
        <StyledInput
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='이메일을 입력해주세요.'
        />
      </Box>
      {
        emailState
          ?
          <StyledSpan>email 형식이 아닙니다</StyledSpan>
          :
          <></>
      }

      <Box>
        <label>Password</label>
        <StyledInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='비밀번호를 입력해주세요.'
        />
      </Box>
      {
        pwState
          ?
          <StyledSpan>PW 문자, 특수문자, 숫자포함 8자리 이상</StyledSpan>
          :
          <></>
      }

      <ButtonGroup>
        <Button onClick={handleLogin}>로그인</Button>
        <Link to="/signUp"><Button>회원가입</Button></Link>
      </ButtonGroup>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.div`
  display: flex;
  align-items:center;
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
  width: 80%;
  height: 10vh;
  min-height: 50px;
  border-bottom: 2px solid darkolivegreen;
  gap: 10px;
  
  font-size:20px;
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


const StyledSpan = styled.span`
  color: #f44646;;
  font-size:10px;
`;

const StyledInput = styled.input`
  font-size:20px;
`
