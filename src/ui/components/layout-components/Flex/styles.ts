import styled from 'styled-components'
import type * as CSS from 'csstype'

export const StyledFlex = styled.div<CSS.Properties>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent || 'flex-start'};
  flex-direction: ${({ flexDirection }) =>
    flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'row'};
`

