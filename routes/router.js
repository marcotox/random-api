const router = require("express").Router();
const DataController = require("../controller/dataController");

router.get("/", DataController.getDatas)

module.exports=router