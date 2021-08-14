import { Container } from './styles'
import { Button } from '../../Button'


export const Titles = ({
    home,
    title,
    description,
    uptitle
}) => {
    return (
        <Container>
            { home && <p className="uptitle">{uptitle}</p> }
            <h1>{title}</h1>
            <h2>{description}</h2>
            <div className="buttons">
                <Button text="Ver unidades" link="/"/>
                <Button second text="Sobre" link="/" />
            </div>
            
        </Container>
    )
}