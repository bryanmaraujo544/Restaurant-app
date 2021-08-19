import { Container } from './styles'
import { Title } from 'components/Title'
import { unitiesData } from './unitiesData'
import { Card } from 'components/Card'
import { useEffect, useRef, useLayoutEffect } from 'react'
import { useAnimation, useMotionValue, motion } from 'framer-motion'

export const Unities = () => {
    const controls = useAnimation()
    const unitiesRef = useRef(null)
    useEffect(() => {
        const sectionTop = unitiesRef.current.offsetTop;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > sectionTop - window.innerHeight / 2) {
                controls.start({y: 0, opacity: 1, transition: {duration: 0.3}})
            } else {
                controls.start({y: 200, opacity: 0, transition: {duration: 0.3}})
            } 
        })
    }, [])
    return (
        <Container id="unities" ref={unitiesRef}>

            <Title title="Nossas Unidades"/>
            <motion.div animate={controls} className="cards">
                {unitiesData.map((unity, i) => (
                    <Card 
                        title={unity.title}
                        endereco={unity.endereco}
                        image={unity.image}
                        home
                        key={i}
                        link={unity.path}
                        btnText="Ver serviços"
                        second
                    />
                ))}
            </motion.div>
        </Container>
    )
}