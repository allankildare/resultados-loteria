import { useState } from 'react'
import { SelectedContestContext } from './SelectedContestContext'
import { ContestTypes, SelectValues } from '~/types'
import { convertValueToSelectedContest } from '~/helpers'

export function SelectedContestProvider({ children }: any) {
    const [selectedContest, setSelectedContest] = useState<ContestTypes>('mega-sena')
    const [selectedId, setSelectedId] = useState(0)
    const [selectedContestId, setSelectedContestId] = useState('0')
    const [selectedContestDate, setSelectedContestDate] = useState('1970-01-01T03:00:00.000Z')

    function changeSelectedContest({ value, id } : { value: SelectValues, id: number }) {
        const convertedValue = convertValueToSelectedContest(value)
        setSelectedId(id)
        setSelectedContest(convertedValue)
    }

    return (
        <SelectedContestContext.Provider value={{ selectedContest, selectedId, selectedContestDate, selectedContestId, changeSelectedContest, setSelectedContestId, setSelectedContestDate }}>
            {children}
        </SelectedContestContext.Provider>
    )
}
