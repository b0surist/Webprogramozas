import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Product API',
    version: "1.0.0",
    description: 'Products API'
  },
  host: 'localhost:3000',
  basePath: "/api/protucs"
};

const outputFile = './swagger-output.json';
const routes = ['./routes/products.js'];

swaggerAutogen()(outputFile, routes, doc);