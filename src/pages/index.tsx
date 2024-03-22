import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import HomeComponent from "@/components/HomeComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moaz Ashraf Portfolio</title>
        <meta
          name="description"
          content="That is a website for me that preview my projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <HomeComponent />
      </main>
    </>
  );
}
