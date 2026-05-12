import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, User, Facebook, Instagram, Twitter, ChevronRight, X, ArrowRight } from 'lucide-react';

const products = [
  { id: 1, name: 'Deshi Denim Cargo Baggy Pants', price: 'BDT 1549', category: "Men's FW/26", image: 'https://images.unsplash.com/photo-1624378439575-d1ead6bb17f8?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Streetwear Retro Wash Jeans', price: 'BDT 1249', category: "Men's FW/26", image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Dhaka Vibe Relaxed Trousers', price: 'BDT 1399', category: "Men's FW/26", image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Premium Tailored Beige Pants', price: 'BDT 1699', category: "Men's FW/26", image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Deshi Street Baggy Pants (Black)', price: 'BDT 1249', category: "Streetwear Fits", image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Premium Oversized Tee', price: 'BDT 849', category: "Men's FW/26", image: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?auto=format&fit=crop&q=80&w=600' },
  { id: 7, name: 'Urban Chic Flowy Pants', price: 'BDT 1899', category: "Women's Collection", image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600' },
  { id: 8, name: 'Deshi Cotton Kurti Top', price: 'BDT 1699', category: "Women's Collection", image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600' },
];

const categories = [
  { id: 1, name: "Men's FW/26", items: '120+ items', image: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: "Women's Collection", items: '150+ items', image: 'https://images.unsplash.com/photo-1550614000-4b95dd244af9?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Streetwear Fits', items: '85+ items', image: 'https://images.unsplash.com/photo-1617251137884-f135eccf6942?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Accessories', items: '40+ items', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600' },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col font-sans overflow-x-hidden selection:bg-black selection:text-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-[10px] md:text-xs py-2 text-center tracking-[0.2em] uppercase font-medium relative z-50">
        Free Worldwide Shipping on orders over BDT 2000 ✨
      </div>

      {/* Navigation (Glassmorphism) */}
      <nav className={`fixed top-8 w-full z-40 transition-all duration-300 px-4 md:px-8 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className={`max-w-7xl mx-auto rounded-2xl md:rounded-full border border-white/40 shadow-lg shadow-black/5 transition-all duration-500 overflow-hidden
          ${scrolled ? 'bg-white/80 backdrop-blur-xl' : 'bg-white/60 backdrop-blur-lg'}`}>
          <div className="flex justify-between items-center h-16 md:h-20 px-4 sm:px-6 lg:px-8">
            
            {/* Left Menu / Mobile */}
            <div className="flex items-center flex-1">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 text-neutral-600 hover:text-black md:hidden transition-colors"
                aria-label="Open Menu"
              >
                <Menu strokeWidth={1.5} size={24} />
              </button>
              <div className="hidden md:flex space-x-8 text-[11px] uppercase tracking-[0.15em] font-medium text-neutral-600">
                <a href="#" className="hover:text-black transition-colors relative group">
                  Men's FW/26
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="hover:text-black transition-colors relative group">
                  Women's Collection
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="hover:text-black transition-colors relative group">
                  Streetwear Fits
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1">
              <a href="#" className="flex flex-col items-center group">
                <span className="text-xl md:text-3xl font-black tracking-tighter text-black">
                  AB FASSIONS
                </span>
              </a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 md:space-x-6 flex-1 justify-end">
              <button className="p-2 text-neutral-600 hover:text-black transition-transform hover:scale-110 hidden sm:block">
                <Search strokeWidth={1.5} size={20} />
              </button>
              <button className="p-2 text-neutral-600 hover:text-black transition-transform hover:scale-110 hidden sm:block">
                <User strokeWidth={1.5} size={20} />
              </button>
              <button className="p-2 text-neutral-600 hover:text-black relative transition-transform hover:scale-110">
                <ShoppingBag strokeWidth={1.5} size={20} />
                <span className="absolute top-1 right-1 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white/80">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Glassmorphism) */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`relative flex flex-col w-[85%] max-w-sm h-full bg-white/90 backdrop-blur-2xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-neutral-200/50">
            <span className="text-sm uppercase tracking-[0.2em] font-bold">AB FASSIONS</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-neutral-500 hover:text-black bg-neutral-100 rounded-full transition-colors">
              <X strokeWidth={1.5} size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto w-full">
            <nav className="p-6 flex flex-col space-y-2 text-xs uppercase tracking-[0.1em] font-semibold">
              <a href="#" className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-100 transition-colors">Men's FW/26 <ChevronRight strokeWidth={2} size={16} className="text-neutral-400 group-hover:text-black"/></a>
              <a href="#" className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-100 transition-colors">Women's Collection <ChevronRight strokeWidth={2} size={16} className="text-neutral-400"/></a>
              <a href="#" className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-100 transition-colors">Streetwear Fits <ChevronRight strokeWidth={2} size={16} className="text-neutral-400"/></a>
              <a href="#" className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-100 transition-colors">Accessories <ChevronRight strokeWidth={2} size={16} className="text-neutral-400"/></a>
              
              <div className="pt-8 mt-4 border-t border-neutral-200/50 space-y-4">
                <a href="#" className="flex items-center gap-3 p-4 text-neutral-500 hover:text-black transition-colors rounded-xl hover:bg-neutral-50"><User size={18}/> My Account</a>
                <a href="#" className="flex items-center gap-3 p-4 text-neutral-500 hover:text-black transition-colors rounded-xl hover:bg-neutral-50"><Search size={18}/> Search Products</a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Modern Hero Section */}
      <div className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative aspect-[3/4] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000" 
              alt="Fashion Models Winter Collection" 
              className="w-full h-full object-cover object-[center_30%]"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="max-w-2xl text-left transform translate-y-0 transition-transform duration-1000 slide-up">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] tracking-[0.2em] uppercase font-semibold">
                  New Season Arrived
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-white mb-6 font-serif">
                  The Modern<br/>Wardrobe.
                </h1>
                <p className="text-sm md:text-base leading-relaxed text-neutral-200 font-medium max-w-md mb-8">
                  Redefining everyday aesthetics with contemporary silhouettes for him and her.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#products" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full text-[11px] uppercase tracking-[0.1em] font-bold hover:bg-neutral-200 transition-all">
                    Shop Collection 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                  </a>
                  <a href="#categories" className="flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[11px] uppercase tracking-[0.1em] font-bold hover:bg-white/20 transition-all">
                    Explore Looks
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Modern Categories Grid */}
        <section id="categories" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Curated Style.</h2>
                <p className="text-neutral-500 font-medium max-w-md">Browse our latest drops carefully separated into your favorite styles.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <a key={category.id} href="#" className="group relative rounded-[2rem] overflow-hidden aspect-square block">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="self-end bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] px-3 py-1 rounded-full font-medium">
                      {category.items}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{category.name}</h3>
                      <div className="flex items-center gap-2 text-white/80 text-xs font-semibold group-hover:text-white transition-colors">
                        View Items <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Product Cards Grid - Glass Glassmorphism Theme */}
        <section id="products" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-100">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-end justify-between mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Trending Now.</h2>
              <a href="#" className="hidden sm:inline-block pb-1 border-b-2 border-black text-sm font-bold hover:text-neutral-500 hover:border-neutral-500 transition-colors">View All Products</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <div key={product.id} className="group relative bg-white/50 backdrop-blur-sm border border-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300">
                  <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 bg-neutral-200">
                    {/* Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border border-white/50">
                        {product.category}
                      </span>
                    </div>
                    
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    />
                    
                    {/* Add to Cart Overlay Button */}
                    <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                      <button className="w-full bg-white/90 backdrop-blur-md shadow-lg text-black py-3.5 rounded-xl text-xs font-bold hover:bg-black hover:text-white transition-colors border border-white/50">
                        Add to Bag
                      </button>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-sm font-bold text-neutral-900 leading-tight">
                        <a href="#" className="hover:underline">{product.name}</a>
                      </h3>
                      <p className="text-sm font-black whitespace-nowrap">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter / CTA Section (Glassmorphism) */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-900">
          {/* Abstract background blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative max-w-3xl mx-auto px-6 text-center z-10">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">Stay Updated.</h2>
              <p className="text-neutral-400 mb-10 max-w-md mx-auto font-medium">
                Subscribe for exclusive drops, early access to sales, and editorial content directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-neutral-400 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium text-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Info */}
            <div className="col-span-1 md:col-span-5 pr-0 md:pr-12">
              <a href="#" className="flex flex-col items-start gap-1 mb-6">
                <span className="text-3xl font-black tracking-tighter text-black">AB FASSIONS</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">Premium Apparel</span>
              </a>
              <p className="text-sm font-medium text-neutral-500 max-w-sm leading-relaxed mb-8">
                Pioneering the intersection of minimalist aesthetic and modern streetwear. Ethically made for the conscious consumer.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all"><Facebook size={18} fill="currentColor" className="border-none"/></a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all"><Twitter size={18} fill="currentColor" strokeWidth={0}/></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-bold text-black mb-6 tracking-wider">Shop</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-500">
                <li><a href="#" className="hover:text-black transition-colors">Men's Collection</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Women's Collection</a></li>
                <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Accessories</a></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="font-bold text-black mb-6 tracking-wider">Support</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-500">
                <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1 md:col-span-3">
              <h4 className="font-bold text-black mb-6 tracking-wider">Contact Us</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a href="tel:+8801568298331" className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors text-neutral-700">
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-lg">📞</span>
                    <span className="font-bold">+880 1568 298331</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:abfly.cargo@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors text-neutral-700">
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-lg">✉️</span>
                    <span className="font-bold">abfly.cargo@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-neutral-500">
            <div>
              &copy; {new Date().getFullYear()} AB FASSIONS. All rights reserved.
            </div>
            <div className="flex gap-6">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Site Secure</span>
              <span>Made in Bangladesh</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

