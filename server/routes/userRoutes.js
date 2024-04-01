const express = require('express')
const router = express.Router()
const User = require('../models/User')
const faceapi = require('face-api.js');
const { Canvas, Image, ImageData } = require('canvas');
const canvas = require('canvas');
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

const getFaceDescriptor = async (imageData) => {
    const img = await canvas.loadImage(Buffer.from(imageData, 'base64'));
    const detections = await faceapi
        .detectSingleFace(img)
        .withFaceLandmarks()
        .withFaceDescriptor();
    return detections ? detections.descriptor : null;
};

router.post("/register", async (req, res) => {
    try {
        const { username, email, imageData } = req.body;

        // Convert the base64 image data to a tensor
        if (!imageData) {
            return res.status(400).json({ error: 'No image data provided' });
        }
        const faceDescriptor = await getFaceDescriptor(imageData);

        if (!faceDescriptor) {
            return res.status(400).json({ error: 'No face detected' });
        }
        console.log(faceDescriptor + " 1 " + typeof faceDescriptor);
        //Create a new user with the face descriptor
        const newUser = new User({
            username,
            email,
            faceDescriptor: Array.from(faceDescriptor)
        });

        console.log(newUser)

        //Save the user to the database
        await newUser.save()

        res.status(201).json({ message: "User registered successfully" })

    } catch (e) {
        console.log(`Error in registration = > ${e}`)
        res.status(500).json({ message: "Registration failed" })
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, imageData } = req.body;

        if (!imageData) {
            return res.status(400).json({ error: 'No image data provided' });
        }

        const queryDescriptor = await getFaceDescriptor(imageData);

        if (!queryDescriptor) {
            return res.status(400).json({ error: 'No face detected' });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const distance = faceapi.euclideanDistance(queryDescriptor, user.faceDescriptor);

        if (distance < 0.6) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'face not matched' });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Login failed' });
    }
});


router.get('/all', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            users
        })
    } catch (e) {
        res.status(401).json({
            message: "User fetching error"
        })
    }
})
module.exports = router