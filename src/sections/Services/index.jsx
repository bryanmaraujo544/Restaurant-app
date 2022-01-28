import { Container } from './styles'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"

const boxesData = [
    {
        text: "Pedidos delivery",
        icon: "/Pedidos.png"
    },
    {
        text: "Ingredientes frescos",
        icon: "/Ingredientes.png"
    },
    {
        text: "Self-service",
        icon: "/Self.png"
    },
    {
        text: "Entrega veloz",
        icon: "/Entrega.png"
    },
    {
        text: "Super chefes",
        icon: "/Super.png"
    },
    {
        text: "Atendimento eficaz",
        icon: "/Atendimento.png"
    }
]

export const Services = () => {
    const controls = useAnimation()
    const ref = useRef(null)
   
    useEffect(() => {
        const sectionTop = ref.current.offsetTop;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > sectionTop - window.innerHeight / 1.2) {
                controls.start({y: 0, opacity: 1, transition: {duration: 0.15}})
            } else {
                controls.start({y: 120, opacity: 0, transition: {duration: 0.15}})
            } 
        })
    }, [])
    return (
        <Container>
            <motion.div ref={ref} animate={controls} className="image">
                <Image 
                    src="/Chef.png"
                    width={528}
                    height={578}
                    alt="Chef A quinta"
                />
            </motion.div>
            <motion.div animate={controls} className="services">
                <h3 className="title">
                    Temos desde um pãozinho a uma panela la creuset
                </h3>
                <p className="description">
                    Realizamos serviçõs além de uma padaria comum. Temos pratos montados com todo o carinho possível. Temos pizzas deliciosas, lanches que te dão água na boca, além de sobremesas maravilhosas.
                </p>
                <div className="boxes">
                    {boxesData.map((box, i) => (
                        <div className="box" key={i}>
                            <div className="icon">
                                <Image 
                                    src={box.icon}
                                    width={32}
                                    height={32}
                                    objectFit="contain"
                                    alt={box.text}
                                />
                            </div>
                            <p className="box-text">{box.text}</p>
                        </div>
                    ))}
                </div>

            </motion.div>

        </Container>
    )
}