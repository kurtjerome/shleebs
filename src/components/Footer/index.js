import React from 'react'
import {
  Wrapper,
  Quote,
  Rule,
  BottomNav,
  NavLink,
  PersonalLinks,
  SocialMedia,
  LinkHeading,
  SocialMediaLink,
  EmailMe,
  EmailLink
} from './style'

export default () => (
  <Wrapper>
    <Quote>Everything happens for a reason</Quote>
    <Rule />
    <BottomNav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/mixtapes">Mixtapes</NavLink>
    </BottomNav>
    <PersonalLinks>
      <SocialMedia>
        <LinkHeading>Be my friend</LinkHeading>
        <SocialMediaLink
          target="_blank"
          href="https://www.facebook.com/shelby.lisieski"
        />
        <SocialMediaLink
          target="_blank"
          href="https://www.instagram.com/shelbysagelisieski/"
        />
        <SocialMediaLink target="_blank" href="https://twitter.com/slisieski" />
      </SocialMedia>
      <EmailMe>
        <LinkHeading>Email me</LinkHeading>
        <EmailLink>shelbylisieski@gmail.com</EmailLink>
      </EmailMe>
    </PersonalLinks>
  </Wrapper>
)
