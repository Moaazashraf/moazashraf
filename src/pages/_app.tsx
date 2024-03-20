// import "@/styles/base/globals.scss";
import "@/styles/index.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
