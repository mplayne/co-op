import Image from 'next/image'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from "../components/Form";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Video from '../components/Video';
import Card from '../components/MainCard';

import Layout from '../components/Layout';

{/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
<Head>
        {/* name in tabs - browser */}
        <title>Matt Playne</title>
       
        {/* icon infront of name with link  */}
        <link rel="shortcut icon" type="image/x-icon" href="/public/favicon.ico" />
      </Head>
export default function Home() {
  return (
    
    <div className={styles.container}>
      
      <main className={styles.main}>
        {/* <Photo /> */}
       
       <div className={styles.img}>
        <Image src="/images/MP2.jpg" width={3000} height={2000} alt="Matt Playne">
        </Image>
        </div>
        <Form />
        <div className={styles.youtube}>
          <Video />
        </div>
        <Card />
       
        
      </main>
    </div>
  )
}
