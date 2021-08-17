import { useState } from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { SiIfood } from 'react-icons/si'
import Link from 'next/link'
import { Container } from './styles'
import { AiTwotonePhone } from 'react-icons/ai'
import { motion } from 'framer-motion'

const social = [
    {
        icon: <FaInstagram/>,
        href: "https://www.instagram.com/aquintadomarques_oficial/"
    },
    // {
    //     icon: <FaFacebookF/>,
    //     href: "https://www.instagram.com/aquintadomarques_oficial/"
    // },
    {
        icon: <SiIfood/>,
        href: "https://www.instagram.com/aquintadomarques_oficial/"
    },
    {
        icon: <FaWhatsapp/>,
        href: "https://www.instagram.com/aquintadomarques_oficial/"
    },
  ]

export const SocialMedias= ({isNavBar}) => {
    const [isPhoneOpen, setIsPhoneOpen] = useState(false)
    return (
        <Container> 
            { isNavBar && 
                <AiTwotonePhone 
                    className="phone"
                    size={26}
                    onClick={() => setIsPhoneOpen((prevState) => !prevState)}
                />
            }
            <motion.div 
                className={`social-medias`}
                initial={{y: 0}}
                animate={{y:0}}
                duration={500}
            >
                {social.map((item, i) => (
                    <div className={`social  `} key={i} >
                        <Link href={item.href}>
                            <a className={`${isNavBar ? 'close' : ''}`}>
                                {item.icon}
                            </a>
                        </Link>
                    </div>
                ))}
            </motion.div>

            {isNavBar && isPhoneOpen && 
                <motion.div 
                    className={`social-medias-mobile ${isPhoneOpen ? 'open' : ''} `}
                    initial={{y: -100, opacity: 0}}
                    animate={{y:0, opacity: 1}}
                    
                    
                >
                    {social.map((item, i) => (
                        <div className={`social ${isNavBar ? 'navbar' : ''}`} key={i} >
                            <Link href={item.href}>
                                <a>
                                    {item.icon}
                                </a>
                            </Link>
                        </div>
                    ))}
                </motion.div>
            
            }
        </Container>
    )
}