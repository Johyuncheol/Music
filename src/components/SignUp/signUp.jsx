import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Signup = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // 회원 가입 함수
  const signup = async (e) => {
    e.preventDefault();
    const { id, password } = formRef.current;

    try {
      const response = await axios.post('http://3.38.191.164/register', {
        id: id.value,
        password: password.value,
      });

      if (response.status === 201) {
        console.log(response);
        navigate('/'); // 회원가입 후 이전 페이지로 이동
        alert('회원가입이 완료 되었습니다');
      }
    } catch (error) {
      setError('서버 통신 실패');
      console.error(error);
      alert(error.response.data.message)
      id.value = '';
      password.value='';
    }
  };

  return (
    <Wrap>
      <Box>
        <h1>회원가입</h1>
        <form onSubmit={signup} ref={formRef}>
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
            <Button type="submit">회원가입 하기</Button>
          </ButtonGroup>
        </form>
        {error && <ErrorText>{error}</ErrorText>}
      </Box>
    </Wrap>
  );
};

export default Signup;

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

const ErrorText = styled.p`
  color: red;
  text-align: center;
`;
