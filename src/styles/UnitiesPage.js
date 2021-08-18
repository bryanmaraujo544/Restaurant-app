import styled from 'styled-components'

export const Container = styled.main`
    height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    align-items: center;

    .localizacao {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 96px;
        .title {
            font-size: 3.6rem;
            margin-bottom: 64px;
            position: relative;

            @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
                margin-bottom: 3.2rem;
                font-size: 3.2rem;
            }

            @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                margin-bottom: 2.4rem;
            }

            &:after {
                content: '';
                position: absolute;
                height: 5px;
                width: 50%;
                background: ${props => props.theme.colors.primary};
                bottom: -4px;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 9999px;
            }
            
        }
        .content {
            position: relative;
            width: 100%;
            display: flex;
        
            align-items: flex-start;
            
            flex-wrap: wrap;
            .text {
                padding: 48px;
                flex-basis: 45%;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;
                position: relative;

                @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
                    flex-basis: 100%;
                    height: auto;
                }

                .text-title {
                    font-size: 3.2rem;
                    color: ${props => props.theme.colors.primary};
                }

                .endereco {
                    font-size: 2.4rem;

                    @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                        font-size: 2.0rem;
                    }
                }
                
                .map-image {
                /* position: absolute;
                left: 50%;
                transform: translateX(-50%); */
                width: 200px;
                position: absolute;
                bottom: 0;

                @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
                    display: none;
                }
            }
            
            }
            .map {
                flex-basis: 55%;
                
                @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
                    flex-basis: 100%;
                }
                iframe {
                    width: 100%;
                    border-radius: 32px;
                }
            }


        }
    }

    
`