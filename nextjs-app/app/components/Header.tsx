import Link from "next/link";
import { Icon } from "./Icon";
import { client } from "@/sanity/lib/client";

export default async function Header() {
  const resumeLink = await client.fetch(`*[_type == "settings"][0]{
    linkToResume,
  }`);

  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <img className="h-[48px]" src="icon.svg" alt="logo" />
          </Link>

          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              <li className="flex gap-8">
                <Link href="/" className="">
                  Home
                </Link>
                <Link href="/#showcase-section" className="">
                  Showcase
                </Link>
                <Link href="/#skills-section" className="">
                  Skills
                </Link>
                <Link href="/#certificates-section" className="">
                  Certificates
                </Link>
                <Link href="/#contact-section" className="">
                  Contact
                </Link>
                <Link href="/posts" className="">
                  Blog
                </Link>
              </li>

              <li className="sm:before:w-[1px] sm:before:bg-gray-100 before:block flex sm:gap-4 md:gap-6">
                <Link
                  className="rounded-full flex gap-2 items-center bg-black hover:bg-green-500 focus:bg-cyan-500 p-1 sm:py-3 sm:px-6 text-white transition-colors duration-200"
                  href={resumeLink.linkToResume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only sm:not-sr-only">Resume</span>
                  <Icon icon="gg:external" width="24"/>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
