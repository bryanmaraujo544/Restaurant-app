import styled from 'styled-components'

export const Container = styled.main`
    margin-top: 172px;
    width: 100%;    
    flex-direction: column;
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
    .cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 24px;
        margin-top: 16px;
       
    }

`