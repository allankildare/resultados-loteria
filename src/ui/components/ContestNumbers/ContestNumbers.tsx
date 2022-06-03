import { SelectedContestContext } from '../../../contexts/SelectedContestContext'
import { useContext, useEffect } from 'react'
import { Choose, For } from 'react-extras'
import { getContest } from '../../../services'
import { NumberBox } from '../NumberBox/NumberBox'
import { ContestBox, RoundedBox } from './styles'
import { ApplicationLoading } from '../ApplicationLoading'

export interface ContestNumbersProps {
  numbers: string[]
}

export function ContestNumbers({ ids }: any) {
  const { selectedContest, selectedId } = useContext(SelectedContestContext)
  const selectedContestId = ids.find(
    item => item.loteriaId === selectedId
  )?.concursoId
  console.log('concurso selecionado', selectedContestId)
  const {
    data: contestData,
    isSuccess: isContestDataSuccess,
    isLoading: isContestDataLoading,
    isRefetching: isContestDataRefetching,
    refetch: refetchContestData,
  } = getContest(selectedContestId)
  const loadingCondition = isContestDataLoading || isContestDataRefetching

  const contestNumbers = contestData?.numeros?.map(item => Number(item))

  useEffect(() => {
      refetchContestData()
  }, [selectedContestId])

  return (
    <>
      {/* <RoundedBox /> */}
      <ContestBox>
        <div className="numbers">
            <Choose>
                <Choose.When condition={isContestDataSuccess && Boolean(contestNumbers)}>
                <For of={contestNumbers}
                        render={(item, index) => {
                            return <NumberBox key={`number${index}`} number={item} />
                    }}
                    />
                </Choose.When>
                <Choose.When condition={loadingCondition}>
                    <ApplicationLoading />
                </Choose.When>
            </Choose>
          {/* <For of={convertedNumbers}
                        render={(item, index) => {
                            return <NumberBox key={`number${index}`} number={item} />
                    }}
                    /> */}
        </div>
        <p style={{ textAlign: 'center' }}>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA
        </p>
      </ContestBox>
    </>
  )
}
