const { post } = require("axios");

const app = require("../src/app");

let server;

beforeEach(async () => {
  server = await app.listen(8001);
});

afterEach(async () => {
  await server.close();
});

describe("/graphql getCustomersByCity method", () => {
  it("should return customers with IDs 2 and 52 (first page)", async () => {
    const queryObj = {
      query: `
        {
          getCustomersByCity(city: "East Natchitoches, PA" offset: 0 limit: 2) {
            items {
              id first_name last_name email company
            }
            total_count
          }
        }
      `
    };

    const expectedResult = {
      "data": {
        "getCustomersByCity": {
          "items": [
            {
              "id": "2",
              "first_name": "Margaret",
              "last_name": "Mendoza",
              "email": "mmendoza1@sina.com.cn",
              "company": "Skipfire"
            },
            {
              "id": "52",
              "first_name": "Mary",
              "last_name": "Simmons",
              "email": "msimmons1f@ftc.gov",
              "company": "Devify"
            }
          ],
          "total_count": 20
        }
      }
    };

    const { data } = await post("http://localhost:8001/graphql", queryObj);

    expect(data).toStrictEqual(expectedResult);
  });

  it("should return customers with IDs 102 and 152 (second page)", async () => {
    const queryObj = {
      query: `
        {
          getCustomersByCity(city: "East Natchitoches, PA" offset: 2 limit: 2) {
            items {
              id first_name last_name email company
            }
            total_count
          }
        }
      `
    };

    const expectedResult = {
      "data": {
        "getCustomersByCity": {
          "items": [
            {
              "id": "102",
              "first_name": "Larry",
              "last_name": "Duncan",
              "email": "lduncan2t@ustream.tv",
              "company": "Flashpoint"
            },
            {
              "id": "152",
              "first_name": "Jack",
              "last_name": "Rogers",
              "email": "jrogers47@utexas.edu",
              "company": "Topicshots"
            }
          ],
          "total_count": 20
        }
      }
    };

    const { data } = await post("http://localhost:8001/graphql", queryObj);

    expect(data).toStrictEqual(expectedResult);
  });
});

describe("/graphql getCustomersCountsByCity method", () => {
  it("should return customers count in all cities in the database", async () => {
    const queryObj = {
      query: `
        {
          getCustomersCountsByCity(cities: []) {
            city customers_total
          }
        }
      `
    };

    const expectedResult = {
      "data": {
        "getCustomersCountsByCity": [
          {
            "city": "Warner, NH",
            "customers_total": 20
          },
          {
            "city": "East Natchitoches, PA",
            "customers_total": 20
          },
          {
            "city": "Lyon, WV",
            "customers_total": 20
          },
          {
            "city": "Willow Run, IL",
            "customers_total": 20
          },
          {
            "city": "Conyersville, AZ",
            "customers_total": 20
          },
          {
            "city": "Mount Baker, NY",
            "customers_total": 20
          },
          {
            "city": "Farmington Lake, OK",
            "customers_total": 20
          },
          {
            "city": "Martins Corner, TX",
            "customers_total": 20
          },
          {
            "city": "Pickerel Narrows, MT",
            "customers_total": 20
          },
          {
            "city": "Willaha, OH",
            "customers_total": 20
          },
          {
            "city": "Center, MA",
            "customers_total": 20
          },
          {
            "city": "Spring City, MS",
            "customers_total": 20
          },
          {
            "city": "Mittenlane, TX",
            "customers_total": 20
          },
          {
            "city": "East Waterford, ME",
            "customers_total": 20
          },
          {
            "city": "Coltman, WV",
            "customers_total": 20
          },
          {
            "city": "Scottsville, KS",
            "customers_total": 20
          },
          {
            "city": "Hebron, AZ",
            "customers_total": 20
          },
          {
            "city": "Longview, MA",
            "customers_total": 20
          },
          {
            "city": "Emerson, MT",
            "customers_total": 20
          },
          {
            "city": "North Knoxville, AL",
            "customers_total": 20
          },
          {
            "city": "Momford Landing, IN",
            "customers_total": 20
          },
          {
            "city": "Ipswich, IA",
            "customers_total": 20
          },
          {
            "city": "Storms, TX",
            "customers_total": 20
          },
          {
            "city": "Kalauao, SD",
            "customers_total": 20
          },
          {
            "city": "Farwell, FL",
            "customers_total": 20
          },
          {
            "city": "Brentwood Village, MT",
            "customers_total": 20
          },
          {
            "city": "Wilhelm Park, MT",
            "customers_total": 20
          },
          {
            "city": "Bannister Acres, NC",
            "customers_total": 20
          },
          {
            "city": "Bent Pine, VA",
            "customers_total": 20
          },
          {
            "city": "Mitchell, AZ",
            "customers_total": 20
          },
          {
            "city": "Social Circle, MO",
            "customers_total": 20
          },
          {
            "city": "Kreutzberg, NY",
            "customers_total": 20
          },
          {
            "city": "Cimarron, WA",
            "customers_total": 20
          },
          {
            "city": "Brookhaven, DC",
            "customers_total": 20
          },
          {
            "city": "Montverde Junction, NJ",
            "customers_total": 20
          },
          {
            "city": "Midland City, AK",
            "customers_total": 20
          },
          {
            "city": "Sacramento, ME",
            "customers_total": 20
          },
          {
            "city": "Del Rey Oaks, RI",
            "customers_total": 20
          },
          {
            "city": "Coal Creek, OK",
            "customers_total": 20
          },
          {
            "city": "Rabbitown, TN",
            "customers_total": 20
          },
          {
            "city": "Fairland, GA",
            "customers_total": 20
          },
          {
            "city": "Gaskil, DE",
            "customers_total": 20
          },
          {
            "city": "Morgan Mill, OK",
            "customers_total": 20
          },
          {
            "city": "Merrimac South, AL",
            "customers_total": 20
          },
          {
            "city": "Stanardsville, NH",
            "customers_total": 20
          },
          {
            "city": "Two Brooks, WI",
            "customers_total": 20
          },
          {
            "city": "Curriers, NM",
            "customers_total": 20
          },
          {
            "city": "Skookumchuck, VA",
            "customers_total": 20
          },
          {
            "city": "Edgerton, RI",
            "customers_total": 20
          },
          {
            "city": "Slater, MO",
            "customers_total": 20
          }
        ]
      }
    };

    const { data } = await post("http://localhost:8001/graphql", queryObj);

    expect(data).toStrictEqual(expectedResult);
  });

  it("should return items with 0 customer counts", async () => {
    const queryObj = {
      query: `
        {
          getCustomersCountsByCity(cities: ["Fortaleza, CE", "Curitiba, PR"]) {
            city customers_total
          }
        }
      `
    };

    const expectedResult = {
      "data": {
        "getCustomersCountsByCity": [
          {
            "city": "Fortaleza, CE",
            "customers_total": 0
          },
          {
            "city": "Curitiba, PR",
            "customers_total": 0
          }
        ]
      }
    };

    const { data } = await post("http://localhost:8001/graphql", queryObj);

    expect(data).toStrictEqual(expectedResult);
  });

  it("should return customers count in specified cities", async () => {
    const queryObj = {
      query: `
        {
          getCustomersCountsByCity(cities:
            ["East Natchitoches, PA", "Warner, NH"]) {
            city customers_total
          }
        }
      `
    };

    const expectedResult = {
      "data": {
        "getCustomersCountsByCity": [
          {
            "city": "East Natchitoches, PA",
            "customers_total": 20
          },
          {
            "city": "Warner, NH",
            "customers_total": 20
          }
        ]
      }
    };

    const { data } = await post("http://localhost:8001/graphql", queryObj);

    expect(data).toStrictEqual(expectedResult);
  });
});

