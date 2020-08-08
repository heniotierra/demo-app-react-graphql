import React, { useLayoutEffect, useEffect, useState } from 'react';
import api from '../../services/api';
import { history } from '../../navigation';
import { PageWrapper, CardsWrapper } from '../../components/wrappers';
import { Card } from '../../components/cards';
import LoaderSpinner from '../../components/loader';

const CustomersByCity = () => {
  const [customersCitiesCounts, setCustomersCitiesCounts] = useState([]);

  useLayoutEffect(() => {}, [customersCitiesCounts]);

  useEffect(() => {
    api
      .post('graphql/', {
        query: `
          {
            getCustomersCountsByCity(cities: []) {
              city customers_total
            }
          }
        `
      })
      .then(res => {
        if (res.data && res.data.data &&
          res.data.data.getCustomersCountsByCity) {
            setCustomersCitiesCounts(res.data.data.getCustomersCountsByCity);
        } else {
          throw Error('invalid response');
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return <PageWrapper>
    <h2>Cities</h2>
    <CardsWrapper>
    {
      customersCitiesCounts.length === 0 ? 
        <LoaderSpinner/> :
        customersCitiesCounts.map(({ city, customers_total }, i) => 
          <Card
            key={`city-customer-${i}`}
            onClick={() => history.push(`/city-customers/${city}`)}>
            <div>{city}</div>
            <div>Customers: {customers_total}</div>
          </Card>
        )
    }
    </CardsWrapper>
  </PageWrapper>;
};

export default CustomersByCity;