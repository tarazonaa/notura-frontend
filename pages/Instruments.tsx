import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar"

const inter = Inter({ subsets: ["latin"] });

export default function Instruments() {
  const [data, setData] = useState([]);
  const [selectedLiveMusicButton, setSelectedLiveMusicButton] =
    useState("classes");
  const [selectedClassesButton, setSelectedClassesButton] = useState("schools"); 
  const liveMusicButtonStyle = {
    opacity: selectedLiveMusicButton === "liveMusic" ? 1 : 0.5,
  };
  const classesButtonStyle = {
    opacity: selectedLiveMusicButton === "classes" ? 1 : 0.5,
  };
  const teachersButtonStyle = {
    borderColor:
      selectedClassesButton === "schools"
        ? "rgb(250, 86, 135)" 
        : "rgb(171, 171, 171)", 
  };
  const schoolsButtonStyle = {
    borderColor:
      selectedClassesButton === "teachers"
        ? "rgb(250, 86, 135)" 
        : "rgb(171, 171, 171)", 
  };
  
useEffect(() => {
  fetch("http://localhost:8000/lessons/instruments")
  .then((response) => response.json())
  .then((response) => setData(response.data))
  .catch((error) => console.log(error));
}), [];

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
        <title> Instrumentos </title>
      </Head>
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
              className={styles.escuelas}
              onClick={() => setSelectedClassesButton("schools")}
              style={teachersButtonStyle}
            >
              Profesores
            </button>

            <button
              className={styles.escuelas}
              onClick={() => setSelectedClassesButton("teachers")}
              style={schoolsButtonStyle}
            >
              Escuelas
            </button>
          </div>
        </section>
        <div>
          <div className={styles.instrumentos}>
            {
              data.map((item) => (
                <button className={styles.btn}> {item["name"]} </button>
              ))
            }
          </div>
        </div>
      </main>
    </div>
  );
}
