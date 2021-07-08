import Link from 'next/link'

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <Link href="/">
                    <a>© 2021</a>
                </Link>
            </div>
        </footer>
    )
}
