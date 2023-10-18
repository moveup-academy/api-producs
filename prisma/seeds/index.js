const client = require('../../src/service/prisma');

async function main() {
  const data = [
    {
      id: 1,
      name: 'Bicicleta',
      description: 'Bicicleta 18 marchas',
      price: 1100,
      amount: 5,
    },
    {
      id: 2,
      name: 'Fogão',
      description: 'Fogão 6 bocas',
      price: 1499.9,
      amount: 10,
    },
  ];

  await client.product.createMany({
    data,
  });
}

main()
  .then('Seed has been created! 🔥')
  .catch((e) => console.log(e.message));
