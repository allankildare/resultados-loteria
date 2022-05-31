import { MegasenaIcon } from '../../assets/icons'
import { StyledContestLogo } from './styles'

export function ContestLogo({ contest }: { contest: string }) {
    return (
        <StyledContestLogo>
            <MegasenaIcon />
            <span>Mega-Sena</span>
        </StyledContestLogo>
    )
}