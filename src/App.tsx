import { getIds } from './services/getIds'
import { getLotteries } from './services/getLotteries'

import { ContestNumbers } from './ui/components/ContestNumbers/ContestNumbers'
import { Sidebar } from './ui/components/Sidebar/Sidebar'
import { Choose } from 'react-extras'
import { ApplicationLoading } from './ui/components'
import { Flex } from './ui/components/layout-components'

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
