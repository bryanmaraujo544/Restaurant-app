import { Container } from './styles'
import { Card } from 'components/Card'
import { Title } from 'components/Title'

export const Cardapios = ({cardapios}) => {
    return (
        <Container>
            <Title title="Cardápios"/>
            <div className="cardapios">
                {cardapios.map(({title, image, link}, i) => (

                <Card 
                    title={title}
                    image={image}
                    key={i}
                    link={link}
                    btnText="Ver Cardápio"
                />
                ))}

            </div>
        </Container>
    )
}