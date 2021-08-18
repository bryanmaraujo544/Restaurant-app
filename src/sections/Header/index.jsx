import { NavBar } from "components/NavBar"
import { Banner } from 'components/Banner'
import { Container } from './styles'


export const Header = () => {
    return (
        <Container id="home">
            <NavBar home/>
            <Banner 
                title="O carinho é o nosso ingrediente especial"
                description="Nossas delícias são feitas com toda dedicação e um cuidado artesanal que transformarão seu conceito culinário"
                uptitle="padaria e restaurante"
                firstBtnText="Ver unidades"
                secondBtnText="Sobre"
                home
                images={[]}
            />
        </Container>
    )
}