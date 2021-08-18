import { Container } from './styles'
import { Card } from 'components/Card'

export const Cardapios = ({cardapios}) => {
    return (
        <Container>
            {cardapios.map(({title, image, link}, i) => (

            <Card 
                title={title}
                image={image}
                key={i}
                link={link}
                btnText="Ver Cardápio"
            />
            ))}
        </Container>
    )
}