const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-400 px-4 py-12"
    >
      <div className="max-w-6xl w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-pink-600 text-center">Contact Us</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Customer Support</h2>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919392443380" className="text-pink-500 hover:underline">
                +91 9392443380
              </a>
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@sfashions.com" className="text-pink-500 hover:underline">
                support@sfashions.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 123 Fashion Street, Mumbai, Maharashtra, India
            </p>
            <p>
              <strong>Working Hours:</strong> Mon - Sat, 10:00 AM - 7:00 PM
            </p>
          </div>

          {/* Store Location Map */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Visit Our Store</h2>
            <div className="w-full h-72 rounded overflow-hidden shadow-md">
              <iframe
                title="SFashions Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789012!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceaad4efab6b%3A0xaba1234567890cdef!2sFashion%20Street%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1686067890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
