import Link from "next/link";
import Image from "next/image";
import { Bird } from "phosphor-react";
export default function NavBar() {
  return (
    <nav className="flex items-center flex-wrap">
      <div className="flex items-center p-3 ">
        <Bird className="text-5xl" />
      </div>
      <div>
        <div className="w-full items-start flex">
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
          <Link href="/experience">
            <a className="w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-[#333]">
              Experience
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
