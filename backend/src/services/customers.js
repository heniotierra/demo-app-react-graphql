const {
  Customer,
  CustomersCountByCity,
} = require('../model-helpers/customers');
const {
  PaginatedList,
} = require('../model-helpers/paginated-list');
const customersRepository = require('../repository/customers');
const hereMapsService = require('./maps');

const CustomersService = {
  /**
   * Finds customer with given ID.
   * If customer exists, finds its location based on the 'city' attribute and then returns it, 
   * or returns null if customer does not exist
   *
   * @param {number} id      Customer ID
   */
  findOne: async id => {
    const customer = customersRepository.findOne(id);
    if (!customer) return null;
    const { lat, lng } = await hereMapsService.getCoordinates(customer.city);
    return new Customer(id, customer, lat, lng);
  },

  /**
   * Finds customers count for given cities list, or for all cities if param is empty
   *
   * @param {[string]} cities (optional)      Cities to count customers
   */
  countsByCity: cities => {
    const allCities = cities && cities.length ? 
      cities : customersRepository.findAllCities();
    return allCities.map(city => 
      new CustomersCountByCity(
        city, customersRepository.countByCity(city)
      )
    );
  },

  /**
   * Finds customers by city
   * Returns paginated result
   *
   * @param {string} city      City where to find customers
   * @param {[string]} offset (optional)      Offset for list
   * @param {[string]} limit (optional)      Amount of object to find after offset
   */
  findByCity: (city, offset, limit) => {
    const customers = customersRepository.findByCity(city, offset, limit);
    const totalCount = customersRepository.countByCity(city);
    return new PaginatedList(customers, totalCount);
  }
};

module.exports = CustomersService;