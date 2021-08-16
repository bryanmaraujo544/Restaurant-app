import { Container } from './styles'
import { Link } from 'react-scroll'

export const Button = ({
    second,
    text, 
    small,
    link
}) => {
    return (
        <Container>
            <Link to={link} smooth={true}>
                <a className={`button ${second ? 'second' : ''} ${small ? 'small' : ''}`}>
                    {text}
                </a>
            </Link>
        </Container>
    )
}
