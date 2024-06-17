import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import HomeComponent from "@/components/HomeComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moaz Ashraf</title>
        <meta
          name="description"
          content="turning ideas into real life products is my calling."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <HomeComponent />
      </main>
    </>
  );
}
