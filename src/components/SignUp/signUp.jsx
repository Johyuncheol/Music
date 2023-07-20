import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Signup = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState(false);
  const [password, setPassword] = useState('');
  const [pwState, setPwState] = useState(false);

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




  // 회원 가입 함수
  const signup = async () => {

    if (emailState || email==='') {
      alert("이메일 형식이 아닙니다");
      return -1;
    }

    if (pwState || password==='') {
      alert("비밀번호 형식이 아닙니다");
      return -1;
    }



    try {
      const response = await axios.post('/api/users/signup', {
        username: email,
        password: password,
      });

      if (response.status === 200) {
        console.log(response);
        navigate('/'); // 회원가입 후 이전 페이지로 이동
        alert('회원가입이 완료 되었습니다');
      }
    } catch (error) {
      setError('서버 통신 실패');
      console.error(error);
      alert(error.response.data.message)
      email = '';
      password = '';
    }
  };

  return (
    <Wrap>
      <h1>회원가입</h1>

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
          <ErrorText>email 형식이 아닙니다</ErrorText>
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
          <ErrorText>PW 문자, 특수문자, 숫자포함 8자리 이상</ErrorText>
          :
          <></>
      }


      <ButtonGroup>
        <Button onClick={signup}>회원가입 하기</Button>
      </ButtonGroup>


    </Wrap>
  );
};

export default Signup;

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

const ErrorText = styled.p`
  color: red;
  text-align: center;
  font-size:10px;
`;

const StyledInput = styled.input`
  font-size:20px;
`