describe("/graphql getCustomerByID method", () => {
  it("should return customer with ID 1", async () => {
    const queryObj = {
      query: `
        {
          getCustomerByID(id: 1) {
            id first_name last_name email gender company city title lat long
          }
        }
      `
    };

    const expectedResult = {
      "data": {
        "getCustomerByID": {
          "id": "1",
          "first_name": "Laura",
          "last_name": "Richards",
          "email": "lrichards0@reverbnation.com",
          "gender": "Female",
          "company": "Meezzy",
          "city": "Warner, NH",
          "title": "Biostatistician III",
          "lat": "43.2798",
          "long": "-71.81422"
        }
      }
    };

    const { data } = await post("http://localhost:8001/graphql", queryObj);

    expect(data).toStrictEqual(expectedResult);
  });

  it("should return customer with ID 502", async () => {
    const queryObj = {
      query: `
        {
          getCustomerByID(id: 502) {
            id first_name last_name email gender company city title lat long
          }
        }
      `
    };

    const expectedResult = {
      "data": {
        "getCustomerByID": {
          "id": "502",
          "first_name": "Helen",
          "last_name": "Kennedy",
          "email": "hkennedydx@parallels.com",
          "gender": "Female",
          "company": "Photobug",
          "city": "East Natchitoches, PA",
          "title": "Senior Cost Accountant",
          "lat": "31.76095",
          "long": "-93.08698"
        }
      }
    };

    const { data } = await post("http://localhost:8001/graphql", queryObj);

    expect(data).toStrictEqual(expectedResult);
  });

  it("should return error for inexistent customer", async () => {
    const queryObj = {
      query: `
        {
          getCustomerByID(id: 2000) {
            id first_name last_name email gender company city title lat long
          }
        }
      `
    };

    const expectedResult = {
      "errors": [
        {
          "message": "no customer exists with id 2000",
          "locations": [
            {
              "line": 3,
              "column": 11
            }
          ],
          "path": [
            "getCustomerByID"
          ]
        }
      ],
      "data": {
        "getCustomerByID": null
      }
    };

    const { data } = await post("http://localhost:8001/graphql", queryObj);

    expect(data).toStrictEqual(expectedResult);
  });
});