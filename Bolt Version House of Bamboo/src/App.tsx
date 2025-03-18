import React, { useState } from 'react';
import { Menu, X, Clock, MapPin, Phone, Cocktail, ChefHat, Lantern } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bamboo-dark text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-bamboo-dark/95 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Lantern className="h-8 w-8 text-bamboo-gold" />
              <span className="ml-2 text-2xl font-display text-bamboo-gold">House of Bamboo</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-bamboo-gold transition">About</a>
              <a href="#menu" className="text-white hover:text-bamboo-gold transition">Menu</a>
              <a href="#reservations" className="text-white hover:text-bamboo-gold transition">Reservations</a>
              <a href="#contact" className="text-white hover:text-bamboo-gold transition">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-white hover:text-bamboo-gold">About</a>
              <a href="#menu" className="block px-3 py-2 text-white hover:text-bamboo-gold">Menu</a>
              <a href="#reservations" className="block px-3 py-2 text-white hover:text-bamboo-gold">Reservations</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-bamboo-gold">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1610237143376-3b849e6cdf9d?auto=format&fit=crop&q=80"
            alt="Atmospheric bar interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-display text-bamboo-gold mb-4">
              The House of Bamboo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              An intimate Asian fusion experience in the heart of the city
            </p>
            <a 
              href="#reservations"
              className="inline-block bg-bamboo-gold text-bamboo-dark px-8 py-3 rounded-md font-semibold hover:bg-bamboo-gold/90 transition"
            >
              Make a Reservation
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-bamboo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display text-bamboo-gold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Nestled in the basement of a historic building, The House of Bamboo offers an intimate escape into a world of Asian fusion cuisine and craft cocktails. Our space combines traditional Asian design elements with modern sophistication.
              </p>
              <p className="text-gray-300">
                Each dish and cocktail tells a story, bringing together flavors from across Asia with contemporary techniques and local ingredients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80" 
                alt="Signature cocktail"
                className="rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80" 
                alt="Asian fusion dish"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bamboo-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Cocktail className="h-12 w-12 text-bamboo-gold mx-auto mb-4" />
              <h3 className="text-xl font-display text-bamboo-gold mb-2">Craft Cocktails</h3>
              <p className="text-gray-300">Innovative cocktails featuring Asian spirits and ingredients</p>
            </div>
            <div className="text-center">
              <ChefHat className="h-12 w-12 text-bamboo-gold mx-auto mb-4" />
              <h3 className="text-xl font-display text-bamboo-gold mb-2">Asian Fusion</h3>
              <p className="text-gray-300">Contemporary takes on traditional Asian cuisine</p>
            </div>
            <div className="text-center">
              <Lantern className="h-12 w-12 text-bamboo-gold mx-auto mb-4" />
              <h3 className="text-xl font-display text-bamboo-gold mb-2">Intimate Atmosphere</h3>
              <p className="text-gray-300">Sophisticated basement venue with authentic ambiance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-bamboo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display text-bamboo-gold mb-4">Visit Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-bamboo-gold mx-auto mb-4" />
              <h3 className="text-xl text-bamboo-gold mb-2">Location</h3>
              <p className="text-gray-300">123 Downtown Street<br />City, State 12345</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-bamboo-gold mx-auto mb-4" />
              <h3 className="text-xl text-bamboo-gold mb-2">Hours</h3>
              <p className="text-gray-300">
                Tuesday - Sunday<br />
                5:00 PM - 2:00 AM
              </p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-bamboo-gold mx-auto mb-4" />
              <h3 className="text-xl text-bamboo-gold mb-2">Contact</h3>
              <p className="text-gray-300">
                (555) 123-4567<br />
                info@houseofbamboo.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} The House of Bamboo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;