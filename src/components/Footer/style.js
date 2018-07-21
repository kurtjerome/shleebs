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
  margin-top: 30px;

  ${media.lessThan('md')`
    min-width: 420px;
    align-items: flex-start;
    justify-content: space-evenly;
  `};

  ${media.lessThan('sm')`
    min-width: unset;
    flex-direction: column;
  `};
`

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.lessThan('md')`
    flex-direction: column;
    align-items: flex-start;
  `};

  ${media.lessThan('sm')`
    margin-bottom: 15px;
  `};
`

export const LinkHeading = styled.h6`
  color: ${props => props.theme.lightColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  margin: 0 15px 0 0;

  ${media.lessThan('md')`
    margin-bottom: 10px;
  `};
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

export const EmailLink = styled.a`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
`
