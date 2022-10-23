import IconTurnSharpRightFill0Wght100Grad0Opsz48 from '../components/TurnSharpRightFill0Wght100Grad0Opsz48'
import IconTurnSharpRightFill0Wght200Grad0Opsz48 from '../components/TurnSharpRightFill0Wght200Grad0Opsz48'
import IconTurnSharpRightFill0Wght300Grad0Opsz48 from '../components/TurnSharpRightFill0Wght300Grad0Opsz48'
import IconTurnSharpRightFill0Wght400Grad0Opsz48 from '../components/TurnSharpRightFill0Wght400Grad0Opsz48'
import IconTurnSharpRightFill0Wght500Grad0Opsz48 from '../components/TurnSharpRightFill0Wght500Grad0Opsz48'
import IconTurnSharpRightFill0Wght600Grad0Opsz48 from '../components/TurnSharpRightFill0Wght600Grad0Opsz48'
import IconTurnSharpRightFill0Wght700Grad0Opsz48 from '../components/TurnSharpRightFill0Wght700Grad0Opsz48'
import IconTurnSharpRightFill1Wght100Grad0Opsz48 from '../components/TurnSharpRightFill1Wght100Grad0Opsz48'
import IconTurnSharpRightFill1Wght200Grad0Opsz48 from '../components/TurnSharpRightFill1Wght200Grad0Opsz48'
import IconTurnSharpRightFill1Wght300Grad0Opsz48 from '../components/TurnSharpRightFill1Wght300Grad0Opsz48'
import IconTurnSharpRightFill1Wght400Grad0Opsz48 from '../components/TurnSharpRightFill1Wght400Grad0Opsz48'
import IconTurnSharpRightFill1Wght500Grad0Opsz48 from '../components/TurnSharpRightFill1Wght500Grad0Opsz48'
import IconTurnSharpRightFill1Wght600Grad0Opsz48 from '../components/TurnSharpRightFill1Wght600Grad0Opsz48'
import IconTurnSharpRightFill1Wght700Grad0Opsz48 from '../components/TurnSharpRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTurnSharpRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTurnSharpRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTurnSharpRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTurnSharpRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTurnSharpRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTurnSharpRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTurnSharpRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTurnSharpRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTurnSharpRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTurnSharpRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTurnSharpRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTurnSharpRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTurnSharpRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTurnSharpRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTurnSharpRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
