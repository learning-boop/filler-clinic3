import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TreatmentsPage from './pages/TreatmentsPage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqIndexPage from './pages/FaqIndexPage';
import LipFillersFaqPage from './pages/LipFillersFaqPage';
import JawlineChinFaqPage from './pages/JawlineChinFaqPage';
import CheekFillersFaqPage from './pages/CheekFillersFaqPage';
import TearTroughFaqPage from './pages/TearTroughFaqPage';
import SkinAntiAgeingFaqPage from './pages/SkinAntiAgeingFaqPage';
import CostPricingFaqPage from './pages/CostPricingFaqPage';
import SafetyRecoveryFaqPage from './pages/SafetyRecoveryFaqPage';
import TreatmentComparisonsFaqPage from './pages/TreatmentComparisonsFaqPage';
import LocationPage from './pages/LocationPage';
import ComparePage from './pages/ComparePage';
import ConcernPage from './pages/ConcernPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bone text-onyx">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* FAQ routes */}
          <Route path="/faq" element={<FaqIndexPage />} />
          <Route path="/faq/lip-fillers" element={<LipFillersFaqPage />} />
          <Route path="/faq/jawline-chin" element={<JawlineChinFaqPage />} />
          <Route path="/faq/cheek-fillers" element={<CheekFillersFaqPage />} />
          <Route path="/faq/tear-trough" element={<TearTroughFaqPage />} />
          <Route path="/faq/skin-anti-ageing" element={<SkinAntiAgeingFaqPage />} />
          <Route path="/faq/cost-pricing" element={<CostPricingFaqPage />} />
          <Route path="/faq/safety-recovery" element={<SafetyRecoveryFaqPage />} />
          <Route path="/faq/treatment-comparisons" element={<TreatmentComparisonsFaqPage />} />
          {/* SEO landing pages */}
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/compare/:slug" element={<ComparePage />} />
          <Route path="/concerns/:slug" element={<ConcernPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}