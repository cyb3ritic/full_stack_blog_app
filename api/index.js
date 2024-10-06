import express from 'express'; // ES module syntax

const app = express(); // app is initialized by calling express()

app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});
