import styled from 'styled-components'

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;

    @media screen and (max-width: 966px){
        grid-template-columns: 1fr;
    }
    
    .content{
        display: flex;
        align-items: center;
        
        height: 100%;
        padding: 0px;
        grid-column: 1 / 2;
    }

    .images{
        grid-column: 2 / 3;

        @media screen and (max-width: 966px){
            grid-column: 1 / 2;
        }
    }
`