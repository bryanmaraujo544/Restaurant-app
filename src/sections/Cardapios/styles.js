import styled from 'styled-components'

export const Container = styled.section`
    margin: 7.2rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
        margin: 6.4rem 0;
    }
    
    .cardapios {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 24px;
        width: 100%;
        
    }
`