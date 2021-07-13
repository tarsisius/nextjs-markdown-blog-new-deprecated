import Head from "next/head";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import getAllPosts from "@/libs/data/getAllPosts";
import { postsPerPage } from "@/libs/config";
import Hero from "@/components/Hero";

export default function Page({ posts, pageIndex, numPages, currentPage }) {
  return (
    <>
      <Hero />
      <section className="post-list">
        {posts.map((post, i) => (
          <Card key={i} {...post} />
        ))}
      </section>
      <Pagination currentPage={currentPage} numPages={numPages} />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [...Array((postsPerPage % getAllPosts().length) + 1)].map((v, i) => {
      return {
        params: { page: (i + 1).toString() },
      };
    }),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const posts = getAllPosts();

  const pageIndex = parseInt((params && params.page) || 1) - 1;
  const numPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = pageIndex * postsPerPage;
  const endIndex = (pageIndex + 1) * postsPerPage;

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      pageIndex,
      currentPage: pageIndex + 1,
      numPages,
    },
  };
}
