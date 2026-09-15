import { useForm } from '@/hooks/useForm';

const MainHeader = () => {
  const { form, handleChange, handleSubmit, Error } = useForm();

  return (
    <header className='relative flex flex-col md:flex-row w-full min-h-[35vh] md:min-h-[70vh] lg:min-h-screen'>
      {/* Imagen de fondo */}
      <div
        className='absolute inset-0 w-full h-full bg-cover bg-center'
        style={{ backgroundImage: 'url(https://res.cloudinary.com/dspojyokv/image/upload/f_auto,q_auto/imgFondo_qs8ajd.jpg)' }}
      ></div>

      {/* Contenido principal */}
      <div className='relative flex flex-col justify-center w-full md:w-1/2 p-6 md:p-12 lg:p-16'>
        <h1
          className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight'
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          TU PRODUCCIÓN VALE LO QUE PESA
        </h1>
        <p
          className='text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl'
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
        >
          Servicio Oficial Hook, brindamos soluciones de pesaje digital de alta
          precisión.
        </p>
        <div className='flex justify-center sm:justify-start'>
          <a
            href='#contacto'
            className='bg-[#00007c] text-white px-12 py-3 text-lg border-2 border-white rounded hover:bg-white hover:text-[#00007c] transition-colors duration-300'
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Formulario de contacto (oculto en pantallas pequeñas) */}
      <div className='hidden md:flex relative w-full md:w-1/2 justify-center items-center p-6'>
        <div className='bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-md w-full'>
          <h2 className='text-2xl font-bold mb-4'>Contáctanos</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Tu Nombre'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none'
              required
            />
            <input
              type='tel'
              placeholder='Teléfono'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none'
              required
            />
            <textarea
              placeholder='Mensaje'
              name='message'
              value={form.message}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none'
              required
            ></textarea>
            <button
              type='submit'
              onClick={handleSubmit}
              className='w-full bg-[#00007c] text-white p-3 rounded hover:bg-blue-800 transition-colors duration-300'
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;