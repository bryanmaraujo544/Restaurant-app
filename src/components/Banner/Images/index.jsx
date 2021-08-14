import { useCallback, useState } from 'react'
import {motion} from 'framer-motion'
import { Container } from './styles'
import Image from 'next/image'

const buttonsData = [
    {
        text: 'Lanches',
        image: '/Lanches.jpg',
    },
    {
        text: 'Pizzas',
        image: '/Pizza.jpg',
    },
    {
        text: 'Pratos',
        image: '/Pratos.jpg',
    },
    {
        text: 'Sobremesas',
        image: '/Sobremesas.jpg',
    },
    {
        text: 'Vinhos',
        image: '/Vinho.jpg',
    },
]

export const Images = () => {
    const [active, setActive] = useState({src: '/Lanches.jpg', alt: 'Lanches'})

    const handleImage = useCallback((src, alt) => {
        alt !== active.alt && setActive({src: src, alt: alt})
        
    }, [active])

    return (
        <Container>
            <motion.div initial={{x: -100}} animate={{x: 0}} exit={{x:-100}} className="image">
                <Image 
                    src={active.src}
                    width={300}
                    height={300}
                    objectFit="cover"
                    alt={active.text}
                    className="image-big"
                />
            </motion.div>
            <div className="buttons">
                {buttonsData.map((button, i) => (
                    <motion.div 
                        className={`button ${button.text === active.alt ? 'active' : ''}`}
                        key={i} 
                        onClick={() => handleImage(button.image, button.text)}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}

                    >
                        <Image 
                            src={button.image}
                            width={32}
                            height={32}
                            objectFit="cover"
                        />
                        <p>{button.text}</p>
                    </motion.div>
                ))}
            </div>

        </Container>
    )
}