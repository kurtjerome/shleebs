import styled from 'styled-components'
// import { Link } from 'gatsby'
import media from '../media'

export const Wrapper = styled.article`
  padding: 50px 15px 100px;
  max-width: 940px;
  margin: 0 auto;

  ${media.lessThan('lg')`
    padding-top: 0;
  `};
`

export const StoryHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;

  ${media.lessThan('lg')`
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
  `};

  ${media.lessThan('md')`
    margin-bottom: 0;
  `};
`

export const StoryImage = styled.img`
  width: 620px;
  height: 295px;
  background-color: #f0f0f0;

  ${media.lessThan('lg')`
    width: unset;
    justify-self: stretch;
    object-fit: cover;
    margin: 0 -15px;
  `};
`

export const StoryTitleWrapper = styled.div`
  ${media.lessThan('lg')`
    padding: 30px;
  `};

  ${media.lessThan('md')`
    padding: 30px 0px;
  `};
`

export const StoryTimestamp = styled.span`
  color: ${props => props.theme.lightColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
`

export const StoryTitle = styled.h1`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.headerFont};
  font-weight: 700;
  font-size: 42px;
  margin: 10px 0 0 0;

  ${media.lessThan('md')`
    font-size: 36px;
  `};
`

export const StoryBodyWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  max-width: 780px;
  margin: 0 auto;

  ${media.lessThan('lg')`
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
  `};
`

export const ShareWidget = styled.div``

export const StoryBody = styled.div`
  max-width: 610px;
  margin-bottom: 100px;

  ${media.lessThan('lg')`
    margin: 0 auto 100px;
  `};

  p {
    color: ${props => props.theme.bodyColor};
    font-family: ${props => props.theme.bodyFont};
    font-weight: 300;
    font-size: 16px;
    line-height: 1.75em;
  }
`
