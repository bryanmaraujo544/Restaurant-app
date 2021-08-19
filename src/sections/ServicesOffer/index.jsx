import { Container } from './styles'
import { Title } from 'components/Title'
import { servicesData } from './data'
import { useCallback, useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useAnimation, motion } from "framer-motion"


export const ServicesOffer = () => {
    const [whatIsActive, setWhatIsActive] = useState(servicesData[0]) 
    console.log(whatIsActive)

    const handleActive = useCallback((title) => {
        // Catch the object of the services data that the title is equal to the title of the button wich was clicked
        const [active] = servicesData.filter((item) => item.title === title)
        setWhatIsActive(active)
    }, [whatIsActive, servicesData])

    // Scroll Animation
    const controls = useAnimation()
    const ref = useRef(null)
    useEffect(() => {
        const sectionTop = ref.current.offsetTop;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > sectionTop - window.innerHeight / 2) {
                controls.start({y: 0, opacity: 1, duration: 0.5, transition: {duration: 0.15}})
            } else {
                controls.start({y: 120, opacity: 0, transition: {duration: 0.15}})
            } 
        })
    }, [])
    return (
        <Container as={motion.section}  ref={ref} animate={controls}>
            <Title 
                title="Serviços oferecidos"
                center
            />
            <div className="buttons">
                {servicesData.map(({title}, i) => (
                    <motion.button 
                        className={`button ${title === whatIsActive.title ? 'active' : ''}`}
                        onClick={() => handleActive(title)}
                        key={i}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        {title}
                    </motion.button>
                ))}
            </div>
            <div className="box">
                <div className="text">
                    <h5>{whatIsActive.title}</h5>
                    {whatIsActive.content.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}
                </div>
                <motion.div 
                    className="images"
                    
                >
                    {whatIsActive.images.map((image, i) => (
                        <Image 
                            src={image}
                            width={400}
                            height={225}
                            objectFit="cover"
                            alt="Services Image"
                            key={i}
                        />
                    ))}
                </motion.div>
            </div>
        </Container>
    )
}