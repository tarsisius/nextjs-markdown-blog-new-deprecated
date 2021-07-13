import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <header>
      <div className="header-inner">
        <span className="logo">
          <Link href="/">
            <a> Blog </a>
          </Link>
        </span>
        <span className="space"></span>
        <div className="nav">
          <span className="search">
            <Image src="/assets/svg/search.svg" layout="fill" alt="" />
          </span>
          <span
            className="toggle"
            onClick={() => setActiveTheme(inactiveTheme)}
            aria-label={inactiveTheme + " mode"}
            title={inactiveTheme + " mode"}
          >
            {activeTheme == "dark" && (
              <Image src="/assets/svg/light.svg" layout="fill" alt="" />
            )}
            {activeTheme == "light" && (
              <Image src="/assets/svg/dark.svg" layout="fill" alt="" />
            )}
          </span>
        </div>
      </div>
    </header>
  );
}
