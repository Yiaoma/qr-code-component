import styled from 'styled-components';
import { H1, P, Img } from 'components';

export const StyledCard = styled.div`
  width: 320px;
  padding: 16px;
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const StyledH1 = styled(H1)`
  font-size: 22px;
  margin: 24px 16px 16px;
  color: #1f314f;
`;

export const StyledP = styled(P)`
  font-size: 15px;
  color: grey;
  margin: 0px 32px 24px;
  color: #7d889e;
`;

export const StyledImg = styled(Img)`
  width: 100%;
  border-radius: 20px;
`;
