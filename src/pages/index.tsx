import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { secrets_spotify } from '../../secrets';

const inter = Inter({ subsets: ['latin'] });

const sayHello = async () => {
  const json = await fetch('/api/hello')
    .then((data: Response) => {
      return console.log(data.json);
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export default function Home() {
  const name = secrets_spotify.name;

  return (
    <>
      <Head>
        <title>Create Next App {name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sayHello()}
          >
            <h2 className={inter.className}>
              SayHello <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
