import IconTurnRightFill0Wght100Grad0Opsz48 from '../components/TurnRightFill0Wght100Grad0Opsz48'
import IconTurnRightFill0Wght200Grad0Opsz48 from '../components/TurnRightFill0Wght200Grad0Opsz48'
import IconTurnRightFill0Wght300Grad0Opsz48 from '../components/TurnRightFill0Wght300Grad0Opsz48'
import IconTurnRightFill0Wght400Grad0Opsz48 from '../components/TurnRightFill0Wght400Grad0Opsz48'
import IconTurnRightFill0Wght500Grad0Opsz48 from '../components/TurnRightFill0Wght500Grad0Opsz48'
import IconTurnRightFill0Wght600Grad0Opsz48 from '../components/TurnRightFill0Wght600Grad0Opsz48'
import IconTurnRightFill0Wght700Grad0Opsz48 from '../components/TurnRightFill0Wght700Grad0Opsz48'
import IconTurnRightFill1Wght100Grad0Opsz48 from '../components/TurnRightFill1Wght100Grad0Opsz48'
import IconTurnRightFill1Wght200Grad0Opsz48 from '../components/TurnRightFill1Wght200Grad0Opsz48'
import IconTurnRightFill1Wght300Grad0Opsz48 from '../components/TurnRightFill1Wght300Grad0Opsz48'
import IconTurnRightFill1Wght400Grad0Opsz48 from '../components/TurnRightFill1Wght400Grad0Opsz48'
import IconTurnRightFill1Wght500Grad0Opsz48 from '../components/TurnRightFill1Wght500Grad0Opsz48'
import IconTurnRightFill1Wght600Grad0Opsz48 from '../components/TurnRightFill1Wght600Grad0Opsz48'
import IconTurnRightFill1Wght700Grad0Opsz48 from '../components/TurnRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTurnRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTurnRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTurnRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTurnRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTurnRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTurnRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTurnRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTurnRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTurnRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTurnRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTurnRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTurnRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTurnRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTurnRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTurnRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
