import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layouts/general-layout'
import {
  Wrapper,
  IntroParagraph,
  Emphasize,
  Strikethrough
} from '../page-styles/index.style'

require('typeface-butler')
require('typeface-montserrat')

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta property="og:site_name" content="The Sage of Discovery" />
      <meta property="og:url" content="https://shleebs.netlify.com/" />
      <meta property="og:title" content="The Sage of Discovery" />
      <meta property="og:description" content="This is life. Life is this." />
      <meta
        property="og:image"
        content="https://portfolio-bella.netlify.com/static/1d02aacb9be02168114ee8a4a49529bf-fa985bb9ff2b2998c0e12ba3147bb947-648b2.jpg"
      />
    </Helmet>
    <Wrapper>
      <IntroParagraph>Hello There!</IntroParagraph>
      <IntroParagraph>
        I yam <Emphasize>Shelby Sage Lisieski</Emphasize>. I’m a dingus, I love
        to dance, and I work as an assface. I’m currently living in{' '}
        <Strikethrough>Avon</Strikethrough>{' '}
        <Strikethrough>Philippines</Strikethrough>{' '}
        <Strikethrough>Rochester</Strikethrough> <Emphasize>Boston</Emphasize>.
        Ben Howard, walking, peanut butter—these are a few of my favorite
        things.
      </IntroParagraph>
    </Wrapper>
  </Layout>
)

export default IndexPage
