import { listNav } from "./data"
import { Container, ContainerMobile } from './styles'
import { Link } from "react-scroll"
import LinkN from 'next/link'

export const ListNav = ({isMobile, home}) => {
    return (
        <>
            {isMobile ? 
                <ContainerMobile>
                    {listNav.map((item, i) => (
                        <li  key={i}>
                            {home ?
                                    <Link
                                    activeClass="active"
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    >
                                        <a> 
                                            {item.label}
                                        </a>
                                    </Link>
                                :
                                <LinkN
                                    href={`/#${item.path}`}
                                >
                                    <a>
                                        {item.label}

                                    </a>
                                </LinkN>
                            }
                        </li>
                    ))}
                </ContainerMobile>
                :
                <Container>
                    {listNav.map((item, i) => (
                        <li  key={i}>
                            {home ?
                                    <Link
                                    activeClass="active"
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    >
                                        <a> 
                                            {item.label}
                                        </a>
                                    </Link>
                                :
                                <LinkN
                                    href={`/#${item.path}`}
                                >
                                    <a>
                                        {item.label}

                                    </a>
                                </LinkN>


                            }
                        </li>
                    ))}
                </Container>
            }

        </>
        
    )
}