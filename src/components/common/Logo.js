import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors, breakpoints } from '../../utility/variables'

const StyledLogo = styled(Link)`
  font-weight: 900;
  font-size: 2rem;
  align-self: flex-start;
  padding: 2rem;
  color: ${colors.white};
  text-decoration: none;
  z-index: 999;

  @media (${breakpoints.large}) {
    color: ${props => (props.front ? colors.white : colors.secondaryTwo)};
    padding-left: 0;
  }
`

const Logo = ({ front }) => {
  return <StyledLogo front={front}>Jade</StyledLogo>
}

export default Logo
