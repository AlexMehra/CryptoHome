// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import {Routes, Route} from "react-router-dom"
// import Home from "./pages/Home/Home"
// import Coin from "./pages/Coin/Coin"
// import Footer from './components/Footer/Footer'
// import BlogPage from './pages/Blog/BlogPage'


// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/coin/:coinId' element={<Coin />}/>
//         <Route path="/blog" element={<BlogPage />} />
        
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

// export default App






import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from './components/Footer/Footer';

// Lazy loading for Coin and BlogPage
const Coin = React.lazy(() => import('./pages/Coin/Coin'));
const BlogPage = React.lazy(() => import('./pages/Blog/BlogPage'));

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Suspense fallback={<div className="spinner">Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:coinId' element={<Coin />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* 404 Not Found Route */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
