import { useContext } from 'react'
import { SelectedContestContext } from '~/contexts'
import dayjs from 'dayjs'

export function ContestText({ contestId, contestDate }: { contestId: string, contestDate?: string }) {
    const formattedDate = dayjs(contestDate).format('DD/MM/YYYY')

    return (
        <div data-testid="contestText">
            <p style={{ fontWeight: '500' }}>Concurso</p>
            <p style={{ fontWeight: '700' }}>{contestId} - {formattedDate}</p>
        </div>
    )
}
