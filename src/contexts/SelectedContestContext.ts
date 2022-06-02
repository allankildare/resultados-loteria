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
    changeSelectedContest: (value: SelectValues) => void
}

export const SelectedContestContext = createContext<SelectedContest>({
    id: 0,
    selectedContest: 'mega-sena',
    changeSelectedContest: (value) => 'first renderization'
})
