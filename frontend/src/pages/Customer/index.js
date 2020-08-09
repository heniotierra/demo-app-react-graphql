import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { history } from '../../navigation';
import api from '../../services/api';
import { PageWrapper } from '../../components/wrappers';
import LoaderSpinner from '../../components/loader';
import HereMap from '../../services/maps';
import Map from '../../components/map';
import { SimpleBtn } from '../../components/buttons';
import { environment } from '../../constants';
import { CustomerData } from './style';

export const HereJsKey = 'oIFgxdTYc381Qh-w9H2dVPkdcArxt6d9pmf6gAgAfes';

const Customer = () => {
  const [customer, setCustomer] = useState(null);
  const mapRef = useRef();
  const { id } = useParams();

  useEffect(() => {
    api
      .post('graphql/', {
        query: `
          {
            getCustomerByID(id: ${id}) {
              id first_name last_name email gender company city title lat long
            }
          }
        `
      })
      .then(res => {
        if (res.data && res.data.data && res.data.data.getCustomerByID) {
          setCustomer(res.data.data.getCustomerByID);
        } else {
          throw Error('invalid response');
        }
      })
      .catch(err => {
        console.error(err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (customer && environment !== 'test') {
      const hereMap = new HereMap(mapRef.current);
      hereMap.moveTo(customer.lat, customer.long);
    }
  }, [customer]);

  const name = customer? `${customer.first_name} ${customer.last_name}` : null;

  return <PageWrapper>
    {
      !customer ?
        <LoaderSpinner/>
        :
        <> 
          <CustomerData>
            <h2>{name}</h2><br/><br/>
            <b>E-mail:</b> {customer.email}<br/><br/>
            <b>Gender:</b> {customer.gender}<br/><br/>
            <b>Company:</b> {customer.company}<br/><br/>
            <b>Title:</b> {customer.title}<br/><br/>
            <b>City:</b> {customer.city}<br/><br/>
          </CustomerData>
          <Map ref={mapRef}/>
          <SimpleBtn onClick={() => history.goBack()}>&lt; Back</SimpleBtn>
        </>
    }
  </PageWrapper>
};

export default Customer;