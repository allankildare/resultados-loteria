import { transformIntoTwoDigits } from '~/helpers'
import { NumberBoxStyled } from './styles'

interface NumberBoxProps {
    number: number
}

export function NumberBox({ number }: NumberBoxProps) {
    const formattedNumber = transformIntoTwoDigits(number)

    return (
        <NumberBoxStyled data-testid="numberBox">
            {formattedNumber}
        </NumberBoxStyled>
    )
}
