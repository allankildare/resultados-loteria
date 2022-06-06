import { ContestTypes, SelectValues } from '~/types'

export function convertValueToSelectedContest(str: SelectValues) {
    const possibleValues = {
        mega_sena: 'mega-sena',
        quina: 'quina',
        lotofacil: 'lotofácil',
        lotomania: 'lotomania',
        timemania: 'timemania',
        dia_de_sorte: 'dia de sorte'
    }

    const convertedValue = possibleValues[str] ? possibleValues[str] : 'mega-sena'

    return convertedValue as ContestTypes
}
