import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DXdao IPFS Propagator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DXdao IPFS Propagator</h1>

        <p className={styles.description}>
          A network of DAO contributors running nodes to decentralize our data
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.notion.so/rossneilson/DXdao-IPFS-Propagators-996d36ff5f014c4ea27acf84d09ba7ee"
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>Find out how to join collection of contributors and nodlers</p>
          </a>

          <a
            href="https://ipfs-cluster-propagator.vercel.app/api/pin"
            className={styles.card}
          >
            <h2>API &rarr;</h2>
            <p>Access the API today (Limited by origin and data structure)</p>
          </a>

          <a href="https://dappnode.io/" className={styles.card}>
            <h2>Dappnode &rarr;</h2>
            <p>
              Buy a dappnode to easily run an IPFS node and other decentralized
              technology.
            </p>
          </a>

          <a
            href="https://github.com/DXgovernance/ipfs-cluster-propagator"
            className={styles.card}
          >
            <h2>Github &rarr;</h2>
            <p>
              See the source code for this forwarding function and contribute
              new ideas.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
