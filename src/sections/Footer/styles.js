import styled from 'styled-components'

export const Container = styled.footer`
    border-top: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    margin-top: 128px;
    padding: 48px 96px;
    width: 100%;

    @media screen and (max-width: 1366px){
        padding: 48px 64px;
    }

    @media screen and (max-width: 768px){
        padding: 48px 32px;
    }

    @media screen and (max-width: 480px){
        padding: 32px 24px;
    }

    .content {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;

        @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
            flex-direction: column;
            
        }

        .content-col {
            max-width: 250px;

            @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                margin-top: 24px;
            }
            .title {
                font-size: 2.0rem;
                font-weight: bold;
                margin-bottom: 12px;

                @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
                    margin-bottom: 8px;

                }

            }

            .text, li {
                font-size: 1.4rem;
                margin-top: 8px;
                cursor: pointer;
                font-weight: 700;
                color: #6C757D;
            }

            .content-list {
                li {
                    a{
                        color: #6C757D;;

                        &:hover {
                            color: ${props => props.theme.colors.primary};
                        }
                    }
                }
            }

            .social {
                .social-texts {
                    margin-top: 32px;

                    p.text {
                        font-size: 1.6rem;
                        word-break: break-word;
                    }
                }
            }

        }
    }

    .copright {
        background: ${props => props.theme.colors.primary};
        color: white;
        padding: 20px;
        border-radius: 9999px;
        margin-top: 48px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
            font-size: 1.6rem;
            font-weight: 700;
        }

        .subtitle {
            font-size: 1.4rem;
            font-weight: 700;
        }
    }
`