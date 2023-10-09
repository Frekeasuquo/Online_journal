import Link from "next/link";
import styles from "./card.module.css"
import Image from "next/image";

const Card = () => {

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>10.09.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                    <Link href="/">
                        <h1>This is the title to my page, hope it is worth your time.</h1>
                    </Link>
                    <p className={styles.desc}>
                        The stats says just on practising you will be perfect at it someday but I do not know when.
                        The stats says just on practising you will be perfect at it someday but I do not know when.
                        The stats says just on practising you will be perfect at it someday but I do not know when.
                    </p>
                    <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
};

export default Card