'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify-icon/react'
import Logo from '@/shared/assets/images/logo/logo.jpg'

export function Header() {
  return (
    <header className="flex flex-col justify-center items-center px-5 py-2 md:py-5">
      <div className="flex justify-between items-center w-full md:w-[75%]">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src={Logo}
              alt="Логотип"
              height={90}
              width={90}
            />
          </Link>
        </div>
        <Link 
          href="/catalog" 
          className="hidden md:flex items-center py-2 px-4 bg-yellow rounded-full font-heading text-md font-bold"
        >
          Каталог товаров
          <Icon 
            icon="material-symbols:keyboard-double-arrow-right-rounded" 
            height="24"
            width="24"  
            className="ml-15"
          />
        </Link>
        <nav className="hidden md:flex gap-3">
          <Link href="/cart">
            <Icon 
              icon="material-symbols:shopping-cart-checkout-rounded" 
              height="24" 
              width="24" 
            />
          </Link>
          <Link href="/profile">
            <Icon 
              icon="material-symbols:account-circle-outline" 
              height="24" 
              width="24" 
            />
          </Link>
        </nav>
      </div>
      <div className="hidden md:flex gap-6 text-sm text-gray-500">
        <Link href="/catalog/cats">Для кошек</Link>
        <Link href="/catalog/dogs">Для собак</Link>
        <Link href="/catalog/rodents">Для грызунов</Link>
        <Link href="/catalog/fish">Для рыбок</Link>
      </div>
    </header>
  )
}
