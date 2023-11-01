const client = require('../service/prisma');
const data = require('../data/index.json');

// req -> request
// res -> response

module.exports = {
  async index(req, res) {
    // SELECT * FROM products LIMIT 10
    const products = await client.product.findMany({
      take: 10,
    });

    return res.status(200).json(products);
  },
  async findById(req, res) {
    /**
     * 1º pegar o id da rota X
     * 2º Listar o produto do id respectivo x
     * 3º Retornar um erro se nao houver o produto x
     * 4º Retornar o produto do respectivo id caso encontrado x
     */
    const id = req.params.id; // query params ?id=1;
    const product = await client.product.findUnique({
      where: {
        id: Number(id),
      },
    });

    // >= 400 error response

    if (!product) {
      return res
        .status(404)
        .json({ message: `Product [${id}] does not exists!` });
    }

    return res.status(200).json(product);
  },
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
        data,
      });

      // console.log(result);

      return res.status(201).json({ data, response }); // retorna para o cliente
    } catch (error) {
      console.error('Error creating the product:', error);
      res.status(500).send('Error creating the product.');
    }
  },
  async updateAll(req, res) {
    try {
      const id = req.params.id;
      const product = await client.product.update({
        where: {
          id: Number(id),
        },
        data: {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          amount: req.body.amount,
        },
      });
      return res.status(201).json(product);
    } catch (error) {
      console.error('Error update this product', error);
      res.status(404).json({ message: `Error this ID not exits` });
    }
  },
  /**
   * 1º pegar o id da rota
   * 2º listar produto pelo id
   * 3º validar se o produto existes (caso não exista retornar erro ex: Find by id)
   * 4º atualizar todos os campos do produto (name, description, amount, price)
   * 5º Enviar o produto atuaizado para o client
   */
  async updatePrice(req, res) {
    try {
      const id = req.params.id;
      const productAlreadyExist = await client.product.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!productAlreadyExist) {
        throw new Error(`Error this ID [${id}] not exits`);
      }

      const currentProdutPricePercentage =
        (productAlreadyExist.price * 10) / 100;
      const newProductPrice =
        productAlreadyExist.price - currentProdutPricePercentage;

      const product = await client.product.update({
        where: {
          id: Number(id),
        },
        data: {
          price: newProductPrice,
          promotionPrice: true,
        },
      });

      return res.status(201).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  /**
   *
   * 1º pegar o id da rota
   * 2º listar produto pelo id
   * 3º validar se o produto existes (caso não exista retornar erro ex: Find by id)
   * 4º atualizar o campos do produto (price) com - 10% de desconto
   * 5º Enviar o produto atuaizado para o client
   */
  async delete(req, res) {},
};

//   const {id} = req.params
//   const {name, description, price, amount} = req.body

//   if (!name) {
//     return res.status(400).json({message: 'Product not found'})
//   }
//   try{
//     const IDconfirm = await client.product.findUnique(id)
//     if(IDconfirm){
//       try{
//         res.json(await client.product.update({name, description, price, amount}))
//       } catch (error) {
//         res.status(500).json({message: 'Error is not working' })
//       }
//   } else {
//     res.status(404).json({ message: 'Product not found.' })
//   }
// } catch (error) {
//   res.status(500).json({ message: 'Error in server.' })
// }
