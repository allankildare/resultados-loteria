import { StyledSidebar } from './styles'
import { ComboBox } from './../ComboBox/ComboBox'
import { ContestText } from '../ContestText'
import { ContestLogo } from '../ContestLogo'
import { removeAccentsAndSpaces } from '../../../helpers'
import { If } from 'react-extras'

interface Options {
  id: number
  nome: string
}

interface SidebarProps {
  options: Options[]
}

export function Sidebar({ options }: SidebarProps) {
  const formattedOptions = options?.map(item => {
    const value = removeAccentsAndSpaces(item?.nome)
    return { ...item, value }
  })

  return (
    <>
      <StyledSidebar>
        <If condition={Boolean(formattedOptions)}>
          <ComboBox options={formattedOptions} />
        </If>
        <ContestLogo contest="Mega-sena" />
        <ContestText />
      </StyledSidebar>
    </>
  )
}
