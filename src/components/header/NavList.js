import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors, breakpoints } from '../../utility/variables'

const NavListStyled = styled.nav`
  width: 100%;
  transform: translateY(-10%);
  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & li {
  }
  & a {
    text-decoration: none;
    font-size: 1.3rem;
    padding: 1.5rem;
    display: block;
    color: red;
  }
  @media (${breakpoints.large}) {
    transform: none;
    margin-left: 20px;
    ul {
      flex-direction: row;
    }
  }
`

const NavList = () => {
  return (
    <NavListStyled>
      <ul>
        <li>
          <Link to="/">Главнвя</Link>
        </li>
        <li>
          <Link to="/">Услуги</Link>
        </li>
        <li>
          <Link to="/">Работы</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
      </ul>
    </NavListStyled>
  )
}

export default NavList
