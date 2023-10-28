const router = require("express").Router();
// const DataController = require("../controller/dataController");

router.get("/", (req, res) =>{
    const data = require("../data.json");
    return res.status(200).json(data)
})
module.exports=router