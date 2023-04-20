import React from 'react' ;
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Companies from "./pages/Companies/index.jsx";
import JobLists from './pages/Vacancies/JobLists';
import JobDetails from './pages/Vacancies/JobDetails';
import Internship from './pages/Internship';
import Employer from './pages/Hiring'
import Resume from './pages/Resume'
import About from './pages/About'


const App = () => {
  return (
    <>
      <Navbar/>
       <Routes>
          <Route index element={<Home />} />
          <Route path="/vacancies" element={<JobLists />} />
         <Route path="/jobs/:position" element={<JobDetails />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/employer-home" element={<Employer />} />
          <Route path="/resume-builder" element={<Resume />} />
          <Route path="/about" element={<About />} />
      </Routes>
      <Footer />


    



    </>
  );
};

export default App;