import styled from 'styled-components'
import { Link } from 'gatsby'
import media from '../../media'

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.lightestColor};
`

export const BrandLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px;
  text-decoration: none;
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
`

export const SubTitle = styled.span`
  color: ${props => props.theme.lightColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 300;
  font-size: 13px;
`

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-self: stretch;

  ${media.lessThan('sm')`
    display: none;
  `};
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  flex: 1;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 15px;
  position: relative;
  color: ${props => props.theme.lightColor};
  transition: color 0.3s;
  font-family: ${props => props.theme.bodyFont};
  font-weight: 400;
  font-size: 12px;

  &:hover {
    color: ${props => props.theme.primaryColor};
  }

  &.active {
    color: ${props => props.theme.primaryColor};
    &::after {
      position: absolute;
      background-color: ${props => props.theme.primaryColor};
      left: 0;
      right: 0;
      bottom: -2px;
      height: 3px;
      content: '';
      border-radius: 2px;
    }
  }
`
