import { Container } from './styles'
import { Button } from '../../Button'
import { motion } from 'framer-motion'
import { fadeInUp } from 'animations/fadeInUp'


export const Titles = ({
    home,
    title,
    unityName,
    description,
    uptitle,
    firstBtnText,
    secondBtnText
}) => {
    return (
        <Container>
            <motion.p variants={fadeInUp} animate="animate" initial="initial" exit="exit" custom={1} className="uptitle">{uptitle}</motion.p>
            <motion.h1 variants={fadeInUp} animate="animate" initial="initial" exit="exit" custom={1.5}>{title}             {!home && 
                <span>{unityName}</span>
            }</motion.h1>

            <motion.h2 variants={fadeInUp} animate="animate" initial="initial" exit="exit" custom={1.75}>{description}</motion.h2>
            <motion.div variants={fadeInUp} animate="animate" initial="initial" exit="exit" custom={2} className="buttons">
                <Button text={firstBtnText} link="unities"/>
                <Button second text={secondBtnText} link="about" />
            </motion.div>
            
        </Container>
    )
}