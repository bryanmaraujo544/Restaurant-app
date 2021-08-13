import { NavBar } from "components/NavBar"
import { Banner } from 'components/Banner'
import { Container } from './styles'
export const Header = () => {
    return (
        <Container>
            <NavBar />
            <Banner />
        </Container>
    )
}