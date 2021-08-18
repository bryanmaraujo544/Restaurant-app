import styled from 'styled-components'

export const Container = styled.ul`
    display: flex;

    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}){
        display: none;
    }

    li {
        & + li {
            margin-left: 32px;
        }

        a {
    
            font-size: 1.8rem;
            font-weight: 700;
            color: ${props => props.theme.colors.text};
            cursor: pointer;
            transition: .1s;
    
            &:hover{
                color: ${props => props.theme.colors.primary};
    
            }

        }
    }
`

export const ContainerMobile = styled(Container)`
    flex-direction: column;

    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}){
        display: flex;
    }
    li {
        border-bottom: 1px solid #ddd;
        padding-bottom: 4px;
        & + li {
            margin-top: 24px;
            margin-left: 0;
        }
    }
`