import { Container } from './styles';
import { Logo } from 'components/Logo';
import { Link } from 'react-scroll';
import Image from 'next/image'
import { FaInstagram, FaFacebookF, SiIfood, FaWhatsapp } from 'react-icons/fa'
import { SocialMedias } from 'components/SocialMedias';
import { ListNav } from 'components/ListNav';
import { MobileDrawer } from './MobileDrawer';





export const NavBar = () => {
  return (
    <Container>
      <MobileDrawer />
      <Logo/>
      <ListNav/>
      <SocialMedias />
    </Container>
  )
}
