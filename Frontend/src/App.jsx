import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { CssBaseline } from '@mui/material';
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Service from './Pages/Service';
import Testimonials from './Pages/Testimonials';
import Blog from './Pages/Blog';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact';
import Login from './Pages/Login';



const App = () => {
  return (
    <>
     <CssBaseline />
     <ThemeProvider theme={theme}>
    <Router>
      <div className='px-4 sm:px-6 md:px-10 min-h-screen flex flex-col'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/testimonials" element={<Testimonials/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
      
    </Router>
    </ThemeProvider>
    </>
    
   
  )
}

export default App