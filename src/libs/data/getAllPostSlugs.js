import fs from "fs";
import { postsDirectory } from "@/libs/config";

export default function getAllPostSlugs() {
  const files = fs.readdirSync(postsDirectory);
  const slug = files.map((file) => {
    return {
      params: {
        slug: file.replace(/\.md$/, ""),
      },
    };
  });
  return slug;
}
