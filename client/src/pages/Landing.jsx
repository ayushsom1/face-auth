/* eslint-disable react/prop-types */
import { useLocation, Link } from "react-router-dom";


const LandingPage = () => {
    const location = useLocation();
    const username = location.state?.username || 'Guest';
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold mb-4 text-gray-800">
                Welcome, {username}!
            </h1>
            <hr className="w-16 border-t-2 border-gray-400 mb-6" />
            <p className="text-lg text-gray-600">
                Explore our app and discover amazing features.
            </p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold my-4 py-2 px-4 rounded-md shadow-md transition duration-300">
                Home
            </Link>
            <div className="absolute bottom-20 left-0 right-0 text-gray-600 text-s text-center mb-4">
                Made with ❤️ by Ayush Som
            </div>
        </div>
    );
};


export default LandingPage;