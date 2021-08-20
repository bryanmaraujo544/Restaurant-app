import { Header, Unities, Services, About, DownloadApp, Footer, ServicesOffer } from 'sections'
import SEO from 'components/SEO'


export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <Unities /> 
      <Services/>
      <About />
      <ServicesOffer />
      <DownloadApp />
      <Footer home/>
    </>
  )
}
