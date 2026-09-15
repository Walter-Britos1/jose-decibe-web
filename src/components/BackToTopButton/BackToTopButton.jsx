import { useBackToTopButton } from '@/hooks/useBackToTopButton';
import arrowTop from '@/img/arrowTop.svg';

const BackToTopButton = () => {
  const { isVisible, scrollToTop } = useBackToTopButton();

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label='Volver al inicio'
          className='fixed bottom-8 right-8 bg-gray-500 hover:bg-gray-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 active:translate-y-0 z-50'
        >
          <img src={arrowTop} alt='Volver al inicio' className='w-6 h-6' />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;