const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'Student API',
    version: '1.0.0',
    description: 'API for managing students',
  },
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: ['./routes/student.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
