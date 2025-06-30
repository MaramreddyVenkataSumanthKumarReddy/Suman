import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

const mensItems = [
  {
    id: 1,
    gender: "men",
    category: "T-Shirts",
    name: "Printed T-Shirt",
    price: "300",
    image:
      "https://static.vecteezy.com/system/resources/previews/000/089/783/original/free-vector-grunge-t-shirt-design.jpg",
  },
  {
    id: 2,
    gender: "men",
    category: "T-Shirts",
    name: "Plain White T-Shirt",
    price: "199",
    image: "http://dpegb9ebondhq.cloudfront.net/product_photos/589276/3600_00_hr_original.jpg",
  },
  {
    id: 3,
    gender: "men",
    category: "T-Shirts",
    name: "Striped T-Shirt",
    price: "299",
    image:"https://tse1.mm.bing.net/th?id=OIP.mM_SGRNJsrE64cxPqh4xzwHaIF&pid=Api&P=0&h=180",
  },
  
  {
    id: 4,
    gender: "men",
    category: "Hoodies",
    name: "Roadster Hoodie",
    price: "499",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.YUTinJ8tE7f3-GbG5R4l7gHaJ4&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    gender: "men",
    category: "Hoodies",
    name: "HighLander Hoodie",
    price: "599",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.CPr8kG8I8TX6XZqPQh1yLAHaH3&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    gender: "men",
    category: "Hoodies",
    name: "Nike Hoodie",
    price: "899",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.eD8m-5aMRpWpDpjSQJw6WAHaI3&pid=Api&P=0&h=180",
  },
  {
    id: 7,
    gender: "men",
    category: "Shirts",
    name: "Blue Formal Shirt",
    price: "599",
    image:
    "https://i.pinimg.com/originals/4e/b7/79/4eb77999f1c9eb7c321b2c961b30edc9.jpg",
  },
    {
    id: 8,
    gender: "men",
    category: "Shirts",
    name: "Pink Formal Shirt",
    price: "649",
    image:
    "https://5.imimg.com/data5/BR/GE/MY-43691381/formal-shirts-for-men-dark-green-shirt-mens-supplier-500x500.jpg",
  },
  {
    id: 9,
    gender: "men",
    category: "Shirts",
    name: "White Formal Shirt",
    price: "799",
    image:
    "https://m.media-amazon.com/images/I/41+8mih8xxL.AC_UY1100.jpg",
  },
  {
    id: 10,
    gender: "men",
    category: "Kurtas",
    name: "Yellow Kurta",
    price: "2099",
    image:
    "https://i.pinimg.com/originals/0b/90/45/0b9045621c4aee9ca305864f913f1d3c.jpg",
  },
  {
    id: 11,
    gender: "men",
    category: "Kurtas",
    name: "White Kurta",
    price: "4099",
    image:
    "https://www.bargello.com/images/thumbs/0013159_mens-bespoke-kurta-pajama-suits_800.jpeg",
  },
  {
    id: 12,
    gender: "men",
    category: "Kurtas",
    name: "Blue Kurta",
    price: "2999",
    image:
    "https://i.pinimg.com/originals/de/09/c6/de09c6fd972a5eaaa9bc947ff5dd43e2.jpg",
  },

  {
    id: 13,
    gender: "men",
    category: "Jeans Pants",
    name: "Jeans Pant",
    price: "1099",
    image:
      "https://www.styledbysally.com.au/wp-content/uploads/2018/01/Classic-Blue-Men-Jeans-Pant-Cotton-Slim-Fit-Men-s-Denim-Pants-Stretch-Fashion-Mens-Clothes.jpg",
  },
  {
    id: 14,
    gender: "men",
    category: "Jeans Pants",
    name: "Denim Jeans Pant",
    price: "1299",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Aw4L_ryhEHLPk6xb4Zx0KAHaJ4&pid=Api&P=0&h=180",
  },
    {
    id: 15,
    gender: "men",
    category: "Jeans Pants",
    name: "Us Polo Jeans Pant",
    price: "1899",
    image:
      "https://5.imimg.com/data5/IOS/Default/2022/1/DU/ZL/ND/60595205/product-jpeg-1000x1000.png",
  },
    {
    id: 16,
    gender: "men",
    category: "Formal Pants",
    name: "Netplay Pant",
    price: "699",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.EHVf-b0CFDM7mvHQDxDGBgAAAA&pid=Api&P=0&h=180",
  },    
  {
    id: 17,
    gender: "men",
    category: "Formal Pants",
    name: "Us Polo Pant",
    price: "899",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.5PIY1HIoQAcHyVNe7BX8FgHaLH&pid=Api&P=0&h=180",
  },    
  {
    id: 18,
    gender: "men",
    category: "Formal Pants",
    name: "Denim Pant",
    price: "1299",
    image:
      "https://i.pinimg.com/736x/24/79/7b/24797b478f7fdc3685b2848af84a2e35.jpg",
  },
    {
    id: 19,
    gender: "men",
    category: "Track Pants",
    name: "Netplay Pant",
    price: "699",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.tkHtdQ0GmgHcrQETshVYnQHaKU&pid=Api&P=0&h=180",
  },  {
    id: 20,
    gender: "men",
    category: "Track Pants",
    name: "Team Spirit Pant",
    price: "599",
    image:
      "https://rukminim2.flixcart.com/image/832/832/kflftzk0/track-pant/b/x/g/m-ts200-teamspirit-original-imafwyfxhagpxtwk.jpeg?q=70&crop=false",
  },  {
    id: 21,
    gender: "men",
    category: "Track Pants",
    name: "Dazzle Pant",
    price: "699",
    image:
      "https://rukminim2.flixcart.com/image/832/832/kbtp0280/track-pant/z/9/g/m-dpf-1-dazzel-original-imaft3h4jhymkyyb.jpeg?q=70&crop=false",
  },
];

