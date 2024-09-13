const { Menus } = require("../models/");

class MenuController {
  static async read(req, res) {
    try {
      const menu = await Menus.findAll();
      res.status(200).json(menu);
    } catch (error) {
      console.log("error from menu controller:", error);
      res.status(500).json(error);
    }
  }
}

module.exports = MenuController;
