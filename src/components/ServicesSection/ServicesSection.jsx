import { services } from './services';

const ServicesSection = () => {
  return (
    <div id='servicios' className='bg-gray-200 w-full min-h-screen flex flex-col items-center justify-center py-24'>
      <h1
        className='text-4xl text-[#00007c] font-bold pb-3 border-b-4 border-[#00007c] inline-block mt-0 mb-0'
      >
        Nuestros Servicios
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-4/5 mt-4'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-white w-full h-auto shadow-lg flex flex-col'
          >
            <img
              src={service.image}
              alt={service.title}
              className='w-full h-48 object-cover'
            />
            <h2 className='bg-blue-900 text-white text-center py-2 w-full'>
              {service.title} <br /> {service.subTitle}
            </h2>
            <p className='px-4 py-5 text-center flex-grow'>{service.description}</p>
            <a 
              href='#contacto' 
              className='bg-[#00007c] text-white font-bold text-center px-6 py-2 w-32 mx-auto mb-4 hover:bg-blue-800 transition duration-300'
            >
              Contactar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
