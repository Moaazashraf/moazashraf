import "@/styles/index.scss";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const myFont = localFont({ src: "./D-DINCondensed.woff2" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
