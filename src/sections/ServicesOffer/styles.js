import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 172px;
    margin-bottom: 300px;

    @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
        margin-bottom: 256px;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints["mobile"]}){
        margin-top: 172px;
        margin-bottom: 64px;
    }

    .buttons {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        margin-top: 16px;
        .button {
            border: 2px solid ${props => props.theme.colors.primary};
            font-size: 1.4rem;
            padding: 6px 32px;
            font-weight: bold;
            border-radius: 9999px;
            cursor: pointer;

            
            &.active {
                background: ${props => props.theme.colors.primary};
                color: #fff;
                box-shadow: 0 3px 12px ${props => props.theme.colors.shade};
            }
        }
    }

    .box {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 480px;
        margin-top: 32px;
        background: ${props => props.theme.colors.primary};
        border-radius: 48px;
        padding: 48px;
        padding-bottom: 128px;
        color: ${props => props.theme.colors.background};

        @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
            height: 400px; 
        }

        @media screen and (max-width: ${props => props.theme.breakpoints["mobile"]}){
            padding: 24px;                   
        }

        .text {
            display: flex;
            flex-direction: column;
            align-items: center;

            h5 {
                font-size: 3.2rem;
                margin-bottom: 16px;
                font-weight: bold;
            }
            p {
                font-size: 1.6rem;
                max-width: 700px;
                text-align: center;
                margin-bottom: 8px;
                font-weight: bold;
            }
        }

        .images {
            position: absolute;
            bottom: -128px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            
            justify-content: center;
            width: 80%;
            gap: 16px;

            @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
                bottom: -72px;
                
            }
            
            @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
                bottom: -48px;  
            }
            
            @media screen and (max-width: ${props => props.theme.breakpoints["mobile"]}){
                bottom: -128px; 
                flex-wrap: wrap;

            }
            
            img {
                border-radius: 32px;
                background-color: ${props => props.theme.colors.primary};
                flex-basis: 30%;

                @media screen and (max-width: ${props => props.theme.breakpoints["mobile"]}){
                    width: 150px;
                    border-radius: 24px;
                }

                @media screen and (max-width: 450px){
                    width: 110px;
                    border-radius: 24px;
                }
                
                
            }
        }
    }

`