import { Container } from './styles'
import { listNav } from 'components/ListNav/data'
import { unitiesData } from 'sections/Unities/unitiesData'
import { SocialMedias } from 'components/SocialMedias'
import LinkNext from 'next/link'
import { Link } from 'react-scroll'
import LinkN from 'next/link'


export const Footer = ({home}) => {
    return (
        <Container id="contact">
           <div className="content">
                <div className="content-col">
                    <p className="title">
                        Sobre nós
                    </p>
                    <p className="text">
                        A Quinta do Marquês é uma rede de padarias e restaurantes de alto padrão da AN Holding fundada na década de 90.
                    </p>
                </div>
                <div className="content-col">
                    <p className="title">
                        Links úteis
                    </p>
                    <ul className="content-list">
                        {listNav.map(({label, path}, i) => (
                            <li key={i}>
                                {home ?
                                        <Link to={`${path}`} smooth={true} duration={500}>
                                            <a>
                                                {label}
                                            </a>
                                        </Link>
                                    :
                                        <LinkN
                                            href={`/#${path}`}
                                        >
                                            <a>
                                                {label}
                                            </a>
                                        </LinkN>
                                }
                                
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content-col">
                    <p className="title">
                        Unidades
                    </p>
                    <ul className="content-list">
                        {unitiesData.map(({title, path}, i) => (
                            <li key={i}>
                                <LinkNext href={path}>
                                    <a>{title}</a>
                                </LinkNext>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content-col">
                    <p className="title">
                        Contato
                    </p>
                    <div className="social">
                        <SocialMedias className="icons"/>
                        <div className="social-texts">
                            <p className="text">(11) 4717-9800</p>
                            <p className="text">contato@aquintadomarques.com.br</p>
                        </div>
                    </div>
                </div>
           </div>
           <div className="copright">
               <p className="title">
                   Copright By @AQuintadoMarquês
               </p>
               <p className="subtitle">
                   Powered by Bryan Martins
               </p>
           </div>
        </Container>
    )
}