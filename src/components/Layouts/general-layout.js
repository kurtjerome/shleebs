import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { Wrapper } from './general-layout.style'
import themes from '../../themes'
import Header from '../Header'
import Footer from '../Footer'

export default ({ children }) => (
  <Wrapper>
    <Helmet
      title={'The Sage of Discovery'}
      meta={[
        {
          name: 'description',
          content: 'The Sage of Discovery. This is Life. Life is this.'
        },
        { name: 'keywords', content: 'shelby, sage, lisieski, life' }
      ]}
    />
    <ThemeProvider theme={themes.main}>
      <>
        <Header />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  </Wrapper>
)
