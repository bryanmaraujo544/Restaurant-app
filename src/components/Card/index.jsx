import { Container } from './styles'
import Image from 'next/image'
import { Button } from '../Button'

export const Card = ({home, title, endereco, image, link}) => {
    return (
        <Container>
                <div className="image">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={125}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className="infos">
                    <p className="title">
                        {title}
                    </p>
                    {home && 
                        <p className="endereco"> 
                            {endereco} 
                        </p>
                    }
                    <Button 
                        text="Ver serviços"
                        second
                        small
                        link={link}
                        
                    />
                </div>
           
        </Container>
    )
}