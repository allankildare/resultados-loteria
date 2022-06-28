import { useContext, useEffect } from 'react'
import { Choose, For } from 'react-extras'
import { SelectedContestContext } from '~/contexts'
import { getContest } from '~/services'
import { ContestBox } from './styles'
import { NumberBox } from './../NumberBox'
import { ApplicationLoading } from './../ApplicationLoading'
import { IdItem } from '~/types'
import { AlertText } from './../AlertText/AlertText'

export interface ContestNumbersProps {
  ids: IdItem[]
}

export function ContestNumbers({ ids }: ContestNumbersProps) {
  const { selectedId, setSelectedContestId, setSelectedContestDate } = useContext(SelectedContestContext)

  const selectedContestId = ids.find(
    item => item.loteriaId === selectedId
  )?.concursoId

  const {
    data: contestData,
    isSuccess: isContestDataSuccess,
    isLoading: isContestDataLoading,
    isRefetching: isContestDataRefetching,
    isError: isContestDataError,
    refetch: refetchContestData,
  } = getContest(selectedContestId)

  const loadingCondition = isContestDataLoading || isContestDataRefetching

  const contestNumbers = contestData?.numeros?.map(item => Number(item))
  const contestId = contestData?.id
  const contestDate = contestData?.data

  useEffect(() => {
    refetchContestData()
  }, [selectedContestId])

  useEffect(() => {
    setSelectedContestId(contestId)
    setSelectedContestDate(contestDate)
  }, [contestId, contestDate])

  return (
    <>
      <ContestBox>
        <div className="numbers">
          <Choose>
            <Choose.When condition={isContestDataError}>
              <AlertText />
            </Choose.When>
            <Choose.When condition={loadingCondition}>
              <ApplicationLoading />
            </Choose.When>
            <Choose.When
              condition={isContestDataSuccess && Boolean(contestNumbers)}
            >
              <For
                of={contestNumbers}
                render={(item, index) => {
                  return <NumberBox key={`number${index}`} number={item} />
                }}
              />
            </Choose.When>
          </Choose>
        </div>
        <p style={{ textAlign: 'center' }}>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA
        </p>
      </ContestBox>
    </>
  )
}
