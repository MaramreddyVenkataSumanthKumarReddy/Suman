import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup Successful Go to Login Page And Login");
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://c1.peakpx.com/wallpaper/573/909/315/store-clothes-clothing-line-fashion-wallpaper.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-sm backdrop-blur-sm mx-4">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-3">
          <div>
            <label className="block text-gray-800 text-sm mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-1.5 text-sm border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-1.5 text-sm border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-sm mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-3 py-1.5 text-sm border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Create password"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full px-3 py-1.5 text-sm border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Confirm password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-1.5 text-sm rounded hover:bg-blue-700 transition-colors mt-2"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;