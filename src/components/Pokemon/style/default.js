import styled from 'styled-components';
import {Card as _Card, Button as _Button } from "react-bootstrap";

export const CardStyled = styled(_Card)`
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.2);
  border: none;
  padding: 5px;
  margin: 10px;
`;

export const ButtonStyled = styled(_Button)`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  width: 137px;
  height: 35px;
  background: linear-gradient(180deg, #BD6879, #883744);
  color: #FFFFFF;
  border-radius: 4px;
  border: none;

  &:hover {
    background: linear-gradient(180deg, #F3859C, #883744);
    color: white;
  }

  &:focus {
    background: linear-gradient(180deg, #883744, #BD6879);
    outline: none
  }
`;

