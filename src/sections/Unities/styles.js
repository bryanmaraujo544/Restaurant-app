import styled from 'styled-components'

export const Container = styled.main`
    margin-top: 172px;
    width: 100%;    
    flex-direction: column;
    @media screen and (max-width: 966px){
        height: auto;
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