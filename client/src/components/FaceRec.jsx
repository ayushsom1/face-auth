







//  Only for testing purpose //
//  Only for testing purpose //
//  Only for testing purpose //
//  Only for testing purpose //
























// // src/components/FaceRecognitionClient.js

// import { useState, useRef } from 'react';
// import axios from 'axios';

// const FaceRecognitionClient = () => {
//     const [username, setUsername] = useState('');
//     const [imageData, setImageData] = useState('');
//     const videoRef = useRef(null);

//     const startWebcam = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//             videoRef.current.srcObject = stream;
//         } catch (error) {
//             console.error('Error accessing webcam:', error);
//         }
//     };

//     const captureFace = async () => {
//         try {
//             // Capture a frame from the webcam
//             const canvas = document.createElement('canvas');
//             canvas.width = videoRef.current.videoWidth;
//             canvas.height = videoRef.current.videoHeight;
//             const context = canvas.getContext('2d');
//             context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//             // Convert the canvas image to base64
//             const base64Image = canvas.toDataURL('image/jpeg').split(',')[1];

//             // Set the base64 image data in the `imageData` state
//             setImageData(base64Image);
//         } catch (error) {
//             console.error('Error capturing face:', error);
//         }
//     };

//     const handleRegister = async () => {
//         try {
//             // Send the image data to the backend for registration
//             await axios.post('http://localhost:3000/api/register', { username, imageData });
//             console.log('User registered successfully');
//         } catch (error) {
//             console.error('Error during registration:', error);
//         }
//     };

//     const handleLogin = async () => {
//         try {
//             // Send the image data to the backend for login
//             await axios.post('http://localhost:3000/api/login', { username, imageData });
//             console.log('Login successful');
//         } catch (error) {
//             console.error('Error during login:', error);
//         }
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <button onClick={startWebcam}>Start Webcam</button>
//             <button onClick={captureFace}>Capture Face</button>
//             <button onClick={handleRegister}>Register</button>
//             <button onClick={handleLogin}>Login</button>
//             <video ref={videoRef} autoPlay playsInline />
//         </div>
//     );
// };

// export default FaceRecognitionClient;
