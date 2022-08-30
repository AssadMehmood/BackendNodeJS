const express = require("express");
const fs = require("fs");

const products = [
  {
    name: "iphone",
    price: 5100,
    description: "iphone 13 pro max, 128 gb memory, 6.7' screen",
  },
  {
    name: "samsung",
    price: 4900,
    description: "samsung s21 ultra, 128 gb, 6.8' screen",
  },
  {
    name: "Clean Code",
    price: 250,
    description:
      "written by Robert C. Martin, talks about the important principles when writing clean, easy to understand, and maintainable code ",
  },
  {
    name: "The Art of Game Design",
    price: 140,
    descriptions:
      "Good game design happens when you view your game from as many perspectives as possible",
  },
  {
    name: "Clay Mask by Plantifique",
    price: 70,
    description:
      "Plantifique superfoods clay face mask will cleanse and hydrate your skin without causing irritation or burns",
  },
  {
    name: "apple watch",
    price: 3000,
    description:
      "Always-on Retina display has nearly 20% more screen area than Series 6, making everything easier to see and use",
  },
  {
    name: "Cadbury Dream 180g",
    price: 10,
    description:
      "Best By Date Reads As: DAY/MONTH/YEAR On All Australian & British Food Products",
  },
  {
    name: "Mansaf",
    price: 150,
    description: "the most delicious jordanian local meal",
  },
  {
    name: "Tesla",
    price: 2000000,
    description: "Model S All electric car",
  },
  {
    name: "16K Gold Your Name Bar Bracelet",
    price: 70,
    description:
      "【Personalised ID Bar Bracelet】 - This smooth and polished 16K bracelets features an engravable id tag for engraving.",
  },
];
const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  res.send(products);
});
//    /products/iphone
app.get("/products/:product/:price", (req, res) => {});

app.get("/namesOnly", (req, res) => {});

app.post("/products", (req, res) => {
  products.push(req.body);
  res.send(products);
});

app.put("/products", (req, res) => {
  products.forEach((elem) => {
    if (elem.name == req.body.product) {
      elem.price = req.body.price;
    }
  });
  res.send(products);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is working on port ${PORT}`);
});
