import Link from 'next/link'
import Img from '@/components/Img'

export default function Post({ slug, coverImage, title, excerpt }) {
    return (
        <div className="card">
            <Img slug={slug} src={coverImage} />
            <div className="detail">
                <h3 className="title">
                    <Link href={`/${slug}`} passHref>
                        {title}
                    </Link>
                </h3>
                <main className="excerpt">
                    <p>{excerpt}</p>
                </main>
                {/* <span className="category">
                    {tags.map((tag, index) => {
                        <Link href={`tag/${tag}`} key={index} passHref>
                            {tags}
                        </Link>
                    })}
                </span> */}
            </div>
        </div>
    )
}