const Mens = () => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [showControls, setShowControls] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupItem, setPopupItem] = useState(null);

  useEffect(() => {
    const initialQuantities = {};
    const initialShowControls = {};
    
    cart.forEach(item => {
      if (item.gender === "men") {
        initialQuantities[item.id] = item.quantity;
        initialShowControls[item.id] = true;
      }
    });
    
    setQuantities(initialQuantities);
    setShowControls(initialShowControls);
  }, [cart]);

  const handleQuantityChange = (item, change) => {
    const currentQuantity = quantities[item.id] || 1;
    const newQuantity = currentQuantity + change;
    
    if (newQuantity < 1) {
      // Remove item from cart
      removeFromCart(item.id, item.gender);
      setShowControls(prev => ({ ...prev, [item.id]: false }));
      setQuantities(prev => {
        const newQuantities = {...prev};
        delete newQuantities[item.id];
        return newQuantities;
      });
      setPopupItem({...item, action: 'removed'});
    } else {
      // Update quantity
      setQuantities(prev => ({ ...prev, [item.id]: newQuantity }));
      updateQuantity(item.id, item.gender, newQuantity);
      setPopupItem({...item, action: 'updated'});
    }
    
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
    setShowControls(prev => ({ ...prev, [item.id]: true }));
    setQuantities(prev => ({ ...prev, [item.id]: 1 }));
    setPopupItem({...item, action: 'added'});
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const groupedItems = mensItems.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  const categories = Object.keys(groupedItems);

  return (
    <div className="w-full px-6 py-8 relative">
      {showPopup && popupItem && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          {popupItem.action === 'added' && `Added ${popupItem.name} to cart!`}
          {popupItem.action === 'updated' && `Updated ${popupItem.name} quantity to ${quantities[popupItem.id] || 1}`}
          {popupItem.action === 'removed' && `Removed ${popupItem.name} from cart`}
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6 text-blue-700">Men's Collection</h2>

      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => document.getElementById(category)?.scrollIntoView({ behavior: "smooth" })}
            className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-green-700 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {categories.map((category) => (
        <div key={category} id={category} className="mb-10 scroll-mt-20">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {groupedItems[category].map((item) => (
              <div key={`${item.id}-${item.gender}`} className="bg-white rounded shadow p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-contain mb-4 rounded bg-white"
                />
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-gray-600">₹{item.price}</p>
                
                {showControls[item.id] ? (
                  <div className="flex items-center justify-center mt-3">
                    <button
                      onClick={() => handleQuantityChange(item, -1)}
                      className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">
                      {quantities[item.id] || 1}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item, 1)}
                      className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mens;