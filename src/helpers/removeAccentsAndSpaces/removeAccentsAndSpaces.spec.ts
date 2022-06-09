import { removeAccentsAndSpaces } from './removeAccentsAndSpaces'

describe('removeAccentsAndSpaces function', () => {
    it('should convert "Testing Library" to "testing_library"', () => {
        expect(removeAccentsAndSpaces('Testing Library')).toStrictEqual('testing_library')
    })

    it('should convert "Jest" to "jest"', () => {
        expect(removeAccentsAndSpaces('Jest')).toStrictEqual('jest')
    })

    it('should convert "GitHub" to "github"', () => {
        expect(removeAccentsAndSpaces('GitHub')).toStrictEqual('github')
    })

    it('should convert "Deve Retornar Todos os Valores em Minúsculo e Sem Espaço" to "deve_retornar_todos_os_valores_em_minusculo_e_sem_espaco"', () => {
        expect(removeAccentsAndSpaces('Deve Retornar Todos os Valores em Minúsculo e Sem Espaço')).toStrictEqual('deve_retornar_todos_os_valores_em_minusculo_e_sem_espaco')
    })
})
