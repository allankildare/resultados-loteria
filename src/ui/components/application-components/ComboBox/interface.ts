interface Option {
  id: number
  nome: string
  value: string
}

export interface ComboBoxProps {
  options: Option[]
  selectedValue?: number
}
