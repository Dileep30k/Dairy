import React from 'react';
import { Milk, Cookie, ShoppingCart, Phone, Mail, MapPin, Truck, Clock, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80"
            alt="Fresh milk splash"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <Milk className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">DK DairyFarm</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#products" className="text-white hover:text-gray-200">Products</a>
            <a href="#benefits" className="text-white hover:text-gray-200">Benefits</a>
            <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
            <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart (0)</span>
            </button>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Fresh From Farm to Your Table
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Experience the goodness of pure, farm-fresh milk and dairy products delivered right to your doorstep
          </p>
          <a href="#products" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </a>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Fresh Milk",
              price: "$3.99/L",
              image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80",
              description: "Pure and fresh cow's milk, straight from our farm"
            },
            {
              name: "Natural Curd",
              price: "$2.99/500g",
              image: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80",
              description: "Creamy and thick curd made from fresh milk"
            },
            {
              name: "Butter",
              price: "$4.99/250g",
              image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80",
              description: "Hand-churned butter from pure cream"
            }
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="h-8 w-8" />,
                title: "Free Delivery",
                description: "Free delivery on orders above $20"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Fresh Daily",
                description: "Products delivered fresh every morning"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Quality Assured",
                description: "100% quality guarantee on all products"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6" />
                  <span>contact@freshdairy.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6" />
                  <span>123 Dairy Farm Road, Countryside</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Milk className="h-8 w-8" />
            <span className="text-2xl font-bold">FreshDairy</span>
          </div>
          <div className="text-center md:text-right">
            <p>© 2024 FreshDairy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;