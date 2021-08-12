import { Link } from "react-scroll"
import Image from "next/image"
import styled from 'styled-components'

const Container = styled.div`
    width: 135px;

    @media screen and (max-width: ${props => props.theme.breakpoints["tablet"]}){
        width: 125px;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints["mobile"]}){
        width: 100px;
    }
`

export const Logo = () => {
    return (
        <Container>
        <Link to="/" duration={500}>
            <Image src="/logo.png" width={658} height={379} objectFit="contain"/>
        </Link>
        </Container>
    )
}