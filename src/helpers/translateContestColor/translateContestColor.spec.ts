import { translateContestColor } from './translateContestColor'

describe('translateContestColor function', () => {
    it('should return contest style variables', () => {
        expect(translateContestColor('mega-sena')).toStrictEqual('var(--aside-and-megasena-green)')
        expect(translateContestColor('quina')).toStrictEqual('var(--quina-purple)')
        expect(translateContestColor('lotofácil')).toStrictEqual('var(--lotofacil-pink)')
        expect(translateContestColor('lotomania')).toStrictEqual('var(--lotomania-orange)')
        expect(translateContestColor('timemania')).toStrictEqual('var(--timemania-green)')
        expect(translateContestColor('dia de sorte')).toStrictEqual('var(--dia-de-sorte-brownish-green)')
    })
})
