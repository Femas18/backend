const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    const modelUrl = 'https://storage.googleapis.com/model-femas/model.json'; // Ganti dengan URL model Anda

    try {
        const model = await tf.loadGraphModel(modelUrl);
        console.log('Model successfully loaded from', modelUrl);
        return model;
    } catch (error) {
        console.error('Failed to load model:', error.message);
        throw new Error('Model loading failed. Please check the URL or your network connection.');
    }
}

module.exports = loadModel;
