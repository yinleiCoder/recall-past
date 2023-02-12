import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Layout from '@/components/layout'
import { getAllPostIds, getPostData } from '@/lib/post'
import Date from '@/components/date'
import utilStyles from '@/styles/utils.module.css'


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        }
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)}
            />
            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
            </article>
        </Layout>
    )
}

// clsx: https://github.com/lukeed/clsx
// className={clsx({
//     [styles.success]: type === 'success',
//     [styles.error]: type === 'error',
//   })}