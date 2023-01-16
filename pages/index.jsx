import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout/layout'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [test, settest] = useState(true)
  return (
<Layout>
<button className='btn btn-primary' onClick={()=>(settest(!test))}>Toggle</button>
<div className={`bg-danger col-6 p-4 ${test? "d-flex": "d-none"}`}>
  opened lorem cvdlkjdljcljc
</div>
</Layout>
  )
}
