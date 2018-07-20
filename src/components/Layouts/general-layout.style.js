import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

injectGlobal`
  ${styledNormalize}

  body {
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
  }

  * {
    box-sizing: border-box;
  }
`

export const Wrapper = styled.div``
