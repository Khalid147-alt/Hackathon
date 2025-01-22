import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,  
  apiVersion: '2025-01-20',  
  useCdn: true,              
});

export interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  shortDescription: string;
  tags: string[];
}

export const fetchProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    title,
    price,
    // Slice tags to first 5 tags
    "tags": tags[0...5],
    "imageUrl": productImage.asset->url,
    description,
    "shortDescription": description[0...100],
  }`;
  return await client.fetch(query);
};

// Optional: Helper function to process tags
export const processProductTags = (product: Product) => {
  return {
    ...product,
    tags: product.tags ? product.tags.slice(0, 5) : []
  };
};

// If you want to fetch a single product with tag restriction
export const fetchProductById = async (id: string) => {
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    title,
    price,
    // Slice tags to first 5 tags
    "tags": tags[0...5],
    "imageUrl": productImage.asset->url,
    description,
    "shortDescription": description[0...100],
  }`;
  return await client.fetch(query, { id });
};

// Additional tag-related utility
export const getUniqueTags = (products: Product[]) => {
  // Collect all tags, remove duplicates, and limit to 5
  const allTags = Array.from(new Set(
    products.flatMap(product => product.tags)
  )).slice(0, 5);

  return allTags;
};