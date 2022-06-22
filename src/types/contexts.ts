export type SelectValues = 'mega_sena' | 'quina' | 'lotofacil' | 'lotomania' | 'timemania' | 'dia_de_sorte'

export type ContestTypes = 'mega-sena' | 'quina' | 'lotofácil' | 'lotomania' | 'timemania' | 'dia de sorte'

export interface IDs {
    loteriaId: number
    concursoId: string
}

export interface SelectedContest {
    selectedId?: number
    selectedContest: ContestTypes
    selectedContestDate: string
    selectedContestId: string
    changeSelectedContest: ({ value, id }: {value: SelectValues, id: number}) => void
    setSelectedContestId: ({ id }: { id: string }) => void
    setSelectedContestDate: ({ date }: { date: Date }) => void
}
