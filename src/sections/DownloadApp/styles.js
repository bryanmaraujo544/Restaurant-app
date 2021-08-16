import styled from 'styled-components'

export const Container = styled.section`
    
    margin-top: 19.6rem;
    height: 400px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.backgroundDarker};
    border-radius: 48px;

    @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
        height: auto;
        text-align: center;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}){
        margin-top: 12.8rem;
    }

    .content {
        flex-basis: 60%;
        padding: 48px;

        @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-basis: 100%;
        }

        @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
            padding: 32px;

        }

        .title {
            font-size: 3.6rem;
            line-height: 1.35;

            @media screen and (max-width: ${props => props.theme.breakpoints["l-screen"]}){
               font-size: 3.2rem;
            }

            @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
               font-size: 2.4rem;
            }

        }

        .subtitle {
            margin-top: 8px;
            font-size: 1.4rem;
            width: 75%;
            color: ${props => props.theme.colors["second-text"]};
        }

        .buttons {
            margin-top: 32px;
            display: flex;

            .apple, .play {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                padding: 6px 32px;
                border-radius: 9999px;

                @media screen and (max-width: ${props => props.theme.breakpoints.tablet}){
                    padding: 6px 18px;
                }

                @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                    font-size: 1.0rem;
                    padding: 4px 14px;
                }

            }

            .apple {
                background: ${props => props.theme.colors.primary};
                color: ${props => props.theme.colors.background};
                margin-right: 16px;
                box-shadow: 0 3px 12px ${props => props.theme.colors['sm-shade']};

                .apple-icon {
                    font-size: 32px;
                    margin-right: 8px;

                    @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                        font-size: 2.4rem;
                    }
                }
            }

            .play {
                background: ${props => props.theme.colors.background};
                color: ${props => props.theme.colors.text};
                border: 3px solid ${props => props.theme.colors.primary};
                
                .play-icon {
                    font-size: 24px;
                    margin-right: 8px;

                    @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                        font-size: 2.0rem;
                    }
                }
            }

        }
    }

    .image {
        flex-basis: 40%;
        position: relative;
        width: 100%;
        height: 100%;
        margin-top: -17.2rem;

        @media screen and (max-width: ${props => props.theme.breakpoints["sm-screen"]}){
            margin-top: -6.4rem;
            display: none;
        }
    }

`