import { NumberBox } from '../NumberBox/NumberBox'
import { ContestNumbersProvider, ContestNumbersContext } from './../../contexts'
import { ContestBox, RoundedBox } from './styles'

export function ContestNumbers() {
    return (
        <ContestNumbersProvider>
            <RoundedBox />
            <ContestBox>
                <div className="numbers">
                    <NumberBox number={6} />
                    <NumberBox number={9} />
                    <NumberBox number={28} />
                    <NumberBox number={33} />
                    <NumberBox number={37} />
                    <NumberBox number={40} />
                </div>
                <p style={{ textAlign: 'center' }}>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</p>
            </ContestBox>
        </ContestNumbersProvider>
    )
}