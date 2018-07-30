import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import media from '../media'

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px 0;

  ${media.lessThan('xxl')`
    max-width: 1208px;
  `};

  ${media.lessThan('lg')`
    max-width: 780px;
  `};
`

export const Brick = css`
  width: 33.33333333%;
  padding-left: 20px;
  padding-right: 20px;

  ${media.lessThan('lg')`
    width: 50%;
    padding-left: 18px;
    padding-right: 18px;
  `};

  ${media.lessThan('md')`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  `};
`

export const TitleWrapper = styled.div`
  ${Brick};
  padding-bottom: 50px;

  ${media.lessThan('md')`
    width: 65%;
  `};
`

export const Title = styled.h1`
  color: ${props => props.theme.primaryColor};
  text-align: right;
  font-family: ${props => props.theme.headerFont};
  font-weight: 700;
  font-size: 72px;
  margin: 20px 0 10px;

  ${media.lessThan('md')`
    font-size: 54px;
    text-align: left;
  `};

  ${media.lessThan('sm')`
    font-size: 42px;
  `};
`

export const SubTitle = styled.h2`
  color: ${props => props.theme.lightColor};
  text-align: right;
  font-family: ${props => props.theme.bodyFont};
  font-weight: 300;
  font-size: 20px;
  margin: 0;
  line-height: 1.2em;

  ${media.lessThan('md')`
    font-size: 16px;
    text-align: left;
  `};
`

export const PostPreview = styled.article`
  ${Brick};
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;

  &:nth-of-type(4n + 1) {
    padding-left: 60px;
  }

  &:nth-of-type(4n + 2) {
    padding-right: 60px;
  }

  &:nth-of-type(4n + 3) {
    padding-right: 40px;
  }

  &:nth-of-type(4n + 4) {
    padding-left: 40px;
  }

  ${media.lessThan('lg')`
    &:nth-of-type(3n + 1) {
      padding-left: 40px;
    }

    &:nth-of-type(3n + 2) {
      padding-right: 40px;
    }

    &:nth-of-type(3n + 3) {
      padding-right: 30px;
    }
  `};

  ${media.lessThan('md')`
    &:nth-of-type(2n + 1) {
      padding-left: 20%;
      padding-right: 15px;
    }

    &:nth-of-type(2n + 2) {
      padding-right: 20%;
      padding-left: 15px;
    }
  `};

  ${media.lessThan('sm')`
    padding-left: 15px !important;
    padding-right: 15px !important;
  `};
`

export const PostImage = styled.div`
  background-color: ${props => props.theme.lightestColor};
  height: 200px;
  margin-bottom: 20px;
`

export const PostTimestamp = styled.span`
  color: ${props => props.theme.lightColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 0.1em;
`

export const PostTitle = styled(Link)`
  font-family: ${props => props.theme.headerFont};
  font-weight: 700;
  font-size: 28px;
  color: ${props => props.theme.primaryColor};
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const PostContent = styled.p`
  color: ${props => props.theme.bodyColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 300;
  font-size: 14px;
  line-height: 1.5em;
  margin: 0 0 10px;
`
