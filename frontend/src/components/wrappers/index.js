import styled from 'styled-components';

export const CardsWrapper = styled.div`
  width: 80vw;
  max-width: 936px;
  min-height: 486px;
  margin-top: 30px;
  @media (max-width: 1169px) {
    max-width: 703px;  
  }
  @media (max-width: 877px) {
    max-width: 468px;
  }
  @media (max-width: 585px) {
    max-width: 235px;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;