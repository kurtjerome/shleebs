import styled from 'styled-components'
import { Link } from 'gatsby'
import media from '../../media'

export const Wrapper = styled.footer`
  background-color: ${props => props.theme.footerBG};
  border-top: 1px solid ${props => props.theme.lightestColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`

export const Quote = styled.p`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.headerFont};
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`

export const Rule = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${props => props.theme.lightColor};
  margin: 40px 0;
`

export const BottomNav = styled.nav`
  display: flex;
  flex-direction: row;
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

  ${media.lessThan('md')`
    margin: 0 15px;
  `};

  ${media.lessThan('sm')`
    margin: 0 10px;
  `};
`

export const PersonalLinks = styled.section`
  min-width: 620px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

export const LinkHeading = styled.h6`
  color: ${props => props.theme.lightColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 15px;
`

export const SocialMedia = styled.div`
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

export const EmailMe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const EmailLink = styled.a`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 14px;
`
