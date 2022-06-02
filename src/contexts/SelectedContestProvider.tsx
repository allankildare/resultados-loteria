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

    function changeSelectedContest(value: SelectValues) {
        const convertedValue = convertValueToSelectedContest(value)
        return setSelectedContest(convertedValue)
    }

    return (
        <SelectedContestContext.Provider value={{ selectedContest, changeSelectedContest }}>
            {children}
        </SelectedContestContext.Provider>
    )
}
