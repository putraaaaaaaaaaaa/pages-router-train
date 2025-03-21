import { mockConfig } from "@/mock";
import "@/styles/globals.css";
import { Config } from "@/types";
import type { AppProps } from "next/app";

interface MyAppProps extends AppProps {
  config: Config;
}

export default function App({ Component, pageProps, config }: MyAppProps) {
  return <Component {...pageProps} config={config} />;
}

App.getInitialProps = async () => {
  return { config: mockConfig };
};
