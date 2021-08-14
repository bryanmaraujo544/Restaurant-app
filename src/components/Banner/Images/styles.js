import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    

    @media screen and (max-width: 966px){
        margin-top: 64px;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
        margin-top: 72px;
    }

    /* Circle wich is backward of the images of the foods */
    &:before{
        content: '';
        position: absolute;
        left: -25px;
        bottom: 50%;
        width: 500px;
        height: 500px;
        background: ${props => props.theme.colors.secondary};
        border-radius: 50%;
        transform: translateY(50%);

        @media screen and (min-width: ${props => props.theme.breakpoints["l-screen"]}){
            height: 600px;
            width: 600px
        }

        @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
            width: 400px;
            height: 400px;
        }
    }

    .image{
        width: 80%;
        img{
            width: 400px;
            border-radius: 50%50%;
            object-fit: cover;

            @media screen and (min-width: ${props => props.theme.breakpoints["l-screen"]}){
                width: 500px
            }

            @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                width: 300px;
            }
        }
    }

    /* div of the buttons wich is resposible to switch food images */
    .buttons{
        position: relative;
        right: 0;
        width: 30%;
        display: flex;
        flex-direction: column;
        z-index: 2;

        @media screen and (min-width: ${props => props.theme.breakpoints["l-screen"]}){
            width: 35%;
        }

        @media screen and (max-width: 966px){
            width: 35%;
        }

        @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
            width: 40%;
        }
        .button{
            background: #fff;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            padding: 8px;
            border-radius: 9999px;

            cursor: pointer;
            
            @media screen and (min-width: ${props => props.theme.breakpoints["l-screen"]}){
                padding: 12px;
            }
            
            &.active{
                background: #F8F9FA;
                box-shadow: 0px 6px 18px rgba(0,0,0,0.15);
            }

            img {
                border-radius: 50%;
                width: 32px;
                height: 32px;
                object-fit: cover;

                @media screen and (min-width: ${props => props.theme.breakpoints["sm-screen"]}){
                    width: 42px;
                    height: 42px;
                }

                @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                    width: 20px;
                    height: 20px;
                }
            }

            p {
                font-weight: 700;
                font-size: 1.3rem;
                margin-left: 8px;

                @media screen and (min-width: ${props => props.theme.breakpoints["sm-screen"]}){
                    font-size: 1.5rem;
                }

                @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                    font-size: 1.3rem;
                }
            }

            & + .button {
                margin-top: 16px;
            }

        }
    }
`