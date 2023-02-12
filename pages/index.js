import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import Layout, {siteTitle} from '@/components/layout'
import Date from '@/components/date'
import styles from '@/styles/Home.module.css'
import utilStyles from '@/styles/utils.module.css'
import { getSortedPostsData } from '@/lib/post'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hello, i'm YinLei. I'm a software enginer. You can contact me on <a href='https://space.bilibili.com/355529756?spm_id_from=333.788.0.0'>Bilibili.</a></p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>News</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
      
    </Layout>
  )
}
