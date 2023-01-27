import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Instruments() {
  const [selectedLiveMusicButton, setSelectedLiveMusicButton] =
    useState("classes");
  const [selectedClassesButton, setSelectedClassesButton] = useState("schools"); // <-- update initial state
  const liveMusicButtonStyle = {
    opacity: selectedLiveMusicButton === "liveMusic" ? 1 : 0.5,
  };
  const classesButtonStyle = {
    opacity: selectedLiveMusicButton === "classes" ? 1 : 0.5,
  };
  const teachersButtonStyle = {
    borderColor:
      selectedClassesButton === "schools"
        ? "rgb(250, 86, 135)" // <-- update color
        : "rgb(171, 171, 171)", // <-- update color
  };
  const schoolsButtonStyle = {
    borderColor:
      selectedClassesButton === "teachers"
        ? "rgb(250, 86, 135)" // <-- update color
        : "rgb(171, 171, 171)", // <-- update color
  };

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito Sans"
          rel="stylesheet"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Linik+Sans:wght@800&display=swap"
          rel="stylesheet"
        ></link>
        <title> Instrumentos-Notura </title>
      </Head>
      <h1 className={styles.header}>
        <strong>Notura</strong>
      </h1>
      <main>
        <section>
          <div>
            <button
              className={styles.vivo}
              onClick={() => setSelectedLiveMusicButton("liveMusic")}
              style={liveMusicButtonStyle}
            >
              Música en Vivo
            </button>
            <button
              className={styles.vivo}
              onClick={() => setSelectedLiveMusicButton("classes")}
              style={classesButtonStyle}
            >
              Clases
            </button>
          </div>
          <div className={styles.sleccionclasses}>
            <button
              className={styles.Escuelas}
              onClick={() => setSelectedClassesButton("teachers")}
              style={teachersButtonStyle}
            >
              Profesores
            </button>

            <button
              className={styles.Escuelas}
              onClick={() => setSelectedClassesButton("schools")}
              style={schoolsButtonStyle}
            >
              Escuelas
            </button>
          </div>
        </section>
        <div>
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
        </div>
      </main>
    </div>
  );
}
