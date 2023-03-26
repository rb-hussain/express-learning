// Import Express 
const express = require ("express");
const app = express();
const port = 4000;
// Import Path
const path = require("path");
// Import Body Parser 
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

// Set Response on  / Request 

// Get Method

// app.get("/", (req,res)=>{
//     res.send("<h1>Hello World.!</h1>")
// })

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+"/form.html"));
});

app.post("/api/v1/login",(req,res)=>{
    console.log(req.body)
    res.send(`Welcome MR.  ${req.body.name}`);
})

// Post Method
// app.post()


// Creating a server on port 4000;
app.listen(port, ()=>{
    console.log(`Server is working on port ${port}`);
});




// Normal FullStack have these funcanality
// C       . R   . U          . D
//create, read , update ,   delete


// In Express We have these four methods
// Get,  Post ,  Put,       Delete
// Read, Create, update,    delete





