import { useState } from 'react'
import axios from 'axios'

const FaceRecognitionClient = () => {
    const [username, setUsername] = useState('');
    const [imageData, setImageData] = useState('');

    const captureFace = async () => {
        try {

            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();


            setTimeout(() => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);

                // convert the canvas image to base64
                const base64Image = canvas.toDataURL('image/jpeg');

                setImageData(base64Image);

                stream.getTracks().forEach((track) => track.stop());
            }, 2000)
        } catch (e) {
            console.log(`Error: ${e}`);
        }
    }

    const handleRegister = async () => {
        try {
            await axios.post('/api/register', { username, imageData });
            console.log("register successful");
        } catch (e) {
            console.log(`error: ${e}`);
        }
    }

    const handleLogin = async () => {
        try {
            await axios.post('/api/login', { username, imageData });
            console.log('login successfully');
        } catch (e) {
            console.log(`error: ${e}`);
        }
    }


    return (
        <div>
            <input type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={captureFace}>captureFace</button>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>

        </div>
    )
}


export default FaceRecognitionClient;

