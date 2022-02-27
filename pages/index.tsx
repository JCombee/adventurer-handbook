import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import graphql from "../lib/graphql";

interface HomeProps {
  characters: {
    name: string;
  }[];
}

const Home: NextPage<HomeProps> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adventure Handbook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://adventure-handbook.vercel.app/">Adventure Handbook!</a>
        </h1>

        <p className={styles.description}>
          Under Construction!
        </p>

        <div className={styles.grid}>

          <a className={styles.card}>
            <h2>{characters[0].name}</h2>
            <p>Lorem Ipsum</p>
          </a>

          <a className={styles.card}>
            <h2>{characters[1].name}</h2>
            <p>Lorem Ipsum</p>
          </a>

          <a className={styles.card}>
            <h2>{characters[2].name}</h2>
            <p>Lorem Ipsum</p>
          </a>

          <a className={styles.card}>
            <h2>{characters[3].name}</h2>
            <p>Lorem Ipsum</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://genshin-impact.fandom.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data provided by{' '}
          <span className={styles.logo}>
            <Image src="https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Site-favicon.ico/revision/latest" alt="Genshin Impact Wiki Logo" width={16} height={16} />{' '}
            Genshin Impact Wiki
          </span>
        </a>
      </footer>
    </div>
  )
}

const CHARACTERS_QUERY = `{
  characters {
    name
  }
}`;

export async function getStaticProps() {
  const data = await graphql(CHARACTERS_QUERY);
  const characters = data.data.characters;

  return {
    props: {
      characters,
    },
  }
}


export default Home
