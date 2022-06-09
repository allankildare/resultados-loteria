import { transformIntoTwoDigits } from './transformIntoTwoDigits'

describe('transformIntoTwoDigits function', () => {
    it('should return formatted string of numbers', () => {
        expect(transformIntoTwoDigits(1)).toStrictEqual('01')
        expect(transformIntoTwoDigits(7)).toStrictEqual('07')
        expect(transformIntoTwoDigits(10)).toStrictEqual('10')
        expect(transformIntoTwoDigits(56)).toStrictEqual('56')
        expect(transformIntoTwoDigits(-1)).toStrictEqual('-1')
        expect(transformIntoTwoDigits(-7)).toStrictEqual('-7')
    })
})
