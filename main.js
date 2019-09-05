"use strict";

const port = 3000,
	express = require("express"),
	app = express(),
	homeController = require("./controllers/homeController.js");

app.use(
   express.urlencoded({
     extended: false
   })
);

app.use(express.json());  // telll your express.js application to parse URL-encoded data

app.use((req, res, next) => { //define a middleware function

       console.log(`request made to : ${req.url}`); //log request path too console
       next(); //call the next function

});



app.post("/", (req, res) => { //create a new post route for home page

    console.log(req.body);  //log request body
    console.log(req.query);	
    res.send("POST successful!");	
});



//app.get("/items/:vegetable", (req, res) => { //add a route to get url parameters

//	let veg = req.params.vegetable;
//	res.send(`This is the page for ${veg}`);

//});
//
app.get("/items/:vegetable", homeController.sendReqParam);


app.use((req, res, next) => { //define a middleware function

       console.log(`request made to : ${req.url}`); //log request path too console
       next(); //call the next function

});


app.listen(port, () => {
	console.log(`Server running on port: ${port}` );
});
