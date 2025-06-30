import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

const kidsItems = [
  {
    id: 1,
    gender: "kids",
    category: "T-Shirts",
    name: "Plane Blue T-Shirt",
    price: "300",
    image: "https://tse2.mm.bing.net/th?id=OIP.lQ8KpIIjycSYG4itTe8UXAHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    gender: "kids",
    category: "T-Shirts",
    name: "White T-Shirt",
    price: "199",
    image: "https://m.media-amazon.com/images/I/61vykNKCQbL.UL1500.jpg",
  },
  {
    id: 3,
    gender: "kids",
    category: "T-Shirts",
    name: "Striped T-Shirt",
    price: "299",
    image: "https://tse2.mm.bing.net/th?id=OIP.hAXdp69KkTLaiD3VCsBqFAHaIj&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    gender: "kids",
    category: "Hoodies",
    name: "Roadster Hoodie",
    price: "499",
    image: "https://i.etsystatic.com/25120665/r/il/2b3b9c/2694662452/il_fullxfull.2694662452_i9td.jpg",
  },
  {
    id: 5,
    gender: "kids",
    category: "Hoodies",
    name: "HighLander Hoodie",
    price: "599",
    image: "https://www.mypersonalisedclothing.com/wp-content/uploads/2021/04/JH01J_LS05_2021.png",
  },
  {
    id: 6,
    gender: "kids",
    category: "Hoodies",
    name: "Nike Hoodie",
    price: "899",
    image: "https://www.tennisnuts.com/images/product/full/BV3757-410_A.jpg",
  },
  {
    id: 7,
    gender: "kids",
    category: "Shirts",
    name: "Black and white Shirt",
    price: "599",
    image: "https://rukminim2.flixcart.com/image/300/300/xif0q/shirt/q/7/c/9-10-years-l2-shite-gunjafashion-original-imagrgxj4xujuhaf.jpeg?q=90",
  },
  {
    id: 8,
    gender: "kids",
    category: "Shirts",
    name: "Pink Formal Shirt",
    price: "649",
    image: "https://guayaberascubanas.com/media/catalog/product/cache/06d3078dce87b60d75772963e7f57916/b/a/banderas-silver-pink-d.jpg",
  },
  {
    id: 9,
    gender: "kids",
    category: "Shirts",
    name: "White Formal Shirt",
    price: "799",
    image: "https://tse4.mm.bing.net/th?id=OIP.qCIon-8xt1xXJPnWPrhYJQHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 10,
    gender: "kids",
    category: "Kurtas",
    name: "Pink Kurta",
    price: "1199",
    image: "https://i.pinimg.com/originals/22/ee/0c/22ee0c0c07e368de11925290a56b1e68.jpg",
  },
  {
    id: 11,
    gender: "kids",
    category: "Kurtas",
    name: "White Kurta",
    price: "1599",
    image: "https://image.suratwholesaleshop.com/data/2022y/September/35240/Traditional-Wear-White-Embroidery-Work-Georgette-Kids-Kurta-Pajama-VS-731.jpg",
  },
  {
    id: 12,
    gender: "kids",
    category: "Kurtas",
    name: "Blue Kurta",
    price: "2099",
    image: "https://5.imimg.com/data5/ECOM/Default/2023/4/303948882/VF/BK/AD/24473342/1655670860964-sku-17023-0-1000x1000.jpg",
  },
  {
    id: 13,
    gender: "kids",
    category: "Jeans Pants",
    name: "Jeans Pant",
    price: "799",
    image: "https://tse1.mm.bing.net/th?id=OIP.xM-ldGa7kGo8sY1L9BSHRgAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 14,
    gender: "kids",
    category: "Jeans Pants",
    name: "Denim Jeans Pant",
    price: "999",
    image: "https://tse1.mm.bing.net/th?id=OIP.q8ec2xnAaeOPCQK2hLMEKQHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 15,
    gender: "kids",
    category: "Jeans Pants",
    name: "Us Polo Jeans Pant",
    price: "1299",
    image: "https://tse1.mm.bing.net/th?id=OIP.pp3DzG8XLq244Mtsg88h5gAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 16,
    gender: "kids",
    category: "Suits",
    name: "Black Suit",
    price: "1899",
    image: "https://www.careyfashion.com/wp-content/uploads/2016/12/kids-suits-3-768x1011.jpg",
  },
  {
    id: 17,
    gender: "kids",
    category: "Suits",
    name: "Blue Suit",
    price: "1699",
    image: "https://tse4.mm.bing.net/th?id=OIP.ojguqEZyfgwnaZW4nxiZegHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 18,
    gender: "kids",
    category: "Suits",
    name: "Maroon Suit",
    price: "1299",
    image: "https://tse4.mm.bing.net/th?id=OIP.GdcPHCVHNZ0k04b7h5IKTQHaL_&pid=Api&P=0&h=180",
  },
  {
    id: 19,
    gender: "kids",
    category: "Track Pants",
    name: "Netplay Pant",
    price: "699",
    image: "https://www.gethow.org/wp-content/uploads/2022/01/kids-track-pant.jpg",
  },
  {
    id: 20,
    gender: "kids",
    category: "Track Pants",
    name: "Adidas Pant",
    price: "599",
    image: "https://i5.walmartimages.com/asr/a63c0813-d12c-4834-8024-c53828c2d67f_1.e5cbd814553e598221cdec98945b2a1e.jpeg",
  },
  {
    id: 21,
    gender: "kids",
    category: "Track Pants",
    name: "Dazzle Pant",
    price: "699",
    image: "https://cdn.shopify.com/s/files/1/0323/6410/1676/products/boys-pocket-track-pants-with-leg-stripes_actol_alt1_2000x.jpg?v=1582717304",
  },
];

const Kids = () => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [showControls, setShowControls] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupItem, setPopupItem] = useState(null);

  useEffect(() => {
    const initialQuantities = {};
    const initialShowControls = {};
    
    cart.forEach(item => {
      if (item.gender === "kids") {
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

  const groupedItems = kidsItems.reduce((groups, item) => {
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

      <h2 className="text-3xl font-bold mb-6 text-blue-700">Kids Collection</h2>

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
              <div key={`${item.id}-${item.gender}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-contain mb-4 rounded-lg bg-gray-50"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kids;