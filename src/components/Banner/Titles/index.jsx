import { Container } from './styles'
import { Button } from '../../Button'


export const Titles = ({
    home,
    title,
    unityName,
    description,
    uptitle,
    firstBtnText,
    secondBtnText
}) => {
    return (
        <Container>
            <p className="uptitle">{uptitle}</p>
            <h1>{title}</h1>
            {!home && 
                <span>{unityName}</span>
            }
            <h2>{description}</h2>
            <div className="buttons">
                <Button text={firstBtnText} link="unities"/>
                <Button second text={secondBtnText} link="about" />
            </div>
            
        </Container>
    )
}