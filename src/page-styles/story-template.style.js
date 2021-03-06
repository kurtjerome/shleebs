import styled, { css } from 'styled-components'
import {
  FacebookIcon as ShareFacebookIcon,
  TwitterIcon as ShareTwitterIcon
} from 'react-share'
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
  margin: 0 auto 100px;

  ${media.lessThan('lg')`
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
  `};
`

export const ShareWrapper = styled.div`
  padding: 0 11.5px;
`

export const ShareWidget = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 30px;
  padding-top: 15px;

  ${media.lessThan('lg')`
    flex-direction: row;
    justify-content: center;
    position: static;
    padding-top: 0;
  `};

  .SocialMediaShareButton {
    margin-bottom: 10px;

    ${media.lessThan('lg')`
      margin: 0 5px;
    `};
  }
`

const ShareIconBaseStyles = css`
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.lightestColor};
  transition: border-color 0.3s;

  &:hover {
    border-color: ${props => props.theme.primaryColor};
  }
`

export const FacebookIcon = styled(ShareFacebookIcon).attrs({
  size: 40,
  iconBgStyle: { fill: 'transparent' },
  logoFillColor: props => props.theme.primaryColor
})`
  ${ShareIconBaseStyles};
`

export const TwitterIcon = styled(ShareTwitterIcon).attrs({
  size: 40,
  iconBgStyle: { fill: 'transparent' },
  logoFillColor: props => props.theme.primaryColor
})`
  ${ShareIconBaseStyles};
`

export const StoryBody = styled.div`
  max-width: 610px;

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
