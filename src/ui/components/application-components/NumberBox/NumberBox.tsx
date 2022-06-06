import { NumberBoxStyled } from './styles'

interface NumberBoxProps {
    number: number
}

function transformIntoTwoDigits(number: number) {
    if(number < 10 && number > -1) return `0${number}`
    return number.toString()
}

export function NumberBox({ number }: NumberBoxProps) {
    const formattedNumber = transformIntoTwoDigits(number)
    return (
        <NumberBoxStyled>
            {formattedNumber}
        </NumberBoxStyled>
    )
}
