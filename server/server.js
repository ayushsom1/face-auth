const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const port = 3000 || process.env.PORT;
const faceapi = require('face-api.js');
// app.use('@tensorflow/tfjs-node');

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ryzensingh:admin123@cluster0.kzz5ihj.mongodb.net/faceAuth');

async function loadModels() {
    const model_url = './Weights'
    await faceapi.nets.faceRecognitionNet.loadFromDisk(model_url);
    await faceapi.nets.faceLandmark68Net.loadFromDisk(model_url);
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(model_url);
    console.log("model loaded successfully")
}

loadModels();

const userRouter = require('./routes/userRoutes');
app.use('/api', userRouter);

app.listen(port, () => { console.log(`Your server is running at port: ${port}`) });