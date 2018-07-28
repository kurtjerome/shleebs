import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  Wrapper,
  InnerWrapper,
  BottomNav,
  NavLink,
  PersonalLinks,
  LinkHeading,
  SocialMediaLink,
  EmailLink,
  LinkColumn,
  SocialMediaLinks,
  BrandLink,
  Logo,
  TitleWrapper,
  Title,
  SubTitle
} from './style'

const headerLogo = require('../../assets/images/header-logo.png')

const Footer = ({ site }) => (
  <Wrapper>
    <InnerWrapper>
      <BrandLink to="/">
        <Logo src={headerLogo} alt="The Sage of Discovery Logo" />
        <TitleWrapper>
          <Title>{site.siteMetadata.title}</Title>
          <SubTitle>This is Life. Life is This.</SubTitle>
        </TitleWrapper>
      </BrandLink>
      <BottomNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/mixtapes">Mixtapes</NavLink>
      </BottomNav>
      <PersonalLinks>
        <LinkColumn>
          <LinkHeading>Be my friend</LinkHeading>
          <SocialMediaLinks>
            <SocialMediaLink
              target="_blank"
              href="https://www.facebook.com/shelby.lisieski"
            />
            <SocialMediaLink
              target="_blank"
              href="https://www.instagram.com/shelbysagelisieski/"
            />
            <SocialMediaLink
              target="_blank"
              href="https://twitter.com/slisieski"
            />
          </SocialMediaLinks>
        </LinkColumn>
        <LinkColumn>
          <LinkHeading>Email me</LinkHeading>
          <EmailLink href="mailto:shelbylisieski@gmail.com">
            shelbylisieski@gmail.com
          </EmailLink>
        </LinkColumn>
      </PersonalLinks>
    </InnerWrapper>
  </Wrapper>
)

export default () => (
  <StaticQuery
    query={graphql`
      query FooterTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={Footer}
  />
)
