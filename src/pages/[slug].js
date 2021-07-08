import Link from 'next/link'
import Img from '@/components/Img'
import Category from '@/components/Category'
import getAllPostSlugs from '@/libs/markdown/getAllPostSlugs'
import getPostData from '@/libs/markdown/getPostData'

export default function Detail({ post }) {
    if (!post) return null
    return (
        <article>
            <Img src={post.coverImage} />
            <h1>{post.title}</h1>
            <Category category={post.category} />
            <main className="post-body__inner" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
    )
}

export function getStaticPaths() {
    return {
        paths: getAllPostSlugs(),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            post: await getPostData(params.slug)
        }
    }
}



