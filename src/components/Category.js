import Link from 'next/link'

export default function Category({ category }) {
    return (
        <div className="category">
            {category.map((item, i) => (
                <div className="category-label" key={i}>
                    <Link href={`/category/${item.toLowerCase()}`}>
                        {item}
                    </Link>
                </div>
            ))}
        </div>
    )
}
