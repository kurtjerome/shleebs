import styled from 'styled-components'
// import { Link } from 'gatsby'
import media from '../media'

export const Wrapper = styled.div`
  padding: 50px;
  max-width: 1100px;
  margin: 0 auto;

  ${media.lessThan('md')`
    padding: 30px;
  `};

  ${media.lessThan('sm')`
    padding: 15px;
  `};
`

export const IntroParagraph = styled.p`
  color: ${props => props.theme.lightColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 48px;
  line-height: 1.25em;

  ${media.lessThan('md')`
    font-size: 38px;
  `};

  ${media.lessThan('sm')`
    font-size: 32px;
  `};
`

export const Emphasize = styled.em`
  color: ${props => props.theme.primaryColor};
  font-style: normal;
`

export const Strikethrough = styled.span`
  text-decoration: line-through;
`
