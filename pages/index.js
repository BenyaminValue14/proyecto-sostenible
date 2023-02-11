import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../src/components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import Slider from '../src/components/Slider'
import Products from '../src/components/Products'
import Carta from '../src/components/Carta'
import { useState, useEffect } from 'react'
import Layout from '../src/components/Layout'
import Principal from '../src/components/Principal'

export default function Home() {
  

  return (
    <>
    <Layout>
      <Principal/>
    </Layout>
    </>
  )
}
