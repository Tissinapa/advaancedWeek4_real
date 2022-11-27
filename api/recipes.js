let recipes = {
    name: '""', 
    ingredients: ["Durum flour 4,5dl","eggs 3-4", "olive oil 2-3ts", "salt"],
    instructions: ["Measure flour", "add oil, eggs and salt", "stir", "boil in water"]
    
}

const express = require("express")
const router = express.Router()

router.get("/", (req,res)=> {
    res.send(recipes)
})

module.exports = router
