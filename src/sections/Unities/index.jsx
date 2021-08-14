import { Container } from './styles'
import { Title } from 'components/Title'
import { unitiesData } from './unitiesData'
import { Card } from 'components/Card'

export const Unities = () => {
    return (
        <Container>

            <Title title="Nossas Unidades"/>
            <div className="cards">
                {unitiesData.map((unity, i) => (
                    <Card 
                        title={unity.title}
                        endereco={unity.endereco}
                        image={unity.image}
                        home
                        key={i}
                        link="/"
                    />
                ))}
            </div>
        </Container>
    )
}