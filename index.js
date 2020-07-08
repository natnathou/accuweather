const express = require('express');
const path    = require('path');
const app     = express();
const port = process.env.PORT || 5000;
const host = process.env.IP || "localhost";


// app.use(express.static(path.join(__dirname, 'client/build')));


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });



app.listen(port, host, ()=>{
    console.log(`Server listening on ${port}`);
});