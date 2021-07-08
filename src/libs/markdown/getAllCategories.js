import getAllPosts from '@/libs/markdown/getAllPosts'

export default function getAllCategories() {
  const posts = getAllPosts()
  const set = new Set()
  posts
    .forEach(post => {
      post.category &&
        post
          .category
          .forEach(c => set.add(c))
    })

  return Array.from(set)
}