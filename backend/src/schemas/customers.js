const CustomersSchema = `
type CustomersPaginatedList {
  items: [Customer]
  total_count: Int
}

type Customer {
  id: ID
  first_name: String
  last_name: String
  email: String
  gender: String
  company: String
  city: String
  title: String
  lat: String
  long: String
}

type CustomersCountByCity {
  city: String
  customers_total: Int
}

type Query {
  getCustomerByID(id: ID!): Customer
  getCustomersCountsByCity(cities: [String]): [CustomersCountByCity]
  getCustomersByCity(city: String! offset: Int! limit: Int!): CustomersPaginatedList
}

schema {
  query: Query
}
`;

module.exports = CustomersSchema;