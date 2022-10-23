import IconBallotFill0Wght100Grad0Opsz48 from '../components/BallotFill0Wght100Grad0Opsz48'
import IconBallotFill0Wght200Grad0Opsz48 from '../components/BallotFill0Wght200Grad0Opsz48'
import IconBallotFill0Wght300Grad0Opsz48 from '../components/BallotFill0Wght300Grad0Opsz48'
import IconBallotFill0Wght400Grad0Opsz48 from '../components/BallotFill0Wght400Grad0Opsz48'
import IconBallotFill0Wght500Grad0Opsz48 from '../components/BallotFill0Wght500Grad0Opsz48'
import IconBallotFill0Wght600Grad0Opsz48 from '../components/BallotFill0Wght600Grad0Opsz48'
import IconBallotFill0Wght700Grad0Opsz48 from '../components/BallotFill0Wght700Grad0Opsz48'
import IconBallotFill1Wght100Grad0Opsz48 from '../components/BallotFill1Wght100Grad0Opsz48'
import IconBallotFill1Wght200Grad0Opsz48 from '../components/BallotFill1Wght200Grad0Opsz48'
import IconBallotFill1Wght300Grad0Opsz48 from '../components/BallotFill1Wght300Grad0Opsz48'
import IconBallotFill1Wght400Grad0Opsz48 from '../components/BallotFill1Wght400Grad0Opsz48'
import IconBallotFill1Wght500Grad0Opsz48 from '../components/BallotFill1Wght500Grad0Opsz48'
import IconBallotFill1Wght600Grad0Opsz48 from '../components/BallotFill1Wght600Grad0Opsz48'
import IconBallotFill1Wght700Grad0Opsz48 from '../components/BallotFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBallot = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBallotFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBallotFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBallotFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBallotFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBallotFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBallotFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBallotFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBallotFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBallotFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBallotFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBallotFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBallotFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBallotFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBallotFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
