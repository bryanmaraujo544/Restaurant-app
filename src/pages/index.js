import Head from 'next/head'
import Image from 'next/image'

import { Header, Unities, Services } from 'sections'



export default function Home() {
  return (
    <>
      <Header />
      <Unities />
      <Services/>
    </>
  )
}
