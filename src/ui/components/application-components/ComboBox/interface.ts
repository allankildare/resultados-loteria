import { SelectValues } from '~/types'

export interface Option {
  id: number
  nome: string
  value: string
}

export interface ComboBoxProps {
  options: Option[]
  selectedValue?: number
}

export interface ValueAndID {
  value: SelectValues
  id: number
}
