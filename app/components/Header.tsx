import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <header className="flex items-center justify-between px-8 py-4 sticky top-0 bg-white z-50 shadow-md">
    //   <Link href="/">YourBrand</Link>
    // </header>
    <header className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>
        {/* Logo */}
        <div className='text-2xl font-bold text-gray-800'>
          <Link href='/'>MyStore</Link>
        </div>

        {/* Navigation Link for Desktop */}
        <nav className='hidden md:flex space-x-6'>
          <Link href='/' className='text-gray-700 hover:text-black'>
            Home
          </Link>
          <Link href='/shop' className='text-gray-700 hover:text-black'>
            Shop
          </Link>
          <Link href='/about' className='text-gray-700 hover:text-black'>
            About
          </Link>
          <Link href='/cart' className='relative'>
            <span className='material-icons'>shopping_cart</span>
            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-sn px-1'>
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className='md:hidden text-gray-800 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle Menu'
        >
          {isMenuOpen ? (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className='md:hidden bg-white shadow-md'>
          <div className='flex flex-col space-y-4 p-4'>
            <Link
              href='/'
              className='text-gray-700 hover:text-black'
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/shop'
              className='text-gray-700 hover:text-black'
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href='/about'
              className='text-gray-700 hover:text-black'
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href='/cart'
              className='text-gray-700 hover:text-black'
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
