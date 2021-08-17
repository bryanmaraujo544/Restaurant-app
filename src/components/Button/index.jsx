import { Container } from './styles'
import LinkN from 'next/link'
import { Link } from 'react-scroll'

export const Button = ({
    second,
    text, 
    small,
    link,
    external
}) => {
    return (
        <Container>
            {external ? 
                <LinkN href={link}>
                    <a className={`button ${second ? 'second' : ''} ${small ? 'small' : ''}`}>
                        {text}
                    </a>
                </LinkN>
            :
                <Link to={link} smooth={true}>
                    <a className={`button ${second ? 'second' : ''} ${small ? 'small' : ''}`}>
                        {text}
                    </a>      
                </Link>


            }
        </Container>
    )
}
