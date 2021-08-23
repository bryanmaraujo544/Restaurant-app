import SEO from 'components/SEO'
import Link from 'next/link'
import { Container } from 'styles/UnitiesPage'
import { NavBar } from 'components/NavBar'
import { MapImage } from 'components/MapImage'
import { Banner } from 'components/Banner'
import { Cardapios } from 'sections/Cardapios'
import { Footer } from 'sections'
import { FaWaze } from "react-icons/fa"
import { unitiesPageData } from 'data/unitiesPageData'


const Unities = ({pageData}) => {
    const [data] = pageData
 
    return (
        <Container>
            <SEO 
                title={`Unidade ${data.title} | A quinta do Marquês`}
                description={`${data.horario} - ${data.local}`}
            />
            <NavBar />
            <Banner 
                uptitle={data.horario}
                title="Você está na unidade"
                unityName={data.title}
                description={data.local}
                images={data.images}
                firstBtnText="Cardápios"
                secondBtnText="Localização"
            />
            <Cardapios 
                cardapios={data.cardapios}
                
            />
            <div className="localizacao" id="about">
                <h4 className="title">Como chegar</h4>
                <div className="content">
                    <div className="text">
                        <h5 className="text-title">{data.title}</h5>
                        <p className="endereco">{data.local}</p>
                        <div className="waze">
                            <p>Acesse o endereço pelo Waze</p>
                            <Link href={data.linkWaze}>
                                <a>
                                    <FaWaze size="5.6rem"/>
                                </a>
                            </Link>
                        </div>
                        <MapImage />
                    </div>
                    <div className="map">
                        {data.path === 'paulista' &&
                            <iframe src="https://embed.waze.com/iframe?zoom=16&lat=-23.560745&lon=-46.658573&ct=livemap" allowFullScreen width={600} height={450} />
                            // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.214464138993!2d-46.660761485596424!3d-23.560739767453104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cdd291ca79%3A0xf424764f553d0621!2sAlameda%20Min.%20Rocha%20Azevedo%2C%20251%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001410-001!5e0!3m2!1spt-BR!2sbr!4v1629289483672!5m2!1spt-BR!2sbr" style={{border: 0}} allowFullScreen loading="lazy" width={600} height={450} />
                        }
                        {data.path === 'sao-roque' &&
                            // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2466116670225!2d-48.14097528560529!3d-23.23411135547225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c689a1eaed450d%3A0xdc605c89d86ad310!2sHoddi%20Outlet%20S%C3%A3o%20Roque!5e0!3m2!1spt-BR!2sbr!4v1629291361942!5m2!1spt-BR!2sbr" style={{border: 0}} allowFullScreen loading="lazy" width={600} height={450} />
                            <iframe src="https://embed.waze.com/iframe?zoom=16&lat=-23.234116&lon=-48.138787&ct=livemap" width={600} height={450} allowFullScreen/>          
                        }
                        {data.path === 'alphaville' &&
                            // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3311085617274!2d-46.86482738559851!3d-23.484580464645116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf024d544cfebd%3A0x46bd075eb57a2e34!2sAv.%20Sagit%C3%A1rio%2C%20555%20-%20Alphaville%2C%20Barueri%20-%20SP%2C%2006473-073!5e0!3m2!1spt-BR!2sbr!4v1629291540216!5m2!1spt-BR!2sbr" style={{border: 0}} allowFullScreen loading="lazy" width={600} height={450} />
                            <iframe src="https://embed.waze.com/iframe?zoom=16&lat=-23.484585&lon=-46.862639&ct=livemap" allowFullScreen width={600} height={450} />           
                        }
                        {data.path === 'faria-lima' &&
                            // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.86335973512!2d-46.69102138559605!3d-23.573350467918956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5773407f5bc7%3A0x60b1b593cd69d2e0!2sAv.%20Brg.%20Faria%20Lima%2C%201853%20-%20Jardins%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001452-001!5e0!3m2!1spt-BR!2sbr!4v1629291619033!5m2!1spt-BR!2sbr" style={{border: 0}} allowFullScreen loading="lazy" width={600} height={450} />
                            <iframe src="https://embed.waze.com/iframe?zoom=16&lat=-23.573355&lon=-46.688833&ct=livemap" allowFullScreen width={600} height={450} />            
                        }
                        {data.path === 'campinas' &&
                            // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469686.62395793834!2d-47.26320852768893!3d-23.118071698440527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7bf415c98cb%3A0x573118b8e3103724!2sA%20Quinta%20do%20Marqu%C3%AAs%20-%20Anhanguera%20-%20Campinas!5e0!3m2!1spt-BR!2sbr!4v1629291754550!5m2!1spt-BR!2sbr" style={{border: 0}} allowFullScreen loading="lazy" width={600} height={450} />
                            <iframe src="https://embed.waze.com/iframe?zoom=16&lat=-23.421946&lon=-46.792543&ct=livemap" allowFullScreen width={600} height={450} />            
                        }
                    </div>
                    
                </div>
            </div>
            
            <Footer />
            
        </Container>
    )
}

export default Unities





export const getStaticProps = ({params}) => {
    const title = params.title;
    const pageData = unitiesPageData.filter(item => title === item.path)
    console.log("pagesData",pageData)
    return {
        props: {
            pageData
        },
        revalidate: 60 * 60 * 24 * 30
    }
}

export const getStaticPaths = () => {
    const paths = unitiesPageData.map(item => {
        return {
            params: {
                title: item.path
            }
        }
    })
    return {
        paths, 
        fallback: false,
    }
}