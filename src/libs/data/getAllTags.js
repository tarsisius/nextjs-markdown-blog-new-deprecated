import getAllPosts from "@/libs/data/getAllPosts";

export default function getAllTags() {
  const posts = getAllPosts();
  const set = new Set();
  posts.forEach((post) => {
    post.tags && post.tags.forEach((c) => set.add(c));
  });

  return Array.from(set);
}
