import { Container } from './styles'
import Image from 'next/image'

const boxesData = [
    {
        text: "Pedidos delivery",
        icon: "/Pedidos.png"
    },
    {
        text: "Ingredientes frescos",
        icon: "/Ingredientes.png"
    },
    {
        text: "Self-service",
        icon: "/Self.png"
    },
    {
        text: "Entrega veloz",
        icon: "/Entrega.png"
    },
    {
        text: "Super chefes",
        icon: "/Super.png"
    },
    {
        text: "Atendimento eficaz",
        icon: "/Atendimento.png"
    }
]

export const Services = () => {
    return (
        <Container>
            <div className="image">
                <Image 
                    src="/Chef.png"
                    width={528}
                    height={578}
                    alt="Chef A quinta"
                />
            </div>
            <div className="services">
                <h3 className="title">
                    Temos desde um pãozinho a uma panela la creuset
                </h3>
                <p className="description">
                    Realizamos serviçõs além de uma padaria comum. Temos pratos montados com todo o carinho possível. Temos pizzas deliciosas, lanches que te dão água na boca, além de sobremesas maravilhosas.
                </p>
                <div className="boxes">
                    {boxesData.map((box, i) => (
                        <div className="box" key={i}>
                            <div className="icon">
                                <Image 
                                    src={box.icon}
                                    width={32}
                                    height={32}
                                    objectFit="contain"
                                    alt={box.text}
                                />
                            </div>
                            <p className="box-text">{box.text}</p>
                        </div>
                    ))}
                </div>

            </div>

        </Container>
    )
}