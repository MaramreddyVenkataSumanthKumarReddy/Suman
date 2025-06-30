import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    itemCount,
    clearCart
  } = useCart();

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(cartTotal);

  // Calculate discount whenever cartTotal changes
  useEffect(() => {
    let discountPercentage = 0;
    
    if (cartTotal > 5000) {
      discountPercentage = 40;
    } else if (cartTotal > 3500) {
      discountPercentage = 30;
    } else if (cartTotal > 2000) {
      discountPercentage = 20;
    } else if (cartTotal > 1000) {
      discountPercentage = 10;
    }

    const discountAmount = (cartTotal * discountPercentage) / 100;
    setDiscount(discountAmount);
    setFinalTotal(cartTotal - discountAmount);
  }, [cartTotal]);

  const handleCheckout = () => {
    setShowPaymentModal(true);
    
    setTimeout(() => {
      setPaymentSuccess(true);
      
      setTimeout(() => {
        clearCart();
        setShowPaymentModal(false);
        setPaymentSuccess(false);
      }, 2000);
    }, 1500);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.gender, item.quantity - 1);
    } else {
      removeFromCart(item.id, item.gender);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Payment Success Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full text-center">
              {paymentSuccess ? (
                <>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900">
                    Payment Successful!
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Your order has been placed successfully.
                  </p>
                </>
              ) : (
                <>
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900">
                    Processing Payment...
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Please wait while we process your payment.
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Your Shopping Cart
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            {itemCount > 0 ? `You have ${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart` : 'Your cart is currently empty'}
          </p>
        </div>
        
        {itemCount === 0 ? (
          <div className="text-center py-12 bg-orange-200 rounded-lg shadow-sm p-8 max-w-md mx-auto">
            <svg
              className="mx-auto h-12 w-12 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-600">
              Start adding some amazing products to your cart!
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center border-b pb-4 mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Shopping Cart ({itemCount})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-sm font-medium text-red-600 hover:text-red-800 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Clear Cart
                </button>
              </div>

              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.gender}`} className="py-6 flex flex-col sm:flex-row">
                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-32 w-32 object-contain rounded-lg bg-gray-100 p-2"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col sm:flex-row">
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 capitalize">
                              {item.category} • {item.gender === 'men' ? "Men's" : item.gender === 'women' ? "Women's" : "Kids'"}
                            </p>
                            <p className="text-lg font-semibold text-gray-900 mt-2">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.gender)}
                            className="text-red-600 hover:text-red-800 h-6 w-6"
                            title="Remove item"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="mt-4 flex items-center">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => handleDecreaseQuantity(item)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="px-4 py-1 bg-gray-50 text-center w-12">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.gender, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                  <span className="font-medium">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-medium text-green-600">
                      -₹{discount.toLocaleString('en-IN')}
                      {cartTotal > 5000 && ' (40%)'}
                      {cartTotal > 3500 && cartTotal <= 5000 && ' (30%)'}
                      {cartTotal > 2000 && cartTotal <= 3500 && ' (20%)'}
                      {cartTotal > 1000 && cartTotal <= 2000 && ' (10%)'}
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>
                
                <div className="flex justify-between border-t border-gray-200 pt-4">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Proceed to Checkout
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                or{' '}
                <Link
                  to="/"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  We accept
                </h3>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8"
                      src="https://tse1.mm.bing.net/th?id=OIP.hquJ0qKWFw11IX5K1GPwMAHaE8&pid=Api&P=0&h=180"
                      alt="Visa"
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      className="h-8"
                      src="https://tse2.mm.bing.net/th?id=OIP.HN-pga19N6xKSdiDgKjGyAHaFQ&pid=Api&P=0&h=180"
                      alt="Mastercard"
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      className="h-8"
                      src="https://tse4.mm.bing.net/th?id=OIP.GF7y93L_agiFEERP9lOFkAAAAA&pid=Api&P=0&h=180"
                      alt="American Express"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;