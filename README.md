
# Face Recognition Web Application

This is a full-stack web application that leverages AI technology for user authentication through face recognition. The application provides a seamless and secure login experience by capturing and analyzing users' facial features in real-time.

## Live Demo

You can access the live demo of the application at [https://face-auth-weld.vercel.app/](https://face-auth-weld.vercel.app/)

## Technologies Used

-   **Frontend**: React.js, Tailwind CSS, react-webcam
-   **Backend**: Node.js, Express.js, MongoDB, face-api.js
-   **Deployment**: Render (backend), Vercel (frontend)

## Features

-   User registration and login using face recognition
-   Live webcam feed capture for face detection
-   Face matching with a threshold of 0.6 for authentication
-   Secure storage of face descriptors in MongoDB

## Installation

1.  Clone the repository:  `git clone https://github.com/ayushsom1/face-auth.git`
2.  Navigate to the project directory:  `cd face-auth`

### Backend Setup

1.  Navigate to the backend directory:  `cd server`
2.  Install dependencies:  `npm install`
3.  Start the backend server:  `node server`

### Frontend Setup

1.  Navigate to the frontend directory:  `cd client`
2.  Install dependencies:  `npm install`
3.  Start the frontend development server:  `npm run dev`

The application should now be running locally, with the frontend accessible at `http://localhost:5173` and the backend server running on `http://localhost:3000`.
