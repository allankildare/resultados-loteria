import { For } from 'react-extras'
import { Select } from './styles'

interface Option {
  text: string
  value: string
}

interface ComboBoxProps {
  options: Option[]
  selectedValue?: number
}

export function ComboBox({ options, selectedValue = 0 }: ComboBoxProps) {
  return (
    <Select>
      <For
        of={options}
        render={(item, index) => {
          return (
            <option
              key={`option${index}`}
              value={item.value}
              selected={index === selectedValue}
            >
              {item.text}
            </option>
          )
        }}
      />
    </Select>
  )
}
