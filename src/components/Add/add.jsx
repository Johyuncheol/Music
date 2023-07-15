import React from 'react';
import { styled } from 'styled-components';
const Add = () => {
    return (
        <Div>
            <Wrap>
            <LinkItem>
                <div>{'<'}</div>
        
            </LinkItem>
            <Header>
                <Select>
                    <option value="발라드">발라드</option>
                    <option value="발라드">힙합</option>
                    <option value="발라드">락</option>
                    <option value="발라드">K-pop</option>
                    
                </Select>
                <button>올리기</button>
            </Header>

            <div>
                <input placeholder='유튜브링크'></input>
            </div>

            <div>
                <input placeholder='제목'></input>
            </div>

            <div>
                <textarea placeholder='내용'></textarea>
            </div>
            </Wrap>
        </Div>
    );
};

export default Add;

export const Div = styled.div`
background-color:#26282d;
height:100vh;

display:flex;
flex-direction:column;
padding-top:30px;
align-items:center;
gap : 10px;

`

export const Wrap = styled.div`
    width: 80%;
    display:flex;
    flex-direction:column;
    gap:20px;
`

export const LinkItem = styled.div`
    margin-bottom:70px;
`



export const Select = styled.select`
width:100px;

`

export const Header = styled.div`
color:aliceblue;
margin-bottom:10px;
display:flex;
justify-content:space-between;



`