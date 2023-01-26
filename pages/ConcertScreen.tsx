import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function ConcertScreen(){return(
<div>
    <header className={styles.header}>
        <button className={styles.button}>
            <Image src={"/../public/back.png"} alt={""} width={20} height={25} />
        </button>
        <h1>(Concierto)<p>XX/XX/XX - XX:XX</p></h1>
        <button className={styles.button}>
            <Image src={"/../public/share.png"} alt={""} width={20} height={25} />
        </button>
        <button className={styles.button}>
            <Image src={"/../public/save.png"} alt={""} width={20} height={25} />
        </button>
        
    </header>
    <main>
        <body>
        <div className={styles.description}>
            <Image src={"/../public/placeHolder.jpg"} alt={""} width={636} height={605} />
            <p>
            <div><b>Acerca de</b></div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <div className={styles.card}>
            <h1>Detalles</h1>
            <p><a><Image src={"/../public/ubi.png"} alt={""} width={15} height={20} /></a>
            25 Fuente del Pescador</p> 
            <p><a><Image src={"/../public/din.png"} alt={""} width={15} height={20} /></a>
            150</p>
            <p><a><Image src={"/../public/tel.png"} alt={""} width={15} height={20} /></a>
            800 911 2000</p>
            </div>
            <Image src={"/../public/noturalogoB.png"} alt={""} width={180} height={40} />
            </p>
        </div>
        </body>
    </main>
</div>
)
}