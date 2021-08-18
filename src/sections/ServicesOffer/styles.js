import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 172px;

    .buttons {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        .button {
            border: 3px solid ${props => props.theme.colors.primary};
            font-size: 1.4rem;
            padding: 6px 32px;
            font-weight: 700;
            border-radius: 9999px;
            cursor: pointer;
            &.active {
                background: ${props => props.theme.colors.primary};
                color: #fff;
            }
        }
    }

`