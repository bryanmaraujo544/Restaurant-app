import { Container } from './styles'
import { Card } from 'components/Card'
import { Title } from 'components/Title'
import { useAnimation, motion } from "framer-motion"
import { useRef, useEffect } from "react"

export const Cardapios = ({cardapios}) => {
    const controls = useAnimation()
    const ref = useRef(null)
   
    useEffect(() => {
        const sectionTop = ref.current.offsetTop;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > sectionTop - window.innerHeight / 2) {
                controls.start({y: 0, opacity: 1, transition: {duration: 0.4, type: "tween"}})
            } else {
                controls.start({y: 200, opacity: 0, transition: {duration: 0.4, type: "tween"}})
            } 
        })
    }, [])
    return (
        <Container as={motion.section} animate={controls} ref={ref}>
            <Title title="Cardápios"/>
            <div className="cardapios" id="unities">
                {cardapios.map(({title, image, link}, i) => (

                <Card 
                    title={title}
                    image={image}
                    key={i}
                    link={link}
                    btnText="Ver Cardápio"
                />
                ))}

            </div>
        </Container>
    )
}