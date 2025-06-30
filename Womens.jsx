import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

const womensItems = [
  {
    id: 1,
    gender: "women",
    category: "T-Shirts",
    name: "Printed T-Shirt",
    price: "300",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.eFgDkw3p3GU88pYQfBRHCwHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    gender: "women",
    category: "T-Shirts",
    name: " Plain White T-Shirt",
    price: "199",
    image: "https://tse1.mm.bing.net/th?id=OIP.bF-91wl3MCgDn-5VlDtvYwAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    gender: "women",
    category: "T-Shirts",
    name: "Striped T-Shirt",
    price: "299",
    image:"https://tse2.mm.bing.net/th?id=OIP.q4M0vPMvBuQxzguTCg23LAHaJ3&pid=Api&P=0&h=180",
  },
  
  {
    id: 4,
    gender: "women",
    category: "Hoodies",
    name: "Roadster Hoodie",
    price: "499",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.5MMyw1rskc5-KmCFFoVSFQHaJ4&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    gender: "women",
    category: "Hoodies",
    name: "HighLander Hoodie",
    price: "599",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Nrkmfx4hNcVDurgpwqQ-ngHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    gender: "women",
    category: "Hoodies",
    name: "Nike Hoodie",
    price: "899",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Fp58oC4x6Ozs0icHyJ6BNQHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 7,
    gender: "women",
    category: "Kurtas",
    name: "Blue Colour Kurta",
    price: "599",
    image:
    "https://tse1.mm.bing.net/th?id=OIP.G1JX_v74mVyFPDU8xxSdTAHaJ4&pid=Api&P=0&h=180",
  },
    {
    id: 8,
    gender: "women",
    category: "Kurtas",
    name: "Silk Kurta",
    price: "649",
    image:
    "https://i.etsystatic.com/22245633/r/il/8a146e/3076947724/il_1080xN.3076947724_rbe4.jpg",
  },
  {
    id: 9,
    gender: "women",
    category: "Kurtas",
    name: "Anarkali Cotton Kurta",
    price: "799",
    image:
    "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/20862810/2022/11/22/e4e30723-9097-495a-ace1-d8020926a5d51669111999441INDIECLOSETWomenCottonRoundNeck34SleeveEmbroideredFlaredKurt1.jpg",
  },
  {
    id: 10,
    gender: "women",
    category: "Palazzo Sets",
    name: "Red And Black Palazzo Set",
    price: "1199",
    image:
    "https://d2x02matzb08hy.cloudfront.net/img/clothing/hero_image/78127752/DSC_1409.jpg",
  },
  {
    id: 11,
    gender: "women",
    category: "Palazzo Sets",
    name: "White Kurta Palazzo With Indigo Dupatta",
    price: "1099",
    image:
     "https://tse2.mm.bing.net/th?id=OIP.WMm2v7dLLoN8oN3PpxEjFQHaJQ&pid=Api&P=0&h=180",

  },
  {
    id: 12,
    gender: "women",
    category: "Palazzo Sets",
    name: "Indian Palazzo Set",
    price: "1499",
    image:
    "https://i.etsystatic.com/22489341/r/il/5202da/3203911478/il_fullxfull.3203911478_pkgx.jpg",
  },

  {
    id: 13,
    gender: "women",
    category: "Dress Material",
    name: "Banarasi Dress Material",
    price: "1099",
    image:
      "https://tiimg.tistatic.com/fp/3/008/347/women-banarasi-heavy-silk-dress-fabric-987.jpg",
  },
  {
    id: 14,
    gender: "women",
    category: "Dress Material",
    name: "Cotton Dress Material",
    price: "799",
    image:
      "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/21051166/2022/12/3/d8fdc3aa-53d7-485c-a0fc-712eb7591d7e1670044030948LightSeaGreenColorCottonFabricHandWorkWorkWomenSDressMateria1.jpg",
  },
    {
    id: 15,
    gender: "women",
    category: "Dress Material",
    name: "Silk Dress Material",
    price: "699",
    image:
      "https://girlsfashionworldbd.com/frd-data/img/product/2024/09/_950_frd_1727093020.jpg",
  },
    {
    id: 16,
    gender: "women",
    category: "Brasso Sarees",
    name: "Brasso Saree",
    price: "699",
    image:
      "https://i.pinimg.com/736x/58/94/b7/5894b7a82e3582a69d4ec7da2422193c.jpg",
  },    
  {
    id: 17,
    gender: "women",
    category: "Brasso Sarees",
    name: "Printed Brasso Saree",
    price: "899",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/12/YI/KZ/DQ/145952940/r-pihu-pink-500x500.jpg",
  },    
  {
    id: 18,
    gender: "women",
    category: "Brasso Sarees",
    name: "Multi Design Brasso Saree",
    price: "1299",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.yZnwhDUudx3f4pTsbkJOhQAAAA&pid=Api&P=0&h=180",
  },
    {
    id: 19,
    gender: "women",
    category: "Half Saree",
    name: "Silk Half Saree",
    price: "2099",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.kTnGivSLQDFBZ-rQnzP_1QHaLG&pid=Api&P=0&h=180",
  },  {
    id: 20,
    gender: "women",
    category: "Half Saree",
    name: "Banarasi Half Saree",
    price: "2599",
    image:
      "https://i.pinimg.com/originals/2e/d9/68/2ed968238a69571f45d83a411d1699ab.jpg",
  },  {
    id: 21,
    gender: "women",
    category: "Half Saree",
    name: "Traditional Half Saree",
    price: "3099",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.Mf7r91Ay7nAEYCmpFh82bAHaLH&pid=Api&P=0&h=180",
  },
];

const Womens = () => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [showControls, setShowControls] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupItem, setPopupItem] = useState(null);

  useEffect(() => {
    const initialQuantities = {};
    const initialShowControls = {};
    
    cart.forEach(item => {
      if (item.gender === "women") {
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

  const groupedItems = womensItems.reduce((groups, item) => {
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

      <h2 className="text-3xl font-bold mb-6 text-blue-700">Women's Collection</h2>

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

export default Womens;