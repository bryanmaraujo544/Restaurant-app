import styled from 'styled-components'

export const Container = styled.section`
    margin: 7.2rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin-top: 104px;
        margin-bottom: 0;
    }
    
    .cardapios {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: -16px;
        gap: 24px;
        width: 100%; 

        @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
            margin-top: -32px;
        }
    }
`