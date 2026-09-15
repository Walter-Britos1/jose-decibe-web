import NavBar from '@/components/NavBar/NavBar';
import MainHeader from '@/components/MainHeader/MainHeader';
import AboutUs from '@/components/AboutUs/AboutUs';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import WorkPerformed from '@/components/WorkPerformed/WorkPerformed';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';
import BackToTopButton from '@/components/BackToTopButton/BackToTopButton';

function App() {
  return (
    <>
      <NavBar />
      <MainHeader />
      <AboutUs />
      <ServicesSection />
      <WorkPerformed />
      <ContactForm />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
