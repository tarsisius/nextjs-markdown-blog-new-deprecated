import Post from '@/components/Post'
import getAllCategories from '@/libs/markdown/getAllCategories'
import getPostsByCategory from '@/libs/markdown/getPostsByCategory'

export default function Category({ posts, categoryName }) {
    return (
        <>
            <h1>
                Posts in {categoryName}
            </h1>
            <section className="post-list">
                {posts.map((post, i) => (
                    <Post key={i} {...post} />
                ))}
            </section>
        </>
    )
}

export function getStaticPaths() {
    const category = getAllCategories()

    return {
        paths: category.map(item => {
            return {
                params: {
                    category: item
                }
            }
        }),
        fallback: false
    }
}

export function getStaticProps({ params }) {
    const posts = getPostsByCategory(params.category)
    return {
        props: {
            posts,
            categoryName: params.category
        }
    }
}