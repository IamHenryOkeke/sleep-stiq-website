'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import NavLogo from '@/public/assets/Group.svg'
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/shop',
    name: 'Shop'
  },
  {
    path: '/faqs',
    name: 'FAQs'
  }
]

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  useEffect(() => {
    if (open) {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open])

  return (
    <nav className='text-white py-5 md:py-10 flex justify-between lg:justify-start items-center gap-6 lg:gap-44'>
      <Link href="/">
        <Image src={NavLogo} alt="" className='lg:w-fit h-10 lg:h-fit' />
      </Link>
      <div className='hidden text-gray-700 font-medium md:flex gap-5 md:gap-10 lg:gap-24 xl:text-lg'>
        {navLinks.map((link) => {
          return (
            <NavLink key={link.path} isActive={pathname === link.path} handleOnClick={toggleMenu} href={link.path} text={link.name} />
          );
        })}
      </div>
      <div className='md:hidden text-black'>
        {
          open ? <div onClick={toggleMenu} className="cursor-pointer md:hidden">
            <FiX size={30} />
          </div> :
            <div onClick={toggleMenu} className="cursor-pointer md:hidden">
              <FiMenu size={30} />
            </div>
        }
      </div>
      <div className={`z-[1000] w-screen h-full md:hidden bg-primaryBlueSecondary transition-all ease-in-out origin-top px-5 py-6 absolute top-20 left-0 flex flex-col gap-5 ${open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} duration-300`}>
        <div className="flex flex-col justify-center items-center gap-8 text-center">
          {navLinks.map((link) => {
            return (
              <NavLink key={link.path} isActive={pathname === link.path} handleOnClick={toggleMenu} href={link.path} text={link.name} />
            );
          })}
        </div>
      </div>
    </nav>
  )
}

function NavLink({ text, isActive, href, handleOnClick }: { text: string, isActive: boolean, href: string, handleOnClick: () => void }) {
  return (
    <Link href={href} onClick={handleOnClick} className={`${isActive && 'font-bold'}`}>
      {text}
    </Link>
  )
}
