'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify-icon/react'
import { siteConfig } from '../config /app'
import Logo from '@/shared/assets/images/logo/logo.jpg'

export function Footer() {
  return (
    <footer className="flex justify-center items-center p-5 md:p-10 py-15 bg-yellow text-black">
      <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-between items-start w-full max-w-5xl">
        <Link href="/">
          <Image
            src={Logo}
            alt="Логотип"
            height={100}
            width={100}
            className="bg-white rounded-xl"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Связаться с нами</h3>
          <div className="flex flex-col">
            <Link href="tel:+79009330121">{siteConfig.contacts.tel}</Link>
            <Link href="mailto:office@pet-shop.ru">{siteConfig.contacts.email}</Link>
          </div>
          <div className="flex gap-4 mt-3">
            <Link href={siteConfig.contacts.instagram}>
              <Icon icon="mdi:instagram" width="30" height="30" />
            </Link>
            <Link href={siteConfig.contacts.vk}>
              <Icon icon="mingcute:vkontakte-fill" width="30" height="30" />
            </Link>
            <Link href={siteConfig.contacts.telegram}>
              <Icon icon="ic:baseline-telegram" width="30" height="30" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:gap-5">
          <div className="flex flex-col md:flex-row gap-4 w-full text-sm font-bold">
            <Link href="/">Главная</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/about">О нас</Link>
          </div>
          <div className="flex gap-10 text-sm text-gray-600">
            {siteConfig.documents.map(item => (
              <Link href={item.href} key={item.title}>{item.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
