import Image from "next/image";
import styles from "./footer.module.css"
import Link from "next/link";

const Footer = () => {

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                        <Image src="/logo.png" alt="frekes blog" width={50} height={50} />
                        <h1 className={styles.logoText}>Frekes Blog</h1>
                    </div>
                    <p className={styles.desc}>
                        Freke Blog is the best blog.
                        Freke Blog is the best blog.
                        Freke Blog is the best blog.
                    </p>
                    <div className={styles.icons}>
                        <Link href="https://github.com/Frekeasuquo" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Image src="/github-logo.png" alt="facebook" width={24} height={24} >
                            </Image>
                        </Link>
                        <Link href="https://www.linkedin.com/in/ndifreke-asuquo/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Image src="/linkedin-logo.png" alt="facebook" width={24} height={24} >
                            </Image>
                        </Link>
                        
                        <Link href="https://twitter.com/Ndifreke_01" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Image src="/x-logo-png.png" alt="facebook" width={24} height={24} >
                            </Image>
                        </Link>
                    </div>
                </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/blog?cat=style">Style</Link>
                    <Link href="/blog?cat=fashion">Fashion</Link>
                    <Link href="/blog?cat=coding">Coding</Link>
                    <Link href="/blog?cat=travel">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                        <Link href="https://github.com/Frekeasuquo" target="_blank"    rel="noopener noreferrer" className={styles.link}>
                            Github
                        </Link>

                        <Link href="https://www.linkedin.com/in/ndifreke-asuquo/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            Linkedin
                        </Link>
                        
                        <Link href="https://twitter.com/Ndifreke_01"     target="_blank" rel="noopener noreferrer" className={styles.link}>
                            X
                        </Link>
                </div>
            </div>
        </div>
    )
};

export default Footer