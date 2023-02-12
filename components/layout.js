import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/components/layout.module.css'
import utilStyles from '@/styles/utils.module.css'


const name = 'Yin Lei'
export const siteTitle = 'Recall Past'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>          
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta 
                    name='description'
                    content='等风来，不如追风去'
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name='og:title' content={siteTitle} />
                <meta name='twitter:card' content='summary_large_image'/>
            </Head>

            <header className={styles.header}>
                {home ? (
                    <>
                        <Image 
                            priority
                            src='/images/yinlei.png'
                            className={styles.userAvatar}
                            height={144}
                            width={144}
                            alt='yin lei'
                        />
                        <h1 className={styles.author}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href='/'>
                        <Image 
                            priority
                            src='/images/yinlei.png'
                            className={styles.userAvatar}
                            height={108}
                            width={108}
                            alt='yin lei'
                        />
                        </Link>
                        <h2 className={styles.author}>
                            <Link href='/' className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href='/'>👈Back to home</Link>
                </div>
            )}
        </div>
    )
}