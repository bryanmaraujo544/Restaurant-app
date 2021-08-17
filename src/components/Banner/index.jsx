import { Container } from './styles'
import Link from 'next/link'
import { Titles } from './Titles'
import { Images } from './Images'
import { Grain } from 'components/Grain'
 
export const Banner = ({
    title, 
    description, 
    uptitle, 
    home,
    firstBtnText,
    secondBtnText,
    firtsBtnLink,
    secondBtnLink,
    unityName
}) => {
    return (
        <Container>
            <Grain/>
            <div className="content">
                <Titles
                    home={home}
                    title={title}
                    unityName={unityName}
                    description={description}
                    uptitle={uptitle}
                    firstBtnText={firstBtnText}
                    secondBtnText={secondBtnText}
                />
            </div>
            {home && 
                <div className="images">
                    <Images />
                </div>
            }
        </Container>
    )
}