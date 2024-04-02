/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import CustomWebcam from '../components/Webcam';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader'; // Import the Loader component
import Alert from '../components/Alert'


const Login = () => {
    const [username, setUsername] = useState('');
    const [imageData, setImageData] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Add isLoading state
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        setIsLoading(true); // Set isLoading to true before making the API call
        try {
            await axios.post('http://localhost:3000/api/login', {
                username,
                imageData,
            });

            setError('Succesfully registerd');
            navigate('/landing',{state: {username}});
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false); // Set isLoading to false after the API call is complete
        }
    };

    const handleCapture = (base64Image) => {
        setImageData(base64Image);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Login</h1>
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />

                {error && <Alert type='error' message={error} />}
                <CustomWebcam onCapture={handleCapture} />
                <button
                    onClick={handleLogin}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 mt-4"
                    disabled={isLoading} // Disable the button when loading
                >
                    {isLoading ? <Loader /> : 'Login'}
                </button>
            </div>
        </div>
    );
};

export default Login;