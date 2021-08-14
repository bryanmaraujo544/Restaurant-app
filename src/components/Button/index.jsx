import { Container } from './styles'
import Link from 'next/link'

export const Button = ({
    second,
    text, 
    small,
    link
}) => {
    return (
        <Container>
            <Link href={link}>
                <a className={`button ${second ? 'second' : ''} ${small ? 'small' : ''}`}>
                    {text}
                </a>
            </Link>
        </Container>
    )
}
