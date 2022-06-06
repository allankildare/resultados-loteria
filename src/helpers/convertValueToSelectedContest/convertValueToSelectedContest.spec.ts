import { SelectValues } from '~/types'
import { convertValueToSelectedContest } from './convertValueToSelectedContest'

describe('convertValueToSelectedContest function', () => {
    let CONTEST = 'mega_sena' as SelectValues

    it('should return "mega-sena"', () => {
        const convertedValue = convertValueToSelectedContest(CONTEST)

        expect(convertedValue).toStrictEqual('mega-sena')
    })

    it('should return "quina"', () => {
        CONTEST = 'quina'
        const convertedValue = convertValueToSelectedContest(CONTEST)

        expect(convertedValue).toStrictEqual('quina')
    })

    it('should return "lotofácil"', () => {
        CONTEST = 'lotofacil'
        const convertedValue = convertValueToSelectedContest(CONTEST)

        expect(convertedValue).toStrictEqual('lotofácil')
    })

    it('should return "lotomania"', () => {
        CONTEST = 'lotomania'
        const convertedValue = convertValueToSelectedContest(CONTEST)

        expect(convertedValue).toStrictEqual('lotomania')
    })

    it('should return "timemania"', () => {
        CONTEST = 'timemania'
        const convertedValue = convertValueToSelectedContest(CONTEST)

        expect(convertedValue).toStrictEqual('timemania')
    })

    it('should return "dia de sorte"', () => {
        CONTEST = 'dia_de_sorte'
        const convertedValue = convertValueToSelectedContest(CONTEST)

        expect(convertedValue).toStrictEqual('dia de sorte')
    })

    it('should return "mega-sena" by default', () => {
        const nonValidEntry = undefined
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const convertedValue = convertValueToSelectedContest(nonValidEntry)

        expect(convertedValue).toStrictEqual('mega-sena')
    })
})
