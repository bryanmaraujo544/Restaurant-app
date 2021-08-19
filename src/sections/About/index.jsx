import { Container } from './styles'
import Image from 'next/image'
import { useAnimation, motion } from "framer-motion"
import { useRef, useEffect } from "react"

export const About = () => {
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
        <Container id="about" as={motion.section} animate={controls} ref={ref}>
            <div className="text">
                <h4 className="title">
                    Conheça um pouco da nossa história
                </h4>
                <p className="content">
                    Tudo começou em <b>1964</b>, quando o imigrante português <b>Albino de Oliveira Nunes</b> saiu do vilarejo chamado Vale da Pedra, situado a 40Km da cidade de Coimbra/PT, tendo como destino as incertezas que o Brasil reservava. Já no Brasil, como um autêntico português, iniciou sua jornada no ramo de panificação e tendo o talento no sangue, logo tornou-se um forte nome, estabelecendo um novo padrão de qualidade gastronômico para Alphaville e região. <br/><br/>
                    Em 2009, a <b>AN Holding</b> (Grupo de Empresas do Sr. Albino Nunes) inaugura a primeira unidade da <b>Quinta do Marquês</b> em São Roque - SP <br/><br/>
                    Hoje somos uma enorme família com cinco unidades em pleno funcionamento. <br/> <br/>
                    E agoara, você está aqui! Saboreando o melhor da gastronomia portuguesa, em um restaurante que preza pela extrema qualidade em tudo que faz. <br/><br/>
                    <span>Seja sempre muito bem-vindo à nossa casa, ora pois!</span> 
                </p>
            </div>
            <div className="image">
                <Image 
                    src="/Paulista.png"
                    alt="Quem somos"
                    objectFit="cover"
                    layout="fill"
                    className="img"
                />
            </div>
        </Container>
    )
}