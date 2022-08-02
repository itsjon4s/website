import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="flex items-center flex-wrap">
        <div className="flex items-center p-2 ">
          <Image
            src="/avatar.jpg"
            className="rounded-full"
            width="50px"
            height="50px"
            alt=""
          />
        </div>
        <div>
          <div className="w-full items-start flex">
            <Link href="https://github.com/itsjon4s?tab=repositories">
              <a className="w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-[#222] ">
                Projects
              </a>
            </Link>
            <Link href="/experience">
              <a className="w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-[#222]">
                Experience
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
