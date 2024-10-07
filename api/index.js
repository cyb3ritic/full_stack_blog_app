import express from 'express'; // ES module syntax
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {
        console.log('MongoDb is connected');
    }
).catch(err => {
    console.log(err)
});

const app = express(); // app is initialized by calling express()

app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});



app.use('/api/user',userRoute)
