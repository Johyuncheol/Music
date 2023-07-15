import React from 'react';
import { styled } from 'styled-components';


const Footer = () => {
    return (
            <FooterDiv>
                <span>11조 미니 프로젝트</span>
                
                <span>github : http:asdlkasl;dk;alskd;laskd</span>
            </FooterDiv>
    );
};

export default Footer;



export const FooterDiv = styled.div`

display:flex;
justify-content:right;
flex-direction:column;
    height:10vw;
    background-color:#26282d;
    padding: 20px;
    color: #606164;
`

