import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "Ken Chain"
export const siteTitle = "Next.js Blog"
export default function({children,home}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blogs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img src="/images/blockchain.png" className={utilStyles.borderCircle} alt="text" />
                <h1 className={utilStyles.heading2Xl }>{name}</h1>
            </header>
            <main>{children}</main>
            {!home && (
                <Link href="/">←Back to Home</Link>
            )}
        </div>
    );
}