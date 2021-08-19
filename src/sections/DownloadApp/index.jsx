import { Container } from "./styles"
import Link from 'next/link'
import Image from 'next/image'
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { useAnimation, motion } from "framer-motion"
import { useRef, useEffect } from "react"


export const DownloadApp = () => {
    const controls = useAnimation()
    const ref = useRef(null)
   
    useEffect(() => {
        const sectionTop = ref.current.offsetTop;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > sectionTop - window.innerHeight / 2) {
                controls.start({y: 0, opacity: 1, transition: {duration: 0.3}})
            } else {
                controls.start({y: 200, opacity: 0, transition: {duration: 0.3}})
            } 
        })
    }, [])
    return (
        <Container as={motion.section} animate={controls} ref={ref}>
            <div className="content">
                <h4 className="title">
                    Faça o download agora do nosso aplicativo e aproveite nossas delícias
                </h4>
                <p className="subtitle">
                    Encontre nossos cardápios com as mais diferentes especialidades da casa no nosso app. Baixe já!
                </p>
                <div className="buttons">
                    <Link href="https://apps.apple.com/br/app/a-quinta-do-marqu%C3%AAs/id1528384999?l=en">
                        <a  className="apple">
                            <FaApple className="apple-icon"/>
                            <div className="text">
                                <p>Baixe agora na</p>
                                <strong>Apple Store</strong>
                            </div>

                        </a>
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.epadoca.quinta.marques">
                        <a  className="play">
                            <FaGooglePlay className="play-icon"/>
                            <div className="text">
                                <p>Baixe agora na</p>
                                <strong>Play Store</strong>
                            </div>
                        </a>
                    </Link>
                    
                </div>
            </div>

            <div className="image">
                <Image 
                    src="/App.png"
                    objectFit="contain"
                    width={500}
                    height={480}
                    className="img"
                />
            </div>
        </Container>
    )
}