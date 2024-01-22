import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({theme}) => css`
        background-color: ${theme.colors.secondaryBg};
        color: #ffff;
        padding-left: 5px;
        box-shadow: 0px 0px 6px black;
        width: 70%;
        height: 50px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px
    `}

`;