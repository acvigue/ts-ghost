import { z } from "zod";
import {
  GhostIdentificationSchema,
  GhostMetadataSchema,
  GhostCodeInjectionSchema,
  GhostSocialMediaSchema,
} from "@ts-ghost/core-api";
import { AuthorSchema } from "../authors/schemas";
import { TagSchema } from "../tags/schemas";

export const PageSchema = z.object({
  ...GhostIdentificationSchema.shape,
  ...GhostMetadataSchema.shape,
  title: z.string(),
  html: z.string(),
  comment_id: z.string().nullable(),
  feature_image: z.string().nullable(),
  feature_image_alt: z.string().nullable(),
  feature_image_caption: z.string().nullable(),
  featured: z.boolean(),
  custom_excerpt: z.string().nullable(),
  ...GhostCodeInjectionSchema.shape,
  ...GhostSocialMediaSchema.shape,
  custom_template: z.string().nullable(),
  canonical_url: z.string().nullable(),
  authors: z.array(AuthorSchema).nullable(),
  tags: z.array(TagSchema).nullable(),
  primary_author: AuthorSchema,
  primary_tag: TagSchema.nullable(),
  url: z.string(),
  excerpt: z.string(),
});

export const pagesIncludeSchema = z.object({
  authors: z.literal(true).optional(),
  tags: z.literal(true).optional(),
});
export type PagesIncludeSchema = z.infer<typeof pagesIncludeSchema>;
