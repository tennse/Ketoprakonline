const router = require("express").Router();
const menu = require('./menuRoutes');

router.use("/menus", menu);

module.exports = router;
