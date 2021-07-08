import Image from 'next/image'
import Link from 'next/link'

export default function Img({ slug, src }) {
    const className = slug
        ? 'front-image'
        : 'cover-image'

    const ImageNext = () => {
        return (
            <Image
                className={className}
                src={src}
                alt={src}
                layout="fill"
                objectFit="cover"
            />
        )
    }
    return (
        <div className={className + '_outer'}>
            {slug ?
                <Link href={`/${slug}`} passHref>
                    <a><ImageNext /></a>
                </Link>
                :
                <ImageNext />
            }
        </div>
    )
}