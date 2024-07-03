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

const circular = localFont({
  src: "./Circular Std Book.woff",
  variable: "--font-circular",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${dDinCondensed.variable} ${markPro.variable} ${circular.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
