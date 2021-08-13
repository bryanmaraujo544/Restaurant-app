import { Container } from './styles'
import Link from 'next/link'
import { Titles } from './Titles'


export const Banner = ({title, description, uptitle, home}) => {
    return (
        <Container>
            <div className="content">
                <Titles
                    home
                    title="O carinho é o nosso ingrediente especial"
                    description="Nossas delícias são feitas com toda dedicação e um cuidado artesanal que transformarão seu conceito culinário"
                    uptitle="padaria e restaurante"
                />
            </div>
        </Container>
    )
}