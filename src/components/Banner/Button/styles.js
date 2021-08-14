import styled from 'styled-components'

export const Container= styled.span`
    .button{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 48px;
        border-radius: 9999px;
        background: ${props => props.theme.colors.primary};
        text-transform: uppercase;
        color: #fff;
        font-size: 1.4rem;
        font-weight: 700;
        box-shadow: 0px 3px 12px ${props => props.theme.colors["sm-shade"]};
        border: 3px solid ${props => props.theme.colors.primary};
        transition: .25s ease;

        @media screen and (max-width: ${props => props.theme.breakpoints["mobile"]}){
            padding: 10px 36px;
        }

        &:hover{
            background: ${props => props.theme.colors.shade};
            border: 3px solid ${props => props.theme.colors.shade};
            transition: .25s ease;
        }

        &.second{
            background: none;
            border: 3px solid ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
            margin-left: 16px;
            box-shadow: none;
            
            &:hover{
                border: 3px solid ${props => props.theme.colors.shade};
                color: ${props => props.theme.colors.shade};
            }
        }
    }
`