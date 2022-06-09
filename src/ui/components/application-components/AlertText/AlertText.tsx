import { StyledAlertText } from './styles'
import { Color } from '~/types'

const DEFAULT_MESSAGE = 'Infelizmente ocorreu um erro durante a busca, pesquise outro concurso ou tente novamente mais tarde.'

interface AlertTextProps {
    as?: 'p' | 'span'
    message?: string
    color?: Color
}

export function AlertText(props: AlertTextProps) {
    const { message = DEFAULT_MESSAGE, as, color } = props

    return (
        <StyledAlertText as={as} color={color} data-testid="alertText">
            {message}
        </StyledAlertText>
    )
}
