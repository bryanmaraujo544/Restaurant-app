import Head from 'next/head'
import Image from 'next/image'

import { Header, Unities, Services, About, DownloadApp, Footer, ServicesOffer } from 'sections'



export default function Home() {
  return (
    <>
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
