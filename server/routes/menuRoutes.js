const router = require("express").Router();
const menuController = require("../controllers/menuController");

router.get("/", menuController.read);

module.exports = router;
