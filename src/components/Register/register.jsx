import React, { useState } from 'react';
import { styled } from 'styled-components';
// import { useHistory } from 'react-router-dom';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const history = useHistory();

  //const handleLogin = () => {
  // 로그인 로직
  //};

  const handleRegister = () => {
    // 회원가입 로직
    // 회원가입 로직을 구현하고 성공 시에 다음 경로로 이동(메인페이지).

    //history.push('/mainpage'); // 다음 경로로 이동
  };

  return (
    <Wrap>
      <h1>회원가입</h1>
      
      <Box>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='이메일을 등록해주세요.'
        />
      </Box>

      <Box>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='비밀번호를 등록해주세요.'
        />
      </Box>

      <ButtonGroup>
        {/* <Button onClick={handleLogin}>로그인</Button> */}
        {/* <Button onClick={handleRegister}>회원가입</Button> */}
        <Button onClick={handleRegister}>회원가입</Button>
      </ButtonGroup>
    </Wrap>
  );
};

export default Register;

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
