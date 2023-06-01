import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: block;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  max-width: 70vw;
  font-size: 20px;
  font-weight: 500;
  padding: 5px 5px;
  background: none;
  color: #ffffff;

  outline: none;
  border: none;
  border-bottom: 1px solid #bd7c15;
  &:hover,
  &:focus {
    margin: -1px;
    border: 2px solid transparent;
    border-bottom: 2px solid #bd7c15;
  }
`;

export const SearchBtn = styled.button`
  border: none;
  background: none;
  scale: 1;

  transition: scale 250ms ease-in;
  &:hover,
  &:focus {
    scale: 1.1;
  }
`;
