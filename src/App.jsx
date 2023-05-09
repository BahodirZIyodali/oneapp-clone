import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Companies from './pages/Companies/index.jsx';
import JobLists from './pages/Vacancies/JobLists';
import JobDetails from './pages/Vacancies/JobDetails';
import Internship from './pages/Internship';
import Employer from './pages/Hiring';
import Resume from './pages/Resume';
import About from './pages/About';
import Articles from './pages/Articles';
import Faq from './pages/Faq';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Register from './pages/Register';

const App = () => {
  const [hasToken, setHasToken] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setHasToken(true);
  //   }
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/vacancies" element={<JobLists />} />
        <Route path="/jobs/:position" element={<JobDetails />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/employer-home" element={<Employer />} />
        <Route path="/resume-builder" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {hasToken ? (
          <Route path="/register" element={<Navigate to="/" />} />
        ) : (
          <Route path="/register" element={<Register />} />
        )}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
