import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import Header from '../Header'
import { Wrapper } from './general-layout.style'
import themes from '../../themes'

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
      </>
    </ThemeProvider>
  </Wrapper>
)
