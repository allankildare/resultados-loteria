import { useState } from 'react'
import { ContestTypes, SelectedContestContext } from './SelectedContestContext'

export type SelectValues = 'mega_sena' | 'quina' | 'lotofacil' | 'lotomania' | 'timemania' | 'dia_de_sorte'

function convertValueToSelectedContest(str: SelectValues) {
    const possibleValues = {
        mega_sena: 'mega-sena',
        quina: 'quina',
        lotofacil: 'lotofácil',
        lotomania: 'lotomania',
        timemania: 'timemania',
        dia_de_sorte: 'dia de sorte'
    }

    return possibleValues[str] as ContestTypes
}

export function SelectedContestProvider({ children }: any) {
    const [selectedContest, setSelectedContest] = useState<ContestTypes>('mega-sena')
    const [selectedId, setSelectedId] = useState(0)

    function changeSelectedContest({ value, id } : { value: SelectValues, id: number }) {
        const convertedValue = convertValueToSelectedContest(value)
        setSelectedId(id)
        setSelectedContest(convertedValue)
    }

    return (
        <SelectedContestContext.Provider value={{ selectedContest, selectedId, changeSelectedContest }}>
            {children}
        </SelectedContestContext.Provider>
    )
}
