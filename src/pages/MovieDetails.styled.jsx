import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: block;
  max-width: 120px;
  height: 35px;
  border: 2px solid black;
  border-radius: 6px;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 15px;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
    background-color: #5690a3;
  }
`;

export const AboutMovie = styled.div`
  display: flex;
`;

export const MovieInfo = styled.div`
  margin-left: 15px;
`;

export const Container = styled.div`
  margin: 0 15px;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 5px;
  border-radius: 4px;

  &:last-child {
    margin-left: 20px;
  }

  &:hover,
  & active {
    background-color: #5690a3;
  }
`;
