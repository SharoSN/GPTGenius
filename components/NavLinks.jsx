import React from 'react'
import Link from 'next/link'

const links = [
  {href: '/chat', label: 'Chat'},
  {href: '/tours', label: 'Tours'},
  {href: '/tours/new-tour', label: 'New Tour'},
  {href: '/profile', label: 'Profile'}
]

const NavLinks = () => {
  return (
    <div className='menu text-base-content'>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href}>
            {link.label}
            </Link>
          </li>
        )
      })}
    </div>
  )
}

export default NavLinks