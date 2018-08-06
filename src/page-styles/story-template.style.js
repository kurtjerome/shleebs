import styled from 'styled-components'
// import { Link } from 'gatsby'
// import media from '../media'

export const Wrapper = styled.article`
  padding: 50px 15px;
  max-width: 940px;
  margin: 0 auto;
`

export const StoryHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
`

export const StoryImage = styled.img`
  width: 620px;
  height: 295px;
  background-color: #f0f0f0;
`

export const StoryTitleWrapper = styled.div``

export const StoryTimestamp = styled.span`
  color: ${props => props.theme.lightColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
`

export const StoryTitle = styled.h1`
  color: ${props => props.theme.primaryColor};
  text-align: right;
  font-family: ${props => props.theme.headerFont};
  font-weight: 700;
  font-size: 42px;
  margin: 10px 0 0 0;
`

export const StoryBodyWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 780px;
  margin: 0 auto;
`

export const ShareWidget = styled.div``

export const StoryBody = styled.div`
  width: 610px;

  p {
    color: ${props => props.theme.bodyColor};
    font-family: ${props => props.theme.bodyFont};
    font-weight: 300;
    font-size: 16px;
    line-height: 1.75em;
  }
`
