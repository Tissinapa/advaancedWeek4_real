const express = require("express");
const app = express();
const path = require("path")
const port= 3000



app.get('/', (req,res) =>{
    res.send("<h1>Testing</h1>");
    console.log("toimii.... kai")
    
});
app.use(express.json())
app.use("/api/recipes", require("./api/recipes.js"));



app.get("/recipe/:food", (req,res) => {
  
    /* recipes.name = req.params.food */
    /* res.json(recipes[req.params.name]); */
    console.log(req.params.food)
    res.send(req.params.food)
    
});




app.listen(port, () => console.log('listening port', port));

