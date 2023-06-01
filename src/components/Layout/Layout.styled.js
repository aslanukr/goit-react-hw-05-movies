import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 0px) and (max-width: 479px) {
    width: 100vw;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
