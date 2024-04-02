// src/components/HomePage.js

import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-semibold mb-6">
                Welcome to Face Recognition App
            </h1>
            <div className="space-x-4">
                <Link
                    to="/register"
                    className="text-white bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-md transition duration-300"
                >
                    Register
                </Link>
                <Link
                    to="/login"
                    className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition duration-300"
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
