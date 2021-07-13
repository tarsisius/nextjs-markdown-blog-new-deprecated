import Link from "next/link";
import Image from "next/image";

export default function Card({ slug, coverImage, title, tags }) {
  return (
    <div className="card">
      <div className="outer-img">
        <Link href={"/" + slug} passHref>
          <a>
            <Image
              src={coverImage}
              layout="fill"
              className="img"
              alt={coverImage}
            />
          </a>
        </Link>
      </div>
      <div className="detail">
        <div className="tag-list">
          {tags.map((tag, i) => (
            <Link href={"/tag/" + tag.toLowerCase()} key={i} passHref>
              <a>
                <span className="tag">#{tag}</span>
              </a>
            </Link>
          ))}
        </div>
        <Link href={"/" + slug} passHref>
          <a className="title">{title}</a>
        </Link>
      </div>
    </div>
  );
}
