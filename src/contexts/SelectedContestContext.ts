import { createContext } from 'react'
import { SelectedContest } from '~/types'

export const SelectedContestContext = createContext<SelectedContest>({
    id: 0,
    selectedContest: 'mega-sena',
    changeSelectedContest: ({ value, id }) => `first renderization with value "${value}" and id ${id}.`
})
