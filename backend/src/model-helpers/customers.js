/*
 * Wrapper for customer data
 */
class Customer {
  constructor(
    id, 
    {
      first_name,
      last_name,
      email,
      gender,
      company,
      city,
      title
    }, 
    lat,
    long
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
    this.company = company;
    this.city = city;
    this.title = title;
    this.lat = lat;
    this.long = long;
  }
}

/*
 * Wrapper for customers count by city
 */
class CustomersCountByCity {
  constructor(city, customers_total) {
    this.city = city;
    this.customers_total = customers_total;
  }
}

module.exports = { Customer, CustomersCountByCity };