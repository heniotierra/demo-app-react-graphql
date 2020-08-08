const customerService = require('../services/customers');

const CustomersController = {
  /**
   * Finds customer with given ID.
   * Returns Customer if it exists, or returns Error
   *
   * @param {number} id      Customer ID
   */
  getCustomerByID: async ({id}) => {
    const customer = await customerService.findOne(id);
    if (!customer) {
      throw new Error('no customer exists with id ' + id);
    }
    return customer;
  },

  /**
   * Finds customers count for given cities list, or for all cities if param is empty
   *
   * @param {[string]} cities (optional)      Cities to count customers
   */
  getCustomersCountsByCity: ({cities}) => {
    return customerService.countsByCity(cities);
  },

  /**
   * Finds customers by city
   * Returns paginated result
   *
   * @param {string} city      City where to find customers
   * @param {[string]} offset (optional)      Offset for list
   * @param {[string]} limit (optional)      Amount of object to find after offset
   */
  getCustomersByCity: ({city, offset, limit}) => {
    return customerService.findByCity(city, offset, limit);
  }
};

module.exports = CustomersController;
