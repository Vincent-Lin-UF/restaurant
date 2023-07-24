import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='height-12 md:height-24 p-4 lg:20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link href="/"  className="font-bold text-xl">
      New China King
      </Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer