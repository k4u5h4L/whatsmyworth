import * as tf from '@tensorflow/tfjs';

// served with  a basic python on the root folder of this project
const model = await tf.loadLayersModel('http://localhost:8000/model/model.json');

const pred = model.predict(tf.tensor2d([[26.0, 0.0, 3.0, 64.0, 1.5, 1.0, 1.0]]))

console.log(pred.dataSync()) // Float32Array(1) [ 72350.625 ]
