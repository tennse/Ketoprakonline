"use strict";

const fs = require("fs");
const path = require("path");

const encodeImage = (filePath) => {
  const fullPath = path.join(__dirname, "../../src/", filePath);
  const image = fs.readFileSync(fullPath);

  return `data:image/jpeg;base64,${image.toString("base64")}`;
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        name: "Ketoprak Biasa",
        price: 18000,
        image: encodeImage("ketoprak.jpeg"),
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        name: "Ketoprak Telur Dadar",
        price: 20000,
        image: encodeImage("ketoprak.jpeg"),
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        name: "Ketoprak Telur Ceplok",
        price: 25000,
        image: encodeImage("ketoprak.jpeg"),
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        name: "Ketoprak Ayam",
        price: 20000,
        image: encodeImage("ketoprak.jpeg"),
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        name: "Ketoprak Seafood",
        price: 25000,
        image: encodeImage("ketoprak.jpeg"),
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        name: "Ketoprak Spesial",
        price: 18000,
        image: encodeImage("ketoprak.jpeg"),
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        name: "Ketoprak Klasik",
        price: 30000,
        image: encodeImage("ketoprak.jpeg"),
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        name: "Ketoprak Vegetarian",
        price: 15000,
        image: encodeImage("ketoprak.jpeg"),
        desc: "Lorem ipsum dolor sit amet",
      },
    ];
    const menu = data.map((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Menus", menu, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Menus", null, {});
  },
};
