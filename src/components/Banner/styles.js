import styled from 'styled-components'

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    position: relative;

    @media screen and (max-width: 966px){
        grid-template-columns: 1fr;
        margin-top: 0px;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
        margin-top: 32px;
    }

    .grain{
        position: absolute;
        left: 0;
        top: 8px;
        display: flex;

        @media screen and (min-width: ${props => props.theme.breakpoints["l-screen"]}){
            top: 48px;
        }

        @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
            display: none;
        }

        svg{
            height: 48px;
            width: 48px;

            @media screen and (min-width: ${props => props.theme.breakpoints["l-screen"]}){
                height: 86px;
                width: 86px;
            }
        }
    }
    
    .content{
        display: flex;
        align-items: center;
        
        height: 100%;
        padding: 0px;
        grid-column: 1 / 2;
    }

    .images{
        grid-column: 2 / 3;

        @media screen and (max-width: 966px){
            grid-column: 1 / 2;
        }
    }
`