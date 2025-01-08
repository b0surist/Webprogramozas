import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Books API',
    version: "1.0.0",
    description: 'Books API'
  },
  host: 'localhost:3000',
  basePath: "/api/book"
};

const outputFile = './swagger-output.json';
const routes = ['./routes/book.js'];

swaggerAutogen()(outputFile, routes, doc);