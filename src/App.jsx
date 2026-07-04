import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Testimonial from './pages/Testimonial';
import PatientResources from './pages/PatientResources';
import ContactUs from './pages/ContactUs';
import BookNow from './pages/BookNow';
import NewPatient from './pages/NewPatient';
import PatientEducation from './pages/PatientEducation';
import Financial from './pages/Financial';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/resources" element={<PatientResources />} />
            <Route path="/new-patient" element={<NewPatient />} />
            <Route path="/patient-education" element={<PatientEducation />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/book-now" element={<BookNow />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
