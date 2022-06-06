import { useContext, useEffect, useState } from 'react'
import { For } from 'react-extras'
import { SelectedContestContext, SelectValues } from '~/contexts'
import { Select } from './styles'

interface Option {
  id: number
  nome: string
  value: string
}

interface ComboBoxProps {
  options: Option[]
  selectedValue?: number
}

export function ComboBox({ options, selectedValue = 0 }: ComboBoxProps) {
  const defaultValue = options[selectedValue].value

  const [selectedContest, setSelectedContest] = useState<SelectValues>(
    defaultValue as SelectValues
  )
  const { changeSelectedContest } = useContext(SelectedContestContext)

  function handleContestChange(event: any) {
    const optionsNodes = Array.from(event.target.childNodes)
    const valuesAndIds = optionsNodes.map((item, index) => {
      const attributes = Array.from(item.attributes)
      return { value: attributes[0].textContent, id: index }
    })

    const findValueAndId = valuesAndIds.find(element => element.value === event.target.value)
    setSelectedContest({ ...findValueAndId })
  }

  useEffect(() => {
    changeSelectedContest(selectedContest)
  }, [selectedContest])

  return (
    <Select defaultValue={defaultValue} onChange={handleContestChange}>
      <For
        of={options}
        render={(item, index) => {
          return (
            <option key={`option${index}`} value={item.value}>
              {item.nome}
            </option>
          )
        }}
      />
    </Select>
  )
}
