import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    .phone {
        display: none;

        @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
            display: inline-block;       
        }
    }
    .social-medias{
        display: flex;

        @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
            display: flex;
            flex-direction: column;

            &.open {
                display: flex;
                position: absolute;
                right: -8px;
                top: 32px;
                z-index: 7;
                background: #fff;
                border-radius: 9999px;
                padding: 8px;
            }
        }


        
    }
    
    .social{
        & + .social {
            margin-left: 8px;

            @media screen and (max-width: ${props => props.theme.breakpoints.tablet}){
                margin-top: 4px;
                margin-left: 0;
            }
        }
        a{
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid ${props => props.theme.colors.primary};
            padding: 6px;
            border-radius: 50%;
            color: ${props => props.theme.colors.primary};
            filter: drop-shadow(0 1px 4px rgba(255, 0, 32, .15));
            
            @media screen and (max-width: ${props => props.theme.breakpoints["mobile"]}){
                font-size: 14px;
                padding: 5px;
            }

            @media screen and (max-width: ${props => props.theme.breakpoints.tablet}){
                display: none;

                &.open {
                    display: flex;
                }
            }
        }

 

        
    }
`