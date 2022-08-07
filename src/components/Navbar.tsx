import Link from "next/link";
import { Bird } from "phosphor-react";

export default function NavBar() {
  return (
    <nav className="flex items-center flex-wrap">
      <div className="flex items-center p-3 ">
        <Link href="/">
          <a>
            <Bird className="text-6xl" />
          </a>
        </Link>
      </div>
      <div>
        <div className="w-full items-start flex text-lg">
          <Link href="/">
            <a className="w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-[#333] ">
              Home
            </a>
          </Link>
          <Link href="https://github.com/itsjon4s?tab=repositories">
            <a className="w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-[#333] ">
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a className="w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-[#333]">
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
