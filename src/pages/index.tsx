import Link from "next/link";
import { Config } from "../types";

interface HomeProps {
  config?: Config;
}

export default function Home({ config }: HomeProps) {
  if (!config) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{config.siteName}</h1>
      <p>{config.siteDescription}</p>
      <Link href="/mobile-legends">Mobile Legends</Link>
    </div>
  );
}
