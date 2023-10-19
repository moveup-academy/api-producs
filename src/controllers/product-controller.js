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
    // Percorrer o array [data] e incluir todos os produtos na tabela
    // para incluir o produto usar a função [await client.product.create({ data: product })]

    // crie um array e de um push para adicionar o produtor criado

    /**
     *
     */

    return res.status(201).json();
  },
  async update(req, res) {},
  async delete(req, res) {},
};
