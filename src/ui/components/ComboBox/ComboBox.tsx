import { useContext, useEffect, useState } from 'react'
import { For } from 'react-extras'
import { SelectedContestContext } from '../../../contexts/SelectedContestContext'
import { SelectValues } from '../../../contexts/SelectedContestProvider'
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

  function handleContestChange({ target }: any) {
    setSelectedContest(target.value)
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
