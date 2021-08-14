import styled from 'styled-components'

export const Container = styled.div`
    .social-medias{
        display: flex;
        
    }
    
    .social{
        & + .social {
            margin-left: 8px;

            @media screen and (max-width: ${props => props.theme.breakpoints["mobile"]}){
                margin-left: 4px;
            }
        }
        a{
            @media screen and (max-width: ${props => props.theme.breakpoints["mobile"]}){
                font-size: 14px;
                padding: 5px;
            }
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid ${props => props.theme.colors.primary};
            padding: 6px;
            border-radius: 50%;
            color: ${props => props.theme.colors.primary};
            filter: drop-shadow(0 1px 4px rgba(255, 0, 32, .15));
        }
    }
`