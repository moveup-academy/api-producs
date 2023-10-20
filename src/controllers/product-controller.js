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
      /**
       *  1º Percorrer o array "data" ok
       *  2º Incluir o item no banco de dados ok
       *  3º Retornar o array adicionado ok
       */
    
      // const response = [];

      // for(let i = 0; i < data.length; i++) {
      //   const result = await client.product.create({
      //     data: {
      //       amount: data[i].amount, // 10
      //       name: data[i].name, // televisao
      //       price: data[i].price, // Televisão 50 polegadas
      //       description: data[i].description, // 5999.9
      //     }
      //   })

      //   response.push(result)
      // }

      const response = await client.product.createMany({
          data
      });

      // console.log(result);
      
      return res.status(201).json({ data, response }); // retorna para o cliente
    } catch (error) {
      console.error("Error creating the product:", error);
      res.status(500).send("Error creating the product.");
    }
},
  async update(req, res) {},
  
  async delete(req, res) {},
};
