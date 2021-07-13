import Card from "@/components/Card";
import getAllTags from "@/libs/data/getAllTags";
import getPostsByTag from "@/libs/data/getPostsByTag";

export default function Tag({ posts, tag }) {
  return (
    <>
      <h1>Posts in {tag}</h1>
      <section className="post-list">
        {posts.map((post, i) => (
          <Card key={i} {...post} />
        ))}
      </section>
    </>
  );
}

export function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: tags.map((item) => {
      return {
        params: {
          tag: item,
        },
      };
    }),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const posts = getPostsByTag(params.tag);
  return {
    props: {
      posts,
      tag: params.tag,
    },
  };
}
