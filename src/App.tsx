
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';
import CompanySection from './sections/CompanySection';
import ValuesSection from './sections/ValuesSection';
import DevelopmentApproach from './sections/DevelopmentApproach';
import EditorialStory from './sections/EditorialStory';
import CompanyInfoSection from './sections/CompanyInfoSection';
import ContactSection from './sections/ContactSection';
import NotFoundPage from './pages/NotFoundPage';

const HomePage = () => {
  return (
    <main className="w-full relative">
      <HeroSection />
      <IntroSection />
      <CompanySection />
      <ValuesSection />
      <DevelopmentApproach />
      <EditorialStory />
      <CompanyInfoSection />
      <ContactSection />
    </main>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
