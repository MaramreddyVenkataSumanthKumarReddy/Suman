import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(countdown);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        if (seconds === 0) {
          if (minutes === 0) {
            return { hours: hours - 1, minutes: 59, seconds: 59 };
          } else {
            return { ...prev, minutes: minutes - 1, seconds: 59 };
          }
        } else {
          return { ...prev, seconds: seconds - 1 };
        }
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  // Sample offers data
  const offers = [
    {
      id: 1,
      title: "Summer Special",
      discount: "40% OFF",
      description: "On all summer collections",
      category: "womens",
      image: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg",
    },
    {
      id: 2,
      title: "Weekend Sale",
      discount: "Buy 1 Get 1 Free",
      description: "On selected men's wear",
      category: "mens",
      image: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
    },
    {
      id: 3,
      title: "Back to School",
      discount: "30% OFF",
      description: "On kids' school wear",
      category: "kids",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Background Image Div - Fixed Position */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg')",
        }}
      ></div>

      {/* Content Container - Relative Position */}
      <div className="relative z-10">
        {/* Sale Banner */}
        <div className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 text-white py-2 px-4 text-center text-sm font-semibold shadow-md">
          🎉 Grand Sale! Get up to 50% OFF – Ends in ⏳ {formatTime(timeLeft.hours)}:
          {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </div>

        {/* Main Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-fashion-show-on-a-catwalk-4745-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="relative max-w-6xl mx-auto px-4 w-full">
            <Carousel
              autoPlay
              infiniteLoop
              interval={3000}
              showThumbs={false}
              showStatus={false}
              showArrows={true}
              stopOnHover={false}
              className="rounded-xl overflow-hidden shadow-lg mb-8"
            >
              {["Mens Wear", "Womens Wear", "Kids Wear"].map((label, i) => (
                <div
                  key={label}
                  className="h-[400px] md:h-[500px] w-full bg-white flex items-center justify-center relative"
                >
                  <img
                    src={
                      i === 0
                        ? "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
                        : i === 1
                        ? "https://images.pexels.com/photos/6311612/pexels-photo-6311612.jpeg"
                        : "https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg"
                    }
                    alt={label}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    50% OFF
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded">
                    {label}
                  </div>
                </div>
              ))}
            </Carousel>

            <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-2xl shadow-lg text-center">
              <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to S Fashions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Your one-stop shop for the latest fashion in Mens, Womens, and Kids collections.
              </p>
              <Link
                to="/mens"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        {/* Category Banners Section */}
        <section className="py-16 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Shop By Category</h2>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore our wide range of fashionable collections for every member of your family
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mens Banner */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-500 transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
                    alt="Mens Collection"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 via-transparent to-transparent">
                    <div className="text-center p-6 mt-auto">
                      <h3 className="text-2xl font-bold text-white mb-2">Mens Collection</h3>
                      <Link
                        to="/mens"
                        className="inline-block bg-white text-gray-800 px-6 py-2 rounded font-medium hover:bg-gray-200 transition"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Womens Banner */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-gray-200 hover:border-pink-500 transition-all duration-300">
                  <img
                    src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg"
                    alt="Womens Collection"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 via-transparent to-transparent">
                    <div className="text-center p-6 mt-auto">
                      <h3 className="text-2xl font-bold text-white mb-2">Womens Collection</h3>
                      <Link
                        to="/womens"
                        className="inline-block bg-white text-gray-800 px-6 py-2 rounded font-medium hover:bg-gray-200 transition"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Kids Banner */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg border-2 border-gray-200 hover:border-yellow-500 transition-all duration-300">
                  <img
                    src="https://wallpapercave.com/wp/wp11499505.jpg"
                    alt="Kids Collection"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 via-transparent to-transparent">
                    <div className="text-center p-6 mt-auto">
                      <h3 className="text-2xl font-bold text-white mb-2">Kids Collection</h3>
                      <Link
                        to="/kids"
                        className="inline-block bg-white text-gray-800 px-6 py-2 rounded font-medium hover:bg-gray-200 transition"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="py-16 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Special Offers</h2>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Don't miss out on these exclusive deals for our valued customers
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offers.map((offer) => (
                  <div key={offer.id} className="relative overflow-hidden rounded-xl shadow-lg group border-2 border-gray-200 hover:border-purple-500 transition-all duration-300">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                        {offer.discount}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-1">{offer.title}</h3>
                      <p className="text-white mb-4">{offer.description}</p>
                      <Link
                        to={`/${offer.category}`}
                        className="inline-block bg-white text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition"
                      >
                        Shop {offer.category}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Limited Time Offer Banner */}
        <section className="py-12 bg-gradient-to-r from-pink-600 to-green-600 text-white relative rounded-xl mx-4 shadow-xl">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h2 className="text-3xl font-bold mb-4">🔥 Limited Time Offer!</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Flat 50% OFF for new customers. Don't miss out on the best styles at half the price!
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/signup"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                >
                  Sign Up & Save Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 relative mt-16 rounded-t-3xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">S Fashions</h2>
              <p className="text-gray-300">
                Your one-stop shop for trendy fashion for Men, Women, and Kids.
              </p>
              <div className="flex space-x-4 mt-4">
                {['facebook', 'twitter', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">{social}</span>
                    <i className={`fab fa-${social} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Mens', path: '/mens' },
                  { name: 'Womens', path: '/womens' },
                  { name: 'Kids', path: '/kids' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-300 hover:text-white transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <address className="text-gray-300 not-italic">
                <p className="mb-2">📍 123 Fashion Street, Mumbai, India</p>
                <p className="mb-2">📞 +91 9392443380</p>
                <p className="mb-2">📧 support@sfashions.com</p>
                <p>🕒 Mon-Sat: 9AM - 9PM</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} S Fashions. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Hero;