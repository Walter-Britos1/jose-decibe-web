import logo from '@/img/logo-vertical.svg';
import telefono from '@/img/telefono.svg';
import correo from '@/img/correo.svg';
import ubicacion from '@/img/ubicacion.svg';
import facebook from '@/img/facebook.svg';
import instagram from '@/img/instagram.svg';
import whatsapp from '@/img/whatsapp.svg';

const Footer = () => {
  return (
    <>
      <footer className='bg-[#00007c] w-full py-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 text-center md:text-left'>
          {/* Logo Column */}
          <div className='flex justify-center md:justify-start items-center'>
            <img src={logo} alt='Logo' className='max-w-[250px]' />
          </div>

          {/* Contact Information Column */}
          <div className='flex flex-col items-center md:items-start gap-6 text-white text-lg'>
            <div className='flex items-center gap-4'>
              <img
                src={telefono}
                alt='Telefono'
                className='w-12 h-12 brightness-0 invert'
              />
              <a href='tel:+542342462874' className='hover:text-gray-300'>
                +54 2342 46-2874
              </a>
            </div>

            <div className='flex items-center gap-4'>
              <img
                src={correo}
                alt='Correo'
                className='w-12 h-12 brightness-0 invert'
              />
              <a
                href='mailto:jdtecnologiaagropecuaria@gmail.com'
                className='hover:text-gray-300'
              >
                jdtecnologiaagropecuaria@gmail.com
              </a>
            </div>

            <div className='flex items-center gap-4'>
              <img
                src={ubicacion}
                alt='Ubicacion'
                className='w-12 h-12 brightness-0 invert'
              />
              <a
                href='https://maps.google.com/?q=Bragado,Argentina'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-300'
              >
                Bragado, Argentina
              </a>
            </div>
          </div>

          {/* Social Media Column */}
          <div className='flex flex-col items-center gap-6'>
            <p className='text-white text-4xl font-semibold'>Redes Sociales</p>
            <div className='flex gap-6'>
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
        </div>
      </footer>

      {/* Copyright */}
      <div className='text-center py-4 bg-[#00005c]'>
        <p className='text-white text-sm'>
          © 2025 JOSÉ DECIBE TECNOLOGÍA AGROPECUARIA. TODOS LOS DERECHOS
          RESERVADOS By{' '}
          <a
            href='https://sinag.online/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            SINAG
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Footer;
