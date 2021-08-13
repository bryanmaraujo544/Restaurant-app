import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .buttons{
        display: flex;
    }

    .uptitle{
        text-decoration: uppercase;
        color: ${props => props.theme.colors['second-text']};
        font-size: 1.7rem;
    }

    h1{
        font-size: 5.2rem;
        line-height: 1.25;
    }

    h2{
        font-size: 1.7rem;
        font-weight: 400;
        color: ${props => props.theme.colors['second-text']};
        max-width: 80%;
        font-weight: 400;
    }
`