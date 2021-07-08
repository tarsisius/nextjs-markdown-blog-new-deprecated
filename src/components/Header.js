import Dynamic from 'next/dynamic'
import Link from 'next/link'

const Toggle = Dynamic(() => import('@components/Toggle'), {
    ssr: false,
})

export default function Header() {
    return (
        <header>
            <div className="container">

                <h1 className="logo">
                    <Link href="/">
                        <a> Blog </a>
                    </Link>
                </h1>
                <Toggle />
            </div>
        </header>
    )
}
 