import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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

const Header = ({ site }) => (
  <Wrapper>
    <BrandLink to="/">
      <Logo src={headerLogo} alt="The Sage of Discovery Logo" />
      <TitleWrapper>
        <Title>{site.siteMetadata.title}</Title>
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

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={Header}
  />
)
