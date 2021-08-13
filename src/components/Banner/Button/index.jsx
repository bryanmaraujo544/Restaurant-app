import { Container } from './styles'
import Link from 'next/link'

export const Button = ({
    second,
    text
}) => {
    return (
        <Container>
            <Link href="/">
                <a className={`button ${second ? 'second' : ''}`}>
                    {text}
                </a>
            </Link>
        </Container>
    )
}
