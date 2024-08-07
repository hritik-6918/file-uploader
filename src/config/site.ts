import { env } from "@/env"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "File.Uploader",
  description: "File uploader built with shadcn-ui, and react-dropzone",
  url:
    env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://uploader.hritik.com",
  links: { github: " https://github.com/hritik-6918/file-uploader" },
}
