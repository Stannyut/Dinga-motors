import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className=" text-gray-900 shadow-lg ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Madinga-motors            </h3>
            <p className="text-gray-700">
              Your one-stop yard for all cars.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Sell your car
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Book a road test
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Order Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <FiFacebook className="w-6 h-6 cursor-pointer hover:text-gray-700 transition-colors" />
              <FiTwitter className="w-6 h-6 cursor-pointer hover:text-gray-700 transition-colors" />
              <FiInstagram className="w-6 h-6 cursor-pointer hover:text-gray-700 transition-colors" />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-900 text-center">
          <p className="text-gray-700 text-sm">
            &copy; 2023 Madinga-motors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
