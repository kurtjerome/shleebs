import styled from 'styled-components'
import { Link } from 'gatsby'
import media from '../../media'

export const Wrapper = styled.footer`
  background-color: ${props => props.theme.footerBG};
  border-top: 1px solid ${props => props.theme.lightestColor};
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 940px;
  padding: 30px 20px;
  margin: 0 auto;

  ${media.lessThan('lg')`
    width: unset;
  `};
`

export const BrandLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin: 15px 0;
  text-decoration: none;

  ${media.lessThan('md')`
    margin: 10px;
    align-self: center;
  `};
`

export const Logo = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.lightestColor};
  margin-right: 10px;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.strong`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.headerFont};
  font-weight: 700;
  font-size: 20px;

  ${media.lessThan('md')`
    font-size: 16px;
  `};
`

export const SubTitle = styled.span`
  color: ${props => props.theme.lightColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 12px;

  ${media.lessThan('md')`
    font-size: 11px;
  `};
`

export const NavEmail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.lightestColor};
  padding: 10px 0;

  ${media.lessThan('md')`
    flex-direction: column;
  `};
`

export const BottomNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -20px;

  ${media.lessThan('md')`
    margin-left: -15px;
  `};

  ${media.lessThan('sm')`
    margin-left: -10px;
  `};
`

export const NavLink = styled(Link)`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 20px;
  padding: 10px 0;
  position: relative;
  z-index: 1;

  &:hover {
    text-decoration: underline;
  }

  ${media.lessThan('md')`
    margin: 0 15px;
  `};

  ${media.lessThan('sm')`
    margin: 0 10px;
  `};
`

export const EmailMe = styled.p`
  color: ${props => props.theme.lightColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 12px;
`

export const EmailMeSpan = styled.span``

export const EmailLink = styled.a`
  color: ${props => props.theme.primaryColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const PersonalLinks = styled.section`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  ${media.lessThan('md')`
    flex-direction: column;
  `};
`

export const FooterNotes = styled.p`
  color: ${props => props.theme.lightColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 300;
  font-size: 11px;
  line-height: 1.35em;

  ${media.lessThan('md')`
    text-align: center;
  `};
`

export const NoteLinks = styled.a.attrs({
  target: '_blank'
})`
  color: ${props => props.theme.primaryColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const SocialMediaLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SocialMediaLink = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => props.theme.lightestColor};
`
