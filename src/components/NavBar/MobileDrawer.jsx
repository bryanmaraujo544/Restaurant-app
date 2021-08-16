import { IoClose, IoTerminalSharp, IoTimeSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import styled from 'styled-components'
import { ListNav } from "components/ListNav";
import { motion } from 'framer-motion'
import { SocialMedias } from 'components/SocialMedias'

const Container = styled.span`
    display: none;
    z-index: 111;
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}){
        display: block;
    }
    .open{
        cursor: pointer;
    }
    .mobile-menu{
        position: relative;
        background: #ffff !important;
        padding: 128px 48px;
        width: 80vw;
        height: 100vh;
        position: fixed;
        flex-direction: column;
        align-items: space-between;
        left: 0;
        top: 0;
        bottom: 0;

        .close{
            position: absolute;
            top: 32px;
            right: 32px;
            cursor: pointer;
        }

        .social-medias{
            position: absolute;
            bottom: 32px;
        }


    }
`

export const MobileDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Container>
            {!isOpen && (
                <div className="open">
                    <IoMdMenu size="26px" onClick={() => setIsOpen((prevState) => !prevState)}/>    
                </div>
            )
            }
            {isOpen && (
                <motion.div initial={{x: '-100'}} animate={{x: 0}} exit={{x: -100, opacity: 0}} className="mobile-menu">
                    <div className="close" onClick={() => setIsOpen((prevState) => !prevState)}>
                        <IoClose size="24px" />
                    </div>
                    <ListNav isMobile/>
                    <SocialMedias/>
                </motion.div>
            )}
        </Container>
    )
}


