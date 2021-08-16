import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    height: 700px;
    width: 100%;
    margin-top: 128px;
    border-radius: 48px;
    background: ${props => props.theme.colors.primary};

    @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
        height: auto;
    }
    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-basis: 50%;
        padding: 48px;
        color: ${props => props.theme.colors.background};

        @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
            flex-basis: 100%;
        }
        
        .title {
            font-size: 3.6rem;
            line-height: 1.4;
        }

        .content {
            font-size: 1.3rem;
            margin-top: 32px;
        }

        span {
            font-size: 1.6rem;
            font-weight: bold;
        }
    }

    .image {
        flex-basis: 50%;
        height: 100%;
        width: 100%;
        position: relative;

        @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
            flex-basis: 100%;
            display: none;
        }

        img {
            border-radius: 0 48px 48px 0;

        }
    }
`