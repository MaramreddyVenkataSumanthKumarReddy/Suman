// // // import ImageGallery from './ImageGallery';
// // // import InfiniteScrollGallery from './InfiniteScrolling';
// // // import LandingPage from './Landingpage';
// // // import BackgroundAudio from './BackgroundAudio';
// // // import VideoBackground from './VideoBackground';
// // // import ParallaxPage from './Parallax';
// // // import MediaPlaylist from './Components/MediaPlaylist';
// // // import ScrollAnimations from './ScrollAnimations';
// // // import VideoPlayer from './VideoPlayer';
// // // import ImageCarousel from './ImageCarousel';

// // function App() {
// //   return (
    
// //     <div>
// //       {/* <ImageGallery/>
// //       <LandingPage/>
// //       <BackgroundAudio/>
// //       <VideoPlayer/>
// //       <ParallaxPage/>
// //       <MediaPlaylist/>
// //       <ScrollAnimations/>
// //       <VideoBackground/>
// //       <ImageCarousel/>
// //       <InfiniteScrollGallery /> */}

// //     </div>
// //   );
// // }
// // App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";
import Navbar from "./Components/ShippingCart";
import Hero from "./Components/HeroSection";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import Kids from "./Components/Kids";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart"; // We'll create this next

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>   
          <Route path="/" element={<Hero />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
// export default App;



