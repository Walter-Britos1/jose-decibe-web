import { useState } from 'react';
import logo from '@/img/logo-horizontal.svg';
import facebook from '@/img/facebook.svg';
import instagram from '@/img/instagram.svg';
import whatsapp from '@/img/whatsapp.svg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <nav className='relative bg-[#00007c]'>
      <div className='flex items-center justify-between p-4 px-6 md:px-16'>
        {/* Logo */}
        <div className='flex items-center z-20'>
          <img
            src={logo}
            alt='Logo Jose Decibe'
            className='w-36 md:w-48 h-12 md:h-16'
          />
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-36'>
          <button
            onClick={() => handleScroll('nosotros')}
            className='text-white text-xl hover:text-gray-300'
          >
            Nosotros
          </button>
          <button
            onClick={() => handleScroll('servicios')}
            className='text-white text-xl hover:text-gray-300'
          >
            Servicios
          </button>
          <button
            onClick={() => handleScroll('contacto')}
            className='text-white text-xl hover:text-gray-300'
          >
            Contacto
          </button>
        </div>

        {/* Desktop CTA Button */}
        <div className='hidden md:block'>
          <a
            href='tel:+542342462874'
            target='_blank'
            className='text-white px-8 py-4 rounded border-2 border-white hover:bg-white hover:text-[#00007c] transition-colors'
          >
            ¡LLAMANOS!
          </a>
        </div>

        {/* Mobile Menu Button & Close Button */}
        <div className='z-20 md:hidden flex items-center space-x-4'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-white p-2'
          >
            {isMenuOpen ? (
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
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
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu & Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#00007c] z-20 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end p-4'>
          <button onClick={() => setIsMenuOpen(false)} className='text-white'>
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <div className='flex flex-col items-start pt-8 space-y-6 px-8'>
          <button
            onClick={() => handleScroll('nosotros')}
            className='text-white text-xl hover:text-gray-300'
          >
            Nosotros
          </button>
          <button
            onClick={() => handleScroll('servicios')}
            className='text-white text-xl hover:text-gray-300'
          >
            Servicios
          </button>
          <button
            onClick={() => handleScroll('contacto')}
            className='text-white text-xl hover:text-gray-300'
          >
            Contacto
          </button>
          <a
            href='tel:+542342462874'
            target='_blank'
            className='text-white px-8 py-4 rounded border-2 border-white hover:bg-white hover:text-[#00007c] transition-colors'
          >
            ¡LLAMANOS!
          </a>
        </div>
        {/* Redes Sociales */}
        <div className='flex justify-center gap-6 mt-8 px-8'>
          <a
            href='https://facebook.com/josedecibeagro/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <img
              src={facebook}
              alt='Facebook'
              className='w-14 h-14 brightness-0 invert'
            />
          </a>
          <a
            href='https://www.instagram.com/josedecibeagro'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <img
              src={instagram}
              alt='Instagram'
              className='w-14 h-14 brightness-0 invert'
            />
          </a>
          <a
            href='https://wa.me/542342462874'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <img
              src={whatsapp}
              alt='Whatsapp'
              className='w-10 h-10 mt-2 brightness-0 invert'
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
