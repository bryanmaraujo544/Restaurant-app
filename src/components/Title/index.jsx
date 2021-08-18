import { Container } from './styles'

export const Title = ({ title, center }) => {
    return (
        <Container className={`${center ? 'center' : ''}`}>
            {title}
        </Container>

    )
} 