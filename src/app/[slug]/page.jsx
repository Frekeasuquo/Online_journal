import Menu from '@/components/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'


const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>This is the title, this the title, this is the title</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt='' fill className={styles.avater} />
                        </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            IGA you are a toad, know this and know peace. IGA you are a toad, know this and know peace.IGA you are a toad, know this and know peace.
                        </p>
                        <h2>IGA you are a toad</h2>
                        <p>
                            IGA you are a toad, know this and know peace. IGA you are a toad, know this and know peace.IGA you are a toad, know this and know peace.
                        </p>
                        <p>
                            IGA you are a toad, know this and know peace. IGA you are a toad, know this and know peace.IGA you are a toad, know this and know peace.
                        </p>
                        <p>
                            IGA you are a toad, know this and know peace. IGA you are a toad, know this and know peace.IGA you are a toad, know this and know peace.
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}


export default SinglePage