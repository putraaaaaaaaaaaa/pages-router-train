import { Config } from "../types";
import { Product } from "../types";

export const mockConfig: Config = {
  siteName: "Mock Store",
  siteDescription: "The best store for mock products!",
  logoUrl: "/logo.png",
};

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Mobile Legends",
    description: "Buy Mobile Legends Diamonds at the best price.",
    thumbnail: "/images/mobile-legends.jpg",
    slug: "mobile-legends",
  },
  {
    id: "2",
    title: "Free Fire",
    description: "Top up Free Fire Diamonds easily and quickly.",
    thumbnail: "/images/free-fire.jpg",
    slug: "free-fire",
  },
];
