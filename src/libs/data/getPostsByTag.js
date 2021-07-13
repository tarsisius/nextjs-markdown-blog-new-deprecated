import getAllPosts from "@/libs/data/getAllPosts";

export default function getPostsByTag(tag) {
  const posts = getAllPosts();
  const matchSlug = new Set();
  const matchPost = [];

  posts.forEach((post) => {
    const isMatched = post.tags.find(
      (t) => t.toLowerCase() === tag.toLowerCase()
    );
    const isHaveSlug = matchSlug.has(post.slug);
    isMatched && !isHaveSlug & matchPost.push(post);
  });

  return matchPost;
}
