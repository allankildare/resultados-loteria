import styled from 'styled-components'

interface StyledFlexProps {
  justifyContent: string
  alignItems: string
  flexDirection: 'row' | 'column'
  wrap: string
}

export const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }: StyledFlexProps) =>
    justifyContent || 'flex-start'};
  flex-direction: ${({ flexDirection }: StyledFlexProps) =>
    flexDirection || 'row'};
  flex-wrap: ${({ wrap }: StyledFlexProps) => wrap || 'row'};
`
