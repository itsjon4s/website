import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';

export default function Navbar() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: 'https://github.com/itsjon4s?tab=repositories' },
    { name: 'About', href: '/about' }
  ];

  return (
    <>
      <div className="min-h-full mt-4">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image height="50" width="50" src="/favicon.ico" alt="Workflow" />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map(item => (
                          <a key={item.name} href={item.href} className="hover:bg-gray-700 px-2 py-3 rounded-md text-xl font-semibold" aria-current={'page'}>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6"></div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ">
                      {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map(item => (
                    <Disclosure.Button key={item.name} as="a" href={item.href} className="block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="bg-[#cce9ea] h-[1px]"></div>
    </>
  );
}
