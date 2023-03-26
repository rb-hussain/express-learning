// Import Express 
const express = require ("express");
const app = express();
const port = 4000;
// Set Response on  / Request 

app.get("/", (req,res)=>{

    res.send("<h1>Hello World.!</h1>")
})

// Creating a server on port 4000;
app.listen(port, ()=>{
    console.log(`Server is working on port ${port}`);
});