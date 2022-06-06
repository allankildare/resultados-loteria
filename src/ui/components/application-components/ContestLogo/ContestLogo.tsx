import { ContestTypes } from '~/types'
import { MegasenaIcon } from '~/ui/assets/icons'
import { StyledContestLogo } from './styles'

export function ContestLogo({ contest }: { contest: ContestTypes }) {
    return (
        <StyledContestLogo>
            <MegasenaIcon />
            <span>{contest ? contest : 'mega-sena'}</span>
        </StyledContestLogo>
    )
}
