import { useForm } from '@/hooks/useForm';

const ContactForm = () => {

  const { form, handleChange, handleSubmit } = useForm();

  return (
    <div id='contacto' className='flex flex-col justify-center items-center w-full min-h-screen md:min-h-[50vh] py-12 md:py-24 bg-gradient-to-b from-white via-blue-200 to-white'>
      <div className='w-full max-w-2xl p-8 md:p-12 text-center'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-black'>Contáctanos</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Tu Nombre'
            name='name'
            value={form.name}
            onChange={handleChange}
            className='w-full py-3 px-6 border rounded-md bg-white text-gray-600 shadow-sm focus:outline-none'
            required
          />
          <input
            type='text'
            placeholder='Teléfono'
            name='phone'
            value={form.phone}
            onChange={handleChange}
            className='w-full py-3 px-6 border rounded-md bg-white text-gray-600 shadow-sm focus:outline-none'
            required
          />
          <textarea
            placeholder='Mensaje'
            name='message'
            value={form.message}
            onChange={handleChange}
            className='w-full py-3 px-6 border rounded-md bg-white text-gray-600 shadow-sm focus:outline-none h-24'
            required
          />
          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-[#00007c] text-white text-lg sm:text-xl font-bold py-3 px-12 rounded-md border-2 border-white hover:bg-blue-800'
            >
              Enviar Consulta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
