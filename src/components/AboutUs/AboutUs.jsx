const AboutUs = () => {
  return (
    <div 
      id='nosotros' 
      className='flex flex-col items-center justify-center w-full py-32 md:h-[calc(100vh-150px)]'
    >
      <h1 className='text-3xl sm:text-4xl text-[#00007c] font-bold mb-4 pb-3 border-b-4 border-[#00007c]'>
        Quiénes Somos
      </h1>
      <p className='text-lg sm:text-xl text-center max-w-2xl'>
        José Decibe Agro es un servicio oficial de pesaje Hook, con años <br />
        de experiencia en el sector agropecuario. Ofrecemos balanzas de precisión
        instalación, soporte técnico y asesoramiento personalizado. <br />
        <strong>🚜 TU PRODUCCIÓN VALE LO QUE PESA.</strong>
      </p>
    </div>
  );
};

export default AboutUs;
