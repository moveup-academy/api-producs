const client = require('../service/prisma');
const data = require('../data/index.json');

// req -> request
// res -> response

module.exports = {
  async index(req, res) {
    console.log(req.body);
    // SELECT * FROM products
    const products = await client.product.findMany();

    return res.status(200).json(products);
  },
  async findById(req, res) {},
  async create(req, res) {
    try {
        const produtosParaInserir = [
          {
            name: "Televisão",
            description: "Televisão 50 polegadas",
            price: 5999.9,
            amount: 10
        },
        {
            name: "Playstation 5",
            description: "Video game playstation 5 slim",
            price: 4999.9,
            amount: 5
        },
        {
            name: "Maquina de lavar",
            description: "Maquina de lavar 12 quilos",
            price: 2000,
            amount: 15
        },
        {
            name: "Celular Samsung",
            description: "Celular Samsung A52",
            price: 1890.9,
            amount: 3
        }
    ];
    const result = await client.product.createMany({
        data: produtosParaInserir 
    });

    console.log(result);
    return res.status(201).json();

  } catch (error) {
      console.error("Error creating the product:", error);
      res.status(500).send("Error creating the product.");
  }
},
  async update(req, res) {},
  async delete(req, res) {},
};
