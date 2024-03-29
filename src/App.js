import './App.css';
import CardSection from './components/CardSection';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailRegistrationModal from './components/EmailRegistrationModal';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/jobs" element={<CardSection />} />
          <Route path='/email-registration' element={<EmailRegistrationModal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;