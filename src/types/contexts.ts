export type SelectValues = 'mega_sena' | 'quina' | 'lotofacil' | 'lotomania' | 'timemania' | 'dia_de_sorte'

export type ContestTypes = 'mega-sena' | 'quina' | 'lotofácil' | 'lotomania' | 'timemania' | 'dia de sorte'

export interface IDs {
    loteriaId: number
    concursoId: string
}

export interface SelectedContest {
    id?: number
    ids?: IDs
    selectedContest: ContestTypes
    changeSelectedContest: ({ value, id }: {value: SelectValues, id: number}) => void
}
