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

// Helper to get file URL from Sanity asset reference
// Sanity file refs are in format: file-{id}-{extension}
export function urlForFile(source: { asset: { _ref: string } }): string {
  const ref = source.asset._ref;
  // Remove "file-" prefix and split the rest
  const parts = ref.replace(/^file-/, "").split("-");
  // Last part is the extension, everything before is the ID
  const extension = parts[parts.length - 1];
  const id = parts.slice(0, -1).join("-");
  return `https://cdn.sanity.io/files/${sanityConfig.projectId}/${sanityConfig.dataset}/${id}.${extension}`;
}

// Helper to fetch data
export async function sanityFetch<T>(query: string, params = {}): Promise<T> {
  return client.fetch<T>(query, params);
}
