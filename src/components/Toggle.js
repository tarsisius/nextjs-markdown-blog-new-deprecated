import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Toggle() {
    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme)
    const inactiveTheme = activeTheme === "light" ? "dark" : "light"

    useEffect(() => {
        document.body.dataset.theme = activeTheme
        window.localStorage.setItem("theme", activeTheme)
    }, [activeTheme])

    return (
        <div
            aria-label={inactiveTheme + ' mode'}
            title={inactiveTheme + ' mode'}
            onClick={() => setActiveTheme(inactiveTheme)}
            className={'toggle ' + activeTheme}
        >
            {activeTheme == 'dark' &&
                <Image src="/assets/svg/moon.svg" layout="fill" alt="" />
            }
            {activeTheme == 'light' &&

                <Image src="/assets/svg/sun.svg" layout="fill" alt="" />
            }
        </div >
    )
}