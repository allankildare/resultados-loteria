import { createContext } from 'react'
import { SelectValues } from './SelectedContestProvider'

export type ContestTypes = 'mega-sena' | 'quina' | 'lotofácil' | 'lotomania' | 'timemania' | 'dia de sorte'
export interface IDs {
    loteriaId: number
    concursoId: string
}

interface SelectedContest {
    id?: number
    ids?: IDs
    selectedContest: string
    changeSelectedContest: ({ value, id }: {value: SelectValues, id: number}) => void
}

export const SelectedContestContext = createContext<SelectedContest>({
    id: 0,
    selectedContest: 'mega-sena',
    changeSelectedContest: ({ value, id }) => `first renderization with value "${value}" and id ${id}.`
})
