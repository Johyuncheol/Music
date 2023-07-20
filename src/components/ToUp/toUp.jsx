import React from 'react';
import { styled } from 'styled-components';

const ToUp = () => {

    const ToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        return (
        <section>
            <Box>
                <div onClick={ToTop} to='/posts/전체'>▲</div>
            </Box>
        </section>

    );
};

export default ToUp;

export const Box = styled.div`
  background-color: #31343a;
display:flex;

top:80%;
position:sticky;

color:aliceblue;
`
