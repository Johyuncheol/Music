import React from 'react';
import { styled } from 'styled-components';


const Footer = () => {
    return (
            <FooterDiv>
                <span>11조 미니 프로젝트</span>
                
                <span>Front-end github : https://github.com/Johyuncheol/Music</span>
                <span>Back-end github : https://github.com/userkim12/preproject-11-be</span>

            </FooterDiv>
    );
};

export default Footer;



export const FooterDiv = styled.div`

display:flex;
justify-content:right;
flex-direction:column;
    height:30vw;
    background-color:#26282d;
    padding: 20px;
    color: #606164;
`

