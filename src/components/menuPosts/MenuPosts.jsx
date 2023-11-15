import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css"

// const getData = async(slug) => {

//     const res = await fetch(
//         `http://localhost:3000/api/posts/${slug}`, {
//             cache: "no-store"
//     });

//     if(!res.ok) {
//         throw new Error("Failed");
//     }

//     return res.json();
// }


const MenuPosts = async ({withImage}) => {

    // const data = getData()

    // console.log(data)
    return (
        <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    { withImage && (<div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h3 className= {styles.postTitle}>This is your product for the future, so make good choices....</h3>
                        <div className= {styles.detail}>
                            <span className= {styles.username}>John Doe</span>
                            <span className= {styles.date}>10.09.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    { withImage && (<div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>Food</span>
                        <h3 className= {styles.postTitle}>This is your product for the future, so make good choices</h3>
                        <div className= {styles.detail}>
                            <span className= {styles.username}>John Doe</span>
                            <span className= {styles.date}>10.09.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    { withImage && (<div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                        <h3 className= {styles.postTitle}>This is your product for the future, so make good choices</h3>
                        <div className= {styles.detail}>
                            <span className= {styles.username}>John Doe</span>
                            <span className= {styles.date}>10.09.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    {withImage && (<div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>)}
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                        <h3 className= {styles.postTitle}>This is your product for the future, so make good choices</h3>
                        <div className= {styles.detail}>
                            <span className= {styles.username}>John Doe</span>
                            <span className= {styles.date}>10.09.2023</span>
                        </div>
                    </div>
                </Link>

            </div>
    )
}


export default MenuPosts;