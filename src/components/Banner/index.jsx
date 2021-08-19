import { useCallback, useState } from 'react'
import { Container } from './styles'
import { Titles } from './Titles'
import { Images } from './Images'
import { Grain } from 'components/Grain'
import Image from 'next/image'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { fadeInUp } from 'animations/fadeInUp'

 
export const Banner = ({
    title, 
    description, 
    uptitle, 
    home,
    firstBtnText,
    secondBtnText,
    unityName,
    images
}) => {
    const [current, setCurrent] = useState(0)
    const handleNext = useCallback(() => {
        if(current < images.length - 1){
            setCurrent((prevState) => prevState + 1)
        } else if (current === images.length - 1){
            setCurrent(0)
        }
    }, [current, images.length])

    const handlePrevious = useCallback(() => {
        if (current > 0){
            setCurrent((prevState) => prevState - 1)
        } else if (current === 0) {
            setCurrent(images.length - 1)
        }
    }, [current, images.length])

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
                <motion.div variants={fadeInUp} animate="animate" initial="initial" exit="exit" custom={1} className="images">
                    <Images />
                </motion.div>
            }
            {!home && 
                <motion.div  variants={fadeInUp} animate="animate" initial="initial" exit="exit" custom={1}className="slider">
                    <div className="image">
                        <Image 
                                src={images[current]}
                                height={724}
                                width={1280}
                                objectFit="cover"
                                className="img"
                                alt="Image Divulgacional"
                        />
                        <div className="buttons">
                            <button
                                className="slider-button"
                                onClick={() => handlePrevious()}
                            >
                                <BiChevronLeft size="24px"/>
                            </button>

                            <button
                                className="slider-button"
                                onClick={() => handleNext()}
                            >
                                <BiChevronRight size="24px"/>

                            </button>
                        </div>
                    </div>
                </motion.div>


            
            }
        </Container>
    )
}