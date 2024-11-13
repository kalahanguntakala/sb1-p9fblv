import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import Features from './components/Features';
import Brands from './components/Brands';
import Footer from './components/Footer';
import ProductListingPage from './pages/ProductListingPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ProductListingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;