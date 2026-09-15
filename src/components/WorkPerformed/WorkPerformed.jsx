import { useCarousel } from '@/hooks/useCarousel';
const image1 =
  'https://res.cloudinary.com/dspojyokv/image/upload/f_auto,q_auto/Post_1_1_xvgqyi.jpg';
const image2 =
  'https://res.cloudinary.com/dspojyokv/image/upload/f_auto,q_auto/Post_2_szfgcx.jpg';
const image3 =
  'https://res.cloudinary.com/dspojyokv/image/upload/f_auto,q_auto/Post_3_g1tble.jpg';
const image4 =
  'https://res.cloudinary.com/dspojyokv/image/upload/f_auto,q_auto/Post_sem_5.1_cclpm3.jpg';
const image5 =
  'https://res.cloudinary.com/dspojyokv/image/upload/f_auto,q_auto/Post_2_szfgcx.jpg';
const image6 =
  'https://res.cloudinary.com/dspojyokv/image/upload/f_auto,q_auto/Post_sem_8.2_trbh68.jpg';
const image7 =
  'https://res.cloudinary.com/dspojyokv/image/upload/f_auto,q_auto/Post_sem_9.2_v341ca.jpg';
const image8 =
  'https://res.cloudinary.com/dspojyokv/image/upload/f_auto,q_auto/Post_sem_6.1_mticxa.jpg';
import arrowLeft from '@/img/arrowLeft.svg';
import arrowRight from '@/img/arrowRight.svg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const WorkPerformed = () => {
  const {
    containerRef,
    handleStart,
    handleMove,
    handleEnd,
    calculateStyles,
    handlePrev,
    handleNext,
  } = useCarousel(images);

  return (
    <section className='py-20 flex flex-col items-center justify-center'>
      <div className='text-center'>
        <h2 className='text-[#00007c] text-4xl font-bold py-3 border-b-4 border-[#00007c] inline-block'>
          Trabajos Realizados
        </h2>
      </div>

      <div className='relative w-full'>
        <div
          className='m-10 relative w-full h-[500px] mx-auto flex justify-center items-center overflow-hidden'
          ref={containerRef}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          onMouseDown={handleStart}
          onMouseMove={(e) => {
            handleMove(e);
          }}
          onMouseUp={handleEnd}
          onMouseLeave={(e) => {
            handleEnd(e);
          }}
        >
          {images.map((item, index) => (
            <div
              key={index}
              className='absolute w-[20rem] h-[20rem] transition-all duration-500 shadow-lg overflow-hidden'
              style={calculateStyles(index)}
            >
              <div className='relative w-full h-full'>
                <div
                  className='absolute inset-0 bg-cover bg-center'
                  style={{
                    backgroundImage: `url(${item})`,
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={handlePrev}
          className='absolute top-1/2 left-[10%] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-50 hidden md:block'
          aria-label='Anterior imagen'
        >
          <img src={arrowLeft} alt='Anterior' className='w-6 h-6' />
        </button>
        <button
          onClick={handleNext}
          className='absolute top-1/2 right-[10%] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-50 hidden md:block'
          aria-label='Siguiente imagen'
        >
          <img src={arrowRight} alt='Siguiente' className='w-6 h-6' />
        </button>
      </div>
    </section>
  );
};

export default WorkPerformed;
