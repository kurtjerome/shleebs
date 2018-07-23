import React from 'react'
import Layout from '../components/Layouts/general-layout'
import Coming from '../components/Coming'
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
    <Wrapper>
      <IntroParagraph>Hello There!</IntroParagraph>
      <IntroParagraph>
        I yam <Emphasize>Shelby Sage Lisieski</Emphasize>. I’m a dingus, I love
        to dance, and I work as an assface. I’m currently living in{' '}
        <Strikethrough>Avon</Strikethrough>{' '}
        <Strikethrough>Philippines</Strikethrough>{' '}
        <Strikethrough>Rochester</Strikethrough> <Emphasize>Boston</Emphasize>.
        Ben Howard, walking, peanut butter—these are few of my favorite things.
      </IntroParagraph>
    </Wrapper>
  </Layout>
)

export default IndexPage
