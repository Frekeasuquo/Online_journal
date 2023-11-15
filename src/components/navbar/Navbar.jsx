import Image from "next/image";
import styles from "./Navbar.module.css"
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";


const Navbar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.social}>
                
                <Link href="https://github.com/Frekeasuquo" target="_blank"         rel="noopener noreferrer" className={styles.link}>
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
            <div className={styles.logo}>Frekes logo</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>HomePage</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                <Link href="/" className={styles.link}>About</Link>
                <AuthLinks />
            </div>
        </div>
    )
};

export default Navbar