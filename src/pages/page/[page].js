import Head from 'next/head'
import Post from '@/components/Post'
import Pagination from '@/components/Pagination'
import getAllPosts from '@/libs/markdown/getAllPosts'
import { postsPerPage } from '@/libs/config'

export default function Page({ posts, pageIndex, numPages, currentPage }) {
  return (
    <>
      <Head>
        <title>Halaman {pageIndex + 1}</ title>
      </Head>

      <section className="post-list">
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </section>

      <Pagination
        currentPage={currentPage}
        numPages={numPages}
      />
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: [...Array((postsPerPage % getAllPosts().length) + 1)].map((v, i) => {
      return {
        params: { page: (i + 1).toString() },
      }
    }),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const posts = getAllPosts()

  const pageIndex = parseInt((params && params.page) || 1) - 1
  const numPages = Math.ceil(posts.length / postsPerPage)

  const startIndex = pageIndex * postsPerPage
  const endIndex = (pageIndex + 1) * postsPerPage

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      pageIndex,
      currentPage: pageIndex + 1,
      numPages
    },
  }
}

