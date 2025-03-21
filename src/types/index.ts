export interface Config {
  siteName: string;
  siteDescription: string;
  logoUrl: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
}

export interface PageProps {
  headers?: { [key: string]: string };
  product?: Product;
  slug?: string;
}
