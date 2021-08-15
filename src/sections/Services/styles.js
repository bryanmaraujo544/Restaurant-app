import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 128px;

    @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
        text-align: center;
    }

    .image {
        flex-basis: 50%;
        &:before {
            content: '';
        }

        @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
            flex-basis: 100%;
            order: 2;
        }
    }

    .services{
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
            flex-basis: 100%;
            align-items: center;
        }

        .title {
            font-size: 4.2rem;
            color: ${props => props.theme.colors.primary};
        }

        .description {
            font-size: 1.4rem;
            width: 85%;
            color: ${props => props.theme.colors["second-text"]};
            margin-top: 8px;
        }

        .boxes {
            /* display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center; */
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-top: 24px;
            width: 100%;

            @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
                width: auto;
            }
            .box {
                width: auto;
                flex-basis: 50%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin-top: 20px;

                .icon {
                    background: white;
                    border-radius: 50%;
                    padding: 8px;    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .box-text {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-left: 8px;
                }

               
            }
        }
    }

` 