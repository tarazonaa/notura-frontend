import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Instruments () {
    const [selectedPair1Button, setSelectedPair1Button] = useState("");
    const [selectedPair2Button, setSelectedPair2Button] = useState("");
    const button1Style = { opacity: selectedPair1Button === 'button2' ? 0.5 : 1 }
    const button2Style = { opacity: selectedPair1Button === 'button1' ? 0.5 : 1 }
    const button3Style = { borderColor: selectedPair2Button === 'button4' ? 'rgb(171, 171, 171)' : 'rgb(250, 86, 135)' }
    const button4Style = { borderColor: selectedPair2Button === 'button3' ? 'rgb(171, 171, 171)' : 'rgb(250, 86, 135)' }
    return (
        <div>
               <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet' crossOrigin='anonymous'></link>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Linik+Sans:wght@800&display=swap" rel="stylesheet"></link>
          <title> Notura </title>
        </Head>
        <header className={styles.header}>
          <h1><strong>Notura</strong></h1>
        </header>
        <main>
          <section>
            <div>
              <button
                className={styles.vivo} 
                onClick={() => setSelectedPair1Button('button1')}
                style={button1Style}
              >
                Música en Vivo
              </button>
              <button
                className={styles.clases}
                onClick={() => setSelectedPair1Button('button2')}
                style={button2Style}
              >
                Clases
              </button>
            </div>
            <div className={styles.menu2}>
              <button
                className={styles.Escuelas} 
                onClick={() => setSelectedPair2Button('button4')}
                style={button4Style}
              >
                Profesores
              </button>
              <button
                className={styles.Escuelas}
                onClick={() => setSelectedPair2Button('button3')}
                style={button3Style}
              >
                Escuelas
              </button>
            </div>
            <div className={styles.instrumentos}>
            <button className={styles.btn}>Guitarra Acustica</button>
              <button className={styles.btn}>Bateria</button>
              <button className={styles.btn}>Teclado</button>
              <button className={styles.btn}>Guitarra Electrica</button>
              <button className={styles.btn}>Ukelele</button>
              <button className={styles.btn}>Canto</button>
              <button className={styles.btn}>Bajo</button>
              <button className={styles.btn}>Saxofón</button>
              <button className={styles.btn}>Piano</button>
              <button className={styles.btn}>Otros</button>
            </div>
            <div>
            </div>
          </section>
        </main>
        </div>
    )
}