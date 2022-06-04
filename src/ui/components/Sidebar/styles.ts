import styled from 'styled-components'

interface StyledSidebarProps {
  selectedColor: string
}

export const StyledSidebar = styled.aside`
  background-color: ${({ selectedColor }: StyledSidebarProps) => selectedColor || 'var(--aside-and-megasena-green)'};
  min-height: 100vh;
  min-width: 30vw;
  width: 30vw;
  padding: 3rem 0 3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
`
