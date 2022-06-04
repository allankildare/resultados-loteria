import { StyledSidebar } from './styles'
import { ComboBox } from './../ComboBox/ComboBox'
import { ContestText } from '../ContestText'
import { ContestLogo } from '../ContestLogo'
import { removeAccentsAndSpaces, translateContestColor } from '../../../helpers'
import { If } from 'react-extras'
import { useContext } from 'react'
import { SelectedContestContext } from '../../../contexts/SelectedContestContext'

interface Options {
  id: number
  nome: string
}

interface SidebarProps {
  options: Options[]
}

export function Sidebar({ options }: SidebarProps) {
  const { selectedContest } = useContext(SelectedContestContext)

  const formattedOptions = options?.map(item => {
    const value = removeAccentsAndSpaces(item?.nome)
    return { ...item, value }
  })

  const contestColor = translateContestColor(selectedContest)

  return (
    <>
      <StyledSidebar selectedColor={contestColor}>
        <If condition={Boolean(formattedOptions)}>
          <ComboBox options={formattedOptions} />
        </If>
        <ContestLogo contest={selectedContest} />
        <ContestText />
      </StyledSidebar>
    </>
  )
}
