import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  Wrapper,
  InnerWrapper,
  BottomNav,
  NavLink,
  PersonalLinks,
  EmailLink,
  SocialMediaLinks,
  BrandLink,
  Logo,
  TitleWrapper,
  Title,
  SubTitle,
  NavEmail,
  EmailMe,
  EmailMeSpan,
  FooterNotes,
  NoteLinks,
  FacebookLink,
  InstagramLink,
  TwitterLink
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
      <NavEmail>
        <BottomNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/mixtapes">Mixtapes</NavLink>
        </BottomNav>
        <EmailMe>
          <EmailMeSpan>Email me at</EmailMeSpan>{' '}
          <EmailLink href="mailto:shelbylisieski@gmail.com">
            shelbylisieski@gmail.com
          </EmailLink>
        </EmailMe>
      </NavEmail>
      <PersonalLinks>
        <SocialMediaLinks>
          <FacebookLink
            target="_blank"
            href="https://www.facebook.com/shelby.lisieski"
          >
            Facebook
          </FacebookLink>
          <InstagramLink
            target="_blank"
            href="https://www.instagram.com/shelbysagelisieski/"
          >
            Instagram
          </InstagramLink>
          <TwitterLink target="_blank" href="https://twitter.com/slisieski">
            Twitter
          </TwitterLink>
        </SocialMediaLinks>
        <FooterNotes>
          Made in the Philippines with so much{' '}
          <span role="img" aria-label="Poop">
            💩
          </span>.<br />
          Powered by{' '}
          <NoteLinks href="https://www.gatsbyjs.com/" title="Gatsby">
            Gatsby
          </NoteLinks>
          {' and '}
          <NoteLinks href="https://www.netlify.com/" title="Netlify">
            Netlify
          </NoteLinks>.
        </FooterNotes>
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
