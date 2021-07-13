import Link from "next/link";
import Image from "next/image";
import getAllPostSlugs from "@/libs/data/getAllPostSlugs";
import getPostData from "@/libs/data/getPostData";

export default function Detail({ post }) {
  if (!post) return null;
  return (
    <section className="detail">
      <div className="top-image_outer">
        <Image
          src={post.coverImage}
          layout="fill"
          className="top-image"
          alt={post.coverImage}
        />
      </div>
      <article className="article">
        <h1>{post.title}</h1>
        <div className="tag-list">
          {post.tags.map((tag, i) => (
            <Link href={"/tag/" + tag.toLowerCase()} key={i} passHref>
              <span className="tag">#{tag}</span>
            </Link>
          ))}
        </div>
        <div
          className="post-body__inner"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </section>
  );
}

export function getStaticPaths() {
  return {
    paths: getAllPostSlugs(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: await getPostData(params.slug),
    },
  };
}
