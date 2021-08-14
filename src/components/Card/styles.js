import styled from 'styled-components'

export const Container = styled.div`
    flex-grow: 1;
    flex-basis: 30%;
    min-width: 375px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



    .image{
        width: 100%;
        
        img{    
           
            object-fit: cover;
            width: 100% !important;
            height: 100%;
            border-radius: 32px;
        }
    }
    
    .infos{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: white;
        border-radius: 24px;
        padding: 20px;
        margin-top: -32px;
        z-index: 3;
        width: 80%;
        box-shadow: 0 3px 12px rgba(0,0,0,0.05);
        .title {
            font-weight: 700;
            font-size: 2.2rem;
        }

        .endereco {
            margin-bottom: 8px;
            font-size: 1.2rem;
            color: ${props => props.theme.colors['second-text']};
        }
    } 
    
`