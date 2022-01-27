import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: unset;
  text-decoration: none;
  transition: 0.125s ease-in-out background, 0.125s ease-in-out color;
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  &:hover {
    background: ${({ theme }) => theme.colors.white(40)};
    color: white;
  }
`;

export default NavLink;
