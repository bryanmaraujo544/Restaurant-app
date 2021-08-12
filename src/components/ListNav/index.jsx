import { listNav } from "./data"
import { Container, ContainerMobile } from './styles'
import { Link } from "react-scroll"

export const ListNav = ({isMobile}) => {
    return (
        <>
            {isMobile ? 
                <ContainerMobile>
                    {listNav.map((item, i) => (
                        <li  key={i}>
                            <Link
                            activeClass="active"
                            to={item.path}
                            spy={true}
                            smooth={true}
                            duration={500}
                            >
                            {item.label}
                            </Link>
                        </li>
                    ))}
                </ContainerMobile>
                :
                <Container>
                    {listNav.map((item, i) => (
                        <li  key={i}>
                            <Link
                            activeClass="active"
                            to={item.path}
                            spy={true}
                            smooth={true}
                            duration={500}
                            >
                            {item.label}
                            </Link>
                        </li>
                    ))}
                </Container>
            }

        </>
        
    )
}