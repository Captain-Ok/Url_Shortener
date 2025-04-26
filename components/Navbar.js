import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className='h-16 bg-slate-800 flex justify-around items-center text-white'>
        <Link href="/" ><div className="logo text-2xl font-semibold"> <span className='text-green-600'>&lt;</span>Shortner<span className='text-green-600'>/&gt;</span> </div></Link>
        <ul className='flex gap-4 justify-center items-center'>
          <Link href="/" ><li>Home</li></Link>
          <Link href="/about" ><li>About</li></Link>
          <Link href="/shorten" ><li>Shorten</li></Link>
          <Link href="/contact" ><li>Contact Us</li></Link>

          <li className='flex gap-3'>
            <Link href="/shorten"> <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Try Now</button> </Link>

            <Link href="/github"> <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">GitHub</button> </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar