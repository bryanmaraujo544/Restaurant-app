import styled from 'styled-components'

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: calc(100vh - 90px);
    position: relative;
    z-index: 4;

    

    @media screen and (max-width: 966px){
        grid-template-columns: 1fr;
        margin-top: 0px;
        height: auto;

    }

    @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
        margin-top: 32px;
    }

    .grain{
        position: absolute;
        left: 0;
        top: 8px;
        display: flex;

        @media screen and (min-width: ${props => props.theme.breakpoints["l-screen"]}){
            top: 48px;
        }

        @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
            display: none;
        }

        svg{
            height: 48px;
            width: 48px;

            @media screen and (min-width: ${props => props.theme.breakpoints["l-screen"]}){
                height: 86px;
                width: 86px;
            }
        }
    }
    
    .content{
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px;
        grid-column: 1 / 2;
        
        @media screen and (max-width: 966px){
            justify-content: center;
           
        }
    }

    .images{
        grid-column: 2 / 3;

        @media screen and (max-width: 966px){
            grid-column: 1 / 2;
            
        }
    }

    .slider {
        grid-column: 2 / 3;
        
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 966px){
            grid-column: 1 / 3;
            margin-top: 64px;
        }
        
        .image {
            max-width: 1020px;
            position: relative;
            border-radius: 32px;
            .img {
                border-radius: 48px;
                width: 720px;
                height: auto
            }

            
            .buttons {
                display: flex;
                justify-content: space-between;
                width: 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
    
                .slider-button {
                    cursor: pointer;
                    background: ${props => props.theme.colors.primary};
                    color: white;
                    border-radius: 50%;
                    width: 42px;
                    height: 42px;
                    box-shadow: 0 3px 12px ${props => props.theme.colors.shade};

                    @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                        width: 32px;
                        height: 32px;
                    }

                    &:hover {
                        color: 0 3px 12px ${props => props.theme.colors.shade};

                    }
    
                    &:nth-child(1){
                        margin-left: -21px;

                        @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                            margin-left: -16px;
                        }
                    }
                    &:nth-child(2){
                        margin-right: -21px;

                        @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                            margin-right: -16px;
                        }
                    }
                }
            }
        }
    }
`