import { createContext } from 'react'
import { SelectedContest } from '~/types'

export const SelectedContestContext = createContext<SelectedContest>({
    selectedId: 0,
    selectedContest: 'mega-sena',
    selectedContestDate: '1970-01-01T03:00:00.000Z',
    selectedContestId: '2200',
    changeSelectedContest: ({ value, id }) => `first renderization with value "${value}" and id ${id}.`,
    setSelectedContestId: () => 'initial function',
    setSelectedContestDate: () => 'initial function'
})
