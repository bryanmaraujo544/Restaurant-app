import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 966px){
        align-items: center;
        text-align: center;
    }

    .buttons{
        display: flex;
    }

    .uptitle{
        text-transform: uppercase;
        border-radius: 9999px;
        color: ${props => props.theme.colors["second-text"]};
        font-size: 1.6rem;
        margin-bottom: -12px;
    }

    h1{
        font-size: 5.2rem;
        line-height: 1.25;

        @media screen and (min-width: ${props => props.theme.breakpoints["sm-screen"]}){
            font-size: 5.6rem;
            width: 100%;
        }

        @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
            font-size: 4.8rem;
        }

        @media screen and (max-width: ${props => props.theme.breakpoints["mobile"]}){
            font-size: 4.2rem;
        }
    }

    h2{
        font-size: 1.7rem;
        font-weight: 400;
        color: ${props => props.theme.colors['second-text']};
        max-width: 80%;
        font-weight: 400;
        margin-bottom: 12px;
    }


`