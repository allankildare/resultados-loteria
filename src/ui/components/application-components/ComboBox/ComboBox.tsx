import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { For } from 'react-extras'
import { SelectedContestContext } from '~/contexts'
import { SelectValues } from '~/types'
import { Select } from './styles'
import { ComboBoxProps, ValueAndID } from './interface'

export function ComboBox({ options, selectedValue = 0 }: ComboBoxProps) {
  const value = options[selectedValue].value as SelectValues
  const defaultValue = { value, id: selectedValue }

  const [selectedContest, setSelectedContest] = useState(defaultValue)
  const { changeSelectedContest } = useContext(SelectedContestContext)

  function handleContestChange(event: ChangeEvent<HTMLSelectElement>) {
    const optionsNodes = Array.from(event.target.children)

    const valuesAndIds = optionsNodes.map((item, index) => {
      const attributes = Array.from(item.attributes)
      return { value: attributes[0].textContent, id: index }
    })

    const findValueAndId = valuesAndIds.find(element => element.value === event.target.value) as unknown as ValueAndID
    const existsValueAndId = findValueAndId?.value && findValueAndId?.id > -1
    if(existsValueAndId) setSelectedContest({ ...findValueAndId })
  }

  useEffect(() => {
    changeSelectedContest(selectedContest)
  }, [selectedContest])

  return (
    <Select defaultValue={defaultValue.value} onChange={handleContestChange}>
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
