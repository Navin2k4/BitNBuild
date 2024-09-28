import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-xl z-50 shadow-lg px-2 pt-2">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Brand/Logo Section */}
        <Link href="/" className="text-3xl font-extrabold tracking-tight text-white">
          Evently
        </Link>

        {/* Navigation for larger screens */}
        <SignedIn>
          <nav className="hidden md:flex space-x-10 text-lg font-semibold text-gray-200">
            <NavItems />
          </nav>
        </SignedIn>

        {/* Action Buttons */}
        <div className="flex items-center gap-8">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>

          <SignedOut>
            <Button asChild className="relative group">
              <Link href="/sign-in" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-5 py-2 text-white font-medium hover:text-white shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-sm">
                <span>Login</span>
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
