/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
const LandingPage = () => {
    const location = useLocation();
    const username = location.state?.username || 'Guest';
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold mb-4">Welcome, {username}!</h1>
        </div>
    );
};

export default LandingPage;
