import { useContext } from 'react'
import { If } from 'react-extras'
import { StyledSidebar, CurvedBox } from './styles'
import { SelectedContestContext } from '~/contexts'
import { removeAccentsAndSpaces, translateContestColor } from '~/helpers'

import { ComboBox } from './../ComboBox/ComboBox'
import { ContestText } from './../ContestText'
import { ContestLogo } from './../ContestLogo'

interface Options {
  id: number
  nome: string
}

interface SidebarProps {
  options: Options[]
}

export function Sidebar({ options }: SidebarProps) {
  const { selectedContest, selectedId, selectedContestId, selectedContestDate} = useContext(SelectedContestContext)

  const formattedOptions = options?.map(item => {
    const value = removeAccentsAndSpaces(item?.nome)
    return { ...item, value }
  })

  const contestColor = translateContestColor(selectedContest)
  console.log(selectedContestId)

  return (
    <>
      <StyledSidebar selectedColor={contestColor}>
        <If condition={Boolean(formattedOptions)}>
          <ComboBox options={formattedOptions} />
        </If>
        <ContestLogo contest={selectedContest} />
        <ContestText contestId={selectedContestId} contestDate={selectedContestDate} />
      </StyledSidebar>
      <CurvedBox selectedColor={contestColor}>
        <div className="semiCircle" />
      </CurvedBox>
    </>
  )
}
