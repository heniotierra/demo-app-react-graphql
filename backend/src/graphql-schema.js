const { buildSchema } = require('graphql/utilities');

const CustomersSchema = require('./schemas/customers');
const CustomersController = require('./controllers/customers');

// Interpolate different schema definitions
const schema = buildSchema(`
  ${CustomersSchema}
`);

// Endpoint controller methods
const root =  {
  ...CustomersController
};

module.exports = { schema, root };