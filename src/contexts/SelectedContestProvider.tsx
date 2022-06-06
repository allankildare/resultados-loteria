import { useState } from 'react'
import { SelectedContestContext } from './SelectedContestContext'
import { ContestTypes, SelectValues } from '~/types'
import { convertValueToSelectedContest } from '~/helpers'

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
