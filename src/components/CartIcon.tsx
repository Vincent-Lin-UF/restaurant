import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href='/cart' className='flex items-center gap-4'>
        <div className="relative width-8 height-8 md:width-5 md:height-5">
            <Image src="/cart.png" alt="" fill/>
        </div>
        <span>Cart {3}</span>
    </Link>
  )
}

export default CartIcon