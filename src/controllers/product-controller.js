const client = require('../service/prisma')
const data = require('../data/index.json')

module.exports = {
  async index(req, res) {
    const products = await client.product.findMany()

    return res.status(200).json(products)
  },
  async findById(req, res) {
    
  },
  async create(req, res) {
    // Percorrer o array [data] e incluir todos os produtos
    // para incluir o produto usar a função [await client.product.create({ data: product })]

    return res.status(201).json(data)
  },
  async update(productId, data) {

  },
  async delete(productId) {

  }
}