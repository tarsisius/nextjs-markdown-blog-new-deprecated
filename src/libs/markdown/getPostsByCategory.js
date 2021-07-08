import getAllPosts from '@/libs/markdown/getAllPosts'

export default function getPostsByCategory(category) {
    const posts = getAllPosts()
    const matchSlug = new Set()
    const matchPost = []

    posts
        .forEach(post => {
            const isMatched = post.category.find(t => t.toLowerCase() === category.toLowerCase())
            const isHaveSlug = matchSlug.has(post.slug)
            isMatched && !isHaveSlug
                & matchPost.push(post)
        })

    return matchPost
}