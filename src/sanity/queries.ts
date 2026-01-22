// GROQ queries for fetching data from Sanity

// Get all projects ordered by order field
export const allProjectsQuery = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    tags,
    description,
    images,
    liveUrl,
    order
  }
`;

// Get a single project by slug
export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    tags,
    description,
    images,
    liveUrl,
    order
  }
`;

// Get adjacent projects (previous and next)
export const adjacentProjectsQuery = `
  {
    "prev": *[_type == "project" && order < $currentOrder] | order(order desc)[0] {
      title,
      "slug": slug.current
    },
    "next": *[_type == "project" && order > $currentOrder] | order(order asc)[0] {
      title,
      "slug": slug.current
    }
  }
`;

// Get site settings
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    email,
    location,
    socialLinks
  }
`;

// Get all project slugs (for static generation)
export const allProjectSlugsQuery = `
  *[_type == "project"] {
    "slug": slug.current
  }
`;
