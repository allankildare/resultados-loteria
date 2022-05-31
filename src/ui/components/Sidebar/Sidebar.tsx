import { StyledSidebar } from './styles'
import { ComboBox } from './../ComboBox/ComboBox'
import { ContestText } from '../ContestText'
import { ContestLogo } from '../ContestLogo'

const options = [
    { text: 'Mega-Sena', value: 'mega_sena' },
    { text: 'Quina', value: 'quina' },
    { text: 'Lotofacil', value: 'lotofacil' },
    { text: 'Lotomania', value: 'lotomania' },
    { text: 'Timemania', value: 'timemania' },
    { text: 'Dia de Sorte', value: 'dia_de_sorte' }
  ]

export function Sidebar() {
    return (
        <StyledSidebar>
            <ComboBox options={options} />
            <ContestLogo contest="Mega-sena" />
            <ContestText />
        </StyledSidebar>
    )
}