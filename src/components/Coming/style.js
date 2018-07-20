import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 71px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const WorkInProgress = styled.h1`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.headerFont};
  font-weight: 700;
  font-size: 72px;
  margin: 0;
  text-align: center;
`

export const Description = styled.p`
  color: ${props => props.theme.bodyColor};
  font-family: ${props => props.theme.bodyFont};
  font-weight: 300;
  font-size: 18px;
  line-height: 1.5em;
`
