import styles from "./featured.module.css"
import Image from "next/image"


const Featured = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Ndifreke here!</b> Discover my online journal.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}> This is the title of my blog</h1>
                    <p className={styles.postDesc}> This is the description of my blog. This is the description of my blog. This is the description of my blog. This is the description of my blog.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
};

export default Featured;