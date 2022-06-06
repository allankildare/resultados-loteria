import { Choose } from 'react-extras'

import { getLotteries, getIds } from '~/services'
import { ApplicationLoading, ContestNumbers, Sidebar, Flex } from '~/ui/components'

function App() {
  const {
    data: options,
    isSuccess: isOptionsSuccess,
    isLoading: isOptionsLoading,
  } = getLotteries()

  const {
    data: contestsIds,
    isSuccess: isContestsIdsSuccess,
    isLoading: isContestsIdsLoading,
  } = getIds()

  const isOptionsEmpty = Boolean(options) && options.length === 0
  const isIdsEmpty = Boolean(contestsIds) && contestsIds.length === 0

  const successCondition =
    isOptionsSuccess && isContestsIdsSuccess && !isOptionsEmpty && !isIdsEmpty

  return (
    <div className="container">
      <Choose>
        <Choose.When condition={successCondition}>
          <Sidebar options={options} />
          <ContestNumbers ids={contestsIds} />
        </Choose.When>
        <Choose.When condition={isOptionsLoading || isContestsIdsLoading}>
          <Flex
            as="main"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height="100vh"
            width="100%"
          >
            <ApplicationLoading />
            <p>Carregando...</p>
          </Flex>
        </Choose.When>
        <Choose.Otherwise>Carregando...</Choose.Otherwise>
      </Choose>
    </div>
  )
}

export default App
