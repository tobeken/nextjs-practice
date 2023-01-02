import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from "../styles/utils.module.css"
import { getPostsData } from '../lib/posts'

//SSGの場合
export async function getStaticProps(){
  const allPostsData = getPostsData();
  console.log(allPostsData)

  return {
    props:{
      allPostsData,
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm fullstack Developer. My favorite language is Solidity.</p>
      </section>

      <section>
        <h2>UX/UI designer's Blog</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id,title,date,thumbnail})=>(
                      <article key={id}>
                      <Link href={`/posts/${id}`}>
                      <img src={`${thumbnail}`} className={styles.thumbnailImage } alt="text" />
                      </Link>
                      <Link href={`/posts/${id}`}>
                        <p className={utilStyles.boldText}>{title}</p>
                      </Link>
                      <br />
                      <small className={utilStyles.lightText}>{date}</small>
                    </article>
          ))}


        </div>
      </section>

    </Layout>
    
  )
}
