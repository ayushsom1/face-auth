/* eslint-disable react/prop-types */

import Webcam from "react-webcam";
import { useRef, useState } from "react";

const CustomWebcam = ({ onCapture }) => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        // console.log(imageSrc);
        convertWebpToJpeg(imageSrc);
    };

    const convertWebpToJpeg = (webpBase64) => {
        const img = new Image();
        img.src = webpBase64;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, img.width, img.height);

            // Convert canvas to base64-encoded JPEG
            const jpegBase64 = canvas.toDataURL('image/jpeg');
            setImgSrc(jpegBase64);
            // console.log(jpegBase64);
            onCapture(jpegBase64.split(',')[1])
        };
    };
    const retake = () => {
        setImgSrc(null);
    };
    return (
        <div className="container bg-gray-100 rounded-lg shadow-lg p-6">
            {imgSrc ? (
                <img src={imgSrc} alt="webcam" className="rounded-lg shadow-lg" />
            ) : (
                <Webcam
                    height={600}
                    width={600}
                    ref={webcamRef}
                    mirrored={true}
                    className="rounded-lg shadow-lg"
                />
            )}
            <div className="btn-container mt-4">
                {imgSrc ? (
                    <button
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
                        onClick={retake}
                    >
                        Retake photo
                    </button>
                ) : (
                    <button
                        className="w-full bg-indigo-200 hover:bg-indigo-400 text-blue-800 font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
                        onClick={capture}
                    >
                        Capture photo
                    </button>
                )}
            </div>
        </div>
    );
};

export default CustomWebcam;