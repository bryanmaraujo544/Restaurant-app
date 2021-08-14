import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { SiIfood } from 'react-icons/si'
import Link from 'next/link'
import { Container } from './styles'

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

export const SocialMedias= () => {
    return (
        <Container>
            <div className="social-medias">

            {social.map((item, i) => (
                <div className="social" key={i}>
                    <Link href={item.href}>
                        <a>
                            {item.icon}
                        </a>
                    </Link>
                </div>
            ))}
            </div>
        </Container>
    )
}