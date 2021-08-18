import { Container } from './styles'
import { Title } from 'components/Title'
import { servicesData } from './data'
import { useCallback, useState } from 'react'
import Image from 'next/image'

export const ServicesOffer = () => {
    const [whatIsActive, setWhatIsActive] = useState(servicesData[0]) 
    console.log(whatIsActive)

    const handleActive = useCallback((title) => {
        // Catch the object of the services data that the title is equal to the title of the button wich was clicked
        const [active] = servicesData.filter((item) => item.title === title)
        setWhatIsActive(active)
    }, [whatIsActive, servicesData])
    return (
        <Container>
            <Title 
                title="Serviços oferecidos"
                center
            />
            <div className="buttons">
                {servicesData.map(({title}, i) => (
                    <button 
                        className={`button ${title === whatIsActive.title ? 'active' : ''}`}
                        onClick={() => handleActive(title)}
                        key={i}
                    >
                        {title}
                    </button>
                ))}
            </div>
            <div className="box">
                <div className="text">
                    {whatIsActive.content.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}
                </div>
                <div className="images">
                    {whatIsActive.images.map((image, i) => (
                        <Image 
                            src={image}
                            width={400}
                            height={400}
                            objectFit="contain"
                            alt="Services Image"
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}