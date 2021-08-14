import Head from 'next/head'
import Image from 'next/image'
import { Header } from 'sections/Header'
import { Unities } from 'sections/Unities'


export default function Home() {
  return (
    <>
      <Header />
      <Unities />
    </>
  )
}
