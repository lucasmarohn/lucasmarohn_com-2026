import { defineType, defineField } from "sanity";

// Reusable media type that supports both images and videos
export const mediaType = defineType({
  name: "media",
  title: "Media",
  type: "object",
  fields: [
    {
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
      hidden: ({ parent }) => parent?.mediaType !== "image",
    },
    {
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      fields: [
        {
          name: "poster",
          title: "Poster Image",
          type: "image",
          description: "Thumbnail/preview image for the video",
          options: {
            hotspot: true,
          },
        },
      ],
      hidden: ({ parent }) => parent?.mediaType !== "video",
    },
  ],
  preview: {
    select: {
      mediaType: "mediaType",
      image: "image",
      video: "video",
    },
    prepare({ mediaType, image, video }) {
      return {
        title: mediaType === "image" ? "Image" : "Video",
        media: mediaType === "image" ? image : video,
      };
    },
  },
});

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Media",
      type: "media",
      description: "Small preview image or video used in project cards and listings",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Media",
      type: "media",
      description: "Large hero image or video displayed at the top of the project detail page",
    }),
    defineField({
      name: "images",
      title: "Media Gallery",
      type: "array",
      of: [{ type: "media" }],
      description: "Collection of images and videos for the project",
    }),
    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Used for ordering projects (lower numbers appear first)",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
  },
});
