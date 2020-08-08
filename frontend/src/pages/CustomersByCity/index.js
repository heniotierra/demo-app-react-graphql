import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { history } from '../../navigation';
import { PageWrapper, CardsWrapper } from '../../components/wrappers';
import { paginationLimit } from '../../constants';
import { Card } from '../../components/cards';
import Pagination from '../../components/pagination';
import { SimpleBtn } from '../../components/buttons';
import { reduceStringAddingEllipsis } from '../../utils';
import LoaderSpinner from '../../components/loader';

const CustomersByCity = () => {
  const [cityCustomers, setCityCustomers] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const { city } = useParams();

  const getCustomers = (next = false, prev = false) => {
    const requestOffset = next ?
      offset + paginationLimit
      :
      prev ?
        offset - paginationLimit
        :
        offset;

    api
      .post('graphql/', {
        query: `
          {
            getCustomersByCity(
              city: "${city}"
              offset: ${requestOffset} 
              limit: ${paginationLimit}
            ) {
              items {
                id first_name last_name email company
              }
              total_count
            }
          }
        `
      })
      .then(res => {
        if (res.data && res.data.data && res.data.data.getCustomersByCity &&
          res.data.data.getCustomersByCity.items) {
          setCityCustomers(res.data.data.getCustomersByCity.items);
          setOffset(requestOffset);
          setTotalCount(res.data.data.getCustomersByCity.total_count);
        } else {
          throw Error('invalid response');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const nextPage = () => getCustomers(true, false);

  const prevPage = () => getCustomers(false, true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getCustomers(), []);  

  return <PageWrapper>
    <h2>{city}</h2>
    <CardsWrapper>
      {
        cityCustomers.length === 0 ? 
          <LoaderSpinner/>
          :
          cityCustomers.map(({
            id,
            first_name,
            last_name,
            email,
            company
          }, i) => {
            const name = `${first_name} ${last_name}`;
          
            return <Card
              key={`city-customer-${i}`}
              onClick={() => history.push(`/customer/${id}`)}>
              <div title={name.length > 14 ? name : null}>
                <b>Name:</b> {reduceStringAddingEllipsis(name, 14)}
              </div>
              <div title={email.length > 12 ? email : null}>
                <b>E-mail:</b> {reduceStringAddingEllipsis(`${email}`, 12)}
              </div>
              <div title={company.length > 13 ? company : null}>
                <b>Company:</b> {reduceStringAddingEllipsis(`${company}`, 13)}
              </div>
              <div>
                <b>User ID:</b> {id}
              </div>
            </Card>
          })
      }
    </CardsWrapper>
    <Pagination
      offset={offset}
      prevPage={prevPage}
      nextPage={nextPage}
      totalCount={totalCount}
      paginationLimit={paginationLimit}/>
    <SimpleBtn onClick={() => history.goBack()}>&lt; Back</SimpleBtn>
  </PageWrapper> 
};

export default CustomersByCity;