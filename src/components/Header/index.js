import React from 'react'
import {
  Wrapper,
  NavWrapper,
  Logo,
  TitleWrapper,
  Title,
  SubTitle,
  NavLink,
  BrandLink
} from './style'

const headerLogo = require('../../assets/images/header-logo.png')

export default () => (
  <Wrapper>
    <BrandLink to="/">
      <Logo src={headerLogo} alt="The Sage of Discovery Logo" />
      <TitleWrapper>
        <Title>The Sage of Discovery</Title>
        <SubTitle>This is Life. Life is This.</SubTitle>
      </TitleWrapper>
    </BrandLink>
    <NavWrapper>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active" to="/blog">
        Blog
      </NavLink>
      <NavLink exact activeClassName="active" to="/gallery">
        Gallery
      </NavLink>
      <NavLink exact activeClassName="active" to="/mixtapes">
        Mixtapes
      </NavLink>
    </NavWrapper>
  </Wrapper>
)
