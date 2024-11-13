import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  User, 
  Search, 
  Menu, 
  X, 
  Heart, 
  MapPin, 
  ChevronDown 
} from 'lucide-react';

interface MenuItem {
  label: string;
  items: {
    category: string;
    links: string[];
  }[];
}

const menMenu: MenuItem = {
  label: "Men",
  items: [
    {
      category: "Top Wear",
      links: [
        "Shirts & Shackets",
        "T-Shirts",
        "Jackets",
        "Polos",
        "Hoodies & Sweatshirts",
        "Sweatshirts",
        "Shirts",
        "Polo"
      ]
    },
    {
      category: "Bottom Wear",
      links: [
        "Pants & Trousers",
        "Shorts",
        "Cargos & Parachutes",
        "Jeans",
        "Joggers & Sweatpants",
        "Track Pants"
      ]
    },
    {
      category: "Athleisure",
      links: [
        "Joggers",
        "T-Shirts",
        "Tanks",
        "Sleepwear",
        "Co-ords"
      ]
    },
    {
      category: "Innerwear",
      links: [
        "Briefs & Trunks",
        "Co-ords"
      ]
    }
  ]
};

const womenMenu: MenuItem = {
  label: "Women",
  items: [
    {
      category: "Top Wear",
      links: [
        "T-Shirts",
        "Cardigans & Shrugs",
        "Bustiers & Corsets",
        "Tops",
        "Shirts & Shackets",
        "Bodysuits",
        "Jackets"
      ]
    },
    {
      category: "Bottom Wear",
      links: [
        "Shorts",
        "Jeans",
        "Pants & Trousers",
        "Skirts",
        "Skorts",
        "Joggers & Sweatpants"
      ]
    },
    {
      category: "Dresses",
      links: [
        "Bodycon",
        "Midi",
        "Mini",
        "Maxi"
      ]
    },
    {
      category: "Innerwear",
      links: [
        "Bra & Camisoles",
        "Shapewears",
        "Bottoms & Panties"
      ]
    }
  ]
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulating location detection
    setTimeout(() => {
      setUserLocation("123 Main St, New York, NY 10001");
    }, 1000);
  }, []);

  const renderMegaMenu = (menu: MenuItem) => (
    <div 
      className="absolute left-0 w-full bg-white shadow-lg border-t"
      onMouseEnter={() => setActiveMenu(menu.label)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-8">
          {menu.items.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-medium text-gray-900 mb-4">{section.category}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-sm text-gray-600 hover:text-black">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Location Bar */}
        <div className="py-2 border-b text-sm flex items-center justify-center text-gray-600">
          <MapPin size={16} className="mr-2" />
          <span>Delivering to: {userLocation || "Detecting location..."}</span>
          <span className="ml-2 text-black font-medium">30 min delivery</span>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-light tracking-wider">TRYN<span className="font-medium">STYLE</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("Men")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="nav-link flex items-center">
                Men
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeMenu === "Men" && renderMegaMenu(menMenu)}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("Women")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="nav-link flex items-center">
                Women
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeMenu === "Women" && renderMegaMenu(womenMenu)}
            </div>

            <a href="#kids" className="nav-link">Kids</a>
            <a href="#home-trial" className="nav-link">Home Trial</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/5 w-64"
              />
            </div>
            
            <button className="hover:text-gray-600">
              <Heart size={20} />
            </button>
            
            <div className="relative group">
              <button className="hover:text-gray-600">
                <User size={20} />
              </button>
              <div className="absolute right-0 w-64 bg-white shadow-lg rounded-lg mt-2 py-2 hidden group-hover:block">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm text-gray-600">Welcome!</p>
                  <div className="flex gap-2 mt-2">
                    <button className="text-sm px-4 py-1 bg-black text-white rounded-full">Login</button>
                    <button className="text-sm px-4 py-1 border border-black rounded-full">Sign Up</button>
                  </div>
                </div>
                <a href="#orders" className="block px-4 py-2 text-sm hover:bg-gray-50">Orders</a>
                <a href="#home-trial" className="block px-4 py-2 text-sm hover:bg-gray-50">Home Trial</a>
                <a href="#wishlist" className="block px-4 py-2 text-sm hover:bg-gray-50">Wishlist</a>
                <a href="#profile" className="block px-4 py-2 text-sm hover:bg-gray-50">Profile</a>
              </div>
            </div>
            
            <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors">
              <ShoppingBag size={20} />
              <span>Try Now</span>
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-700 p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-4 py-6 space-y-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg bg-gray-100"
              />
            </div>
            <a href="#new-arrivals" className="block py-2">New Arrivals</a>
            <a href="#women" className="block py-2">Women</a>
            <a href="#men" className="block py-2">Men</a>
            <a href="#kids" className="block py-2">Kids</a>
            <a href="#home-trial" className="block py-2">Home Trial</a>
            <div className="pt-4 border-t flex gap-2">
              <button className="flex-1 bg-black text-white py-2 rounded-full">
                Login
              </button>
              <button className="flex-1 border border-black py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}