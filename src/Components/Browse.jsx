import PrimaryContanor from './PrimaryContanor'
import SecondaryContanor from "./SecondaryContanor"
import { useSelector } from 'react-redux'

import GptCont from './GptCont'
const Browse = () => {
  const gptActive = useSelector(state => state?.gpt?.gptactive)
  console.log(gptActive)
  return (
    <div>
      {
        gptActive ? (<GptCont/>) : (<>

          <PrimaryContanor />
          <SecondaryContanor />
        </>
        )
      }

    </div>
  )
}

export default Browse