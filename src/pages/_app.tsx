import "@/styles/index.scss";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const dDinCondensed = localFont({
  src: "./D-DINCondensed.woff2",
  variable: "--font-d-din-condensed",
});

const markPro = localFont({
  src: "./Mark Pro Heavy.woff2",
  variable: "--font-mark-pro",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dDinCondensed.variable} ${markPro.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
