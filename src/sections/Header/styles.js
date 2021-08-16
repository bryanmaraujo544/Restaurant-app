import styled from 'styled-components'

export const Container = styled.header`
    height: calc(100vh - 90px);
    width: auto;
    background: yellow;
    position: relative;


    @media screen and (max-width: 966px){
        height: auto;
    }
    
    @media screen and (max-width: 1366px){
        padding: 0px 64px;
    }

    @media screen and (max-width: 768px){
        padding: 0px 32px;
    }

    @media screen and (max-width: 480px){
        padding: 0px 24px;
    }
`