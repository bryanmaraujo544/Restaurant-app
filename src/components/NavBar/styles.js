import styled from 'styled-components';

export const Container = styled.div`
    background: none;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 128px;

    @media screen and (max-width: ${props => props.theme.breakpoints["l-screen"]}){
        padding: 32px 64px;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
        padding: 32px;
    }

    .socialMedias{
        display: flex;

        div {
            width: 16px;
        }
    }
`;
