import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./config";

// Create Sanity client
export const client = createClient(sanityConfig);

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}

// Helper to fetch data
export async function sanityFetch<T>(query: string, params = {}): Promise<T> {
  return client.fetch<T>(query, params);
}
