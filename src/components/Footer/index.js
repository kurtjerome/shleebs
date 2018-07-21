import React from 'react'
import {
  Wrapper,
  Quote,
  Rule,
  BottomNav,
  NavLink,
  PersonalLinks,
  LinkHeading,
  SocialMediaLink,
  EmailLink,
  LinkColumn,
  SocialMediaLinks
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
  </Wrapper>
)
