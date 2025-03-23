import { GetServerSideProps } from "next";
import { mockProducts } from "@/mock";
import Link from "next/link";
import { Product } from "@/types";

interface ProductPageProps {
  product?: Product;
  slug?: string;
  headers?: Record<string, string | string[]>;
}

export default function ProductPage({
  product,
  slug,
  headers,
}: ProductPageProps) {
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Slug: {slug}</p>
      <h3>Headers:</h3>
      <pre>{JSON.stringify(headers, null, 2)}</pre>
      <Link href="/">Home</Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const slug = params?.slug as string;
  const product = mockProducts.find((p) => p.slug === slug);
  const headers = req.headers;

  return {
    props: {
      headers,
      product,
      slug,
    },
  };
};
