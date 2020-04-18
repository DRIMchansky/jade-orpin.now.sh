// libraries
import React from 'react'
import styled from 'styled-components'
// components
import Logo from './Logo'
import NavList from './NavList'
import Number from './Number'
// custom
import { colors, breakpoints } from '../../utility/variables'

const Navigation = ({ open, setOpen, frontPage }) => {
  return (
    <NavigationStyled open={open} frontPage={frontPage}>
      <Logo frontPage={frontPage} />
      <NavList open={open} setOpen={setOpen} frontPage={frontPage} />
      <Number frontPage={frontPage} />
    </NavigationStyled>
  )
}

const NavigationStyled = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${colors.secondaryOne};
  color: ${colors.white};
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  z-index: 10;

  @media (${breakpoints.large}) {
    display: flex;
    height: auto;
    width: 100%;
    visibility: visible;
    opacity: 1;
    padding: 1rem 0;
    position: ${props => (props.frontPage ? 'absolute' : 'relative')};
    top: 0;
    left: ${props => (props.frontPage ? '50%' : '0')};
    transform: ${props => (props.frontPage ? 'translateX(-50%)' : 'none')};
    background: transparent;
    flex-direction: row;
    max-width: 1400px;
    margin: 0 auto;
    z-index: 10;
    align-items: center;
  }
`

export default Navigation