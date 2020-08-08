const fs = require('fs');

/**
 * In-memory database
 */
const customersDatabase = JSON.parse(
  fs.readFileSync('src/static/customers.json', 'utf8')
);

/**
 * Indexed data for faster access
 */
const customersIndexedBy = {
  id: customersDatabase
    .reduce((acc, customer) => {
      acc[customer.id] = customer;
      return acc;
    }, {}),
  city: Array
    .from(
      customersDatabase
        .reduce((acc, customer) => {
          acc.add(customer.city);
          return acc;
        }, new Set)
    )
    .reduce((acc, city) => {
      acc[city] = customersDatabase.filter(customer => customer.city === city);
      return acc;
    }, {})
};

/**
 * Repository for easier access to data using indexes
 */
const CustomersRepository = {
  findOne: id => customersIndexedBy['id'][id],
  findByCity: (city, offset, limit) => {
    const customers = customersIndexedBy['city'][city];
    return customers? customers.slice(offset, offset + limit) : null;
  },
  countByCity: city => {
    const customers = customersIndexedBy['city'][city];
    return customers? customers.length : 0;
  },
  findAllCities: () => Object.keys(customersIndexedBy['city'])
};

module.exports = CustomersRepository;