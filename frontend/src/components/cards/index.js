import styled from 'styled-components';
import { shadows } from '../../style';
import { colors } from '../../style';

export const Card = styled.div`
  float: left;
  margin: 10px;
  width: 200px;
  min-width: 200px;
  height: auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.secondary};
  background-color: ${colors.midPrimary};
  cursor: pointer;
  padding: 7px;
  box-shadow: ${shadows.light};
  :hover {
    background-color: ${colors.primary};
  }
  div {
    margin: 7px;
  }
`;
