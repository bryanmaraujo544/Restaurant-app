import { NavBar } from "components/NavBar"
import { Banner } from 'components/Banner'
import { Container } from './styles'
export const Header = () => {
    return (
        <Container id="home">
            <NavBar />
            <Banner />
        </Container>
    )
}