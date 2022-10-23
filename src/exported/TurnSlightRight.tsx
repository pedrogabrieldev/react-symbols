import IconTurnSlightRightFill0Wght100Grad0Opsz48 from '../components/TurnSlightRightFill0Wght100Grad0Opsz48'
import IconTurnSlightRightFill0Wght200Grad0Opsz48 from '../components/TurnSlightRightFill0Wght200Grad0Opsz48'
import IconTurnSlightRightFill0Wght300Grad0Opsz48 from '../components/TurnSlightRightFill0Wght300Grad0Opsz48'
import IconTurnSlightRightFill0Wght400Grad0Opsz48 from '../components/TurnSlightRightFill0Wght400Grad0Opsz48'
import IconTurnSlightRightFill0Wght500Grad0Opsz48 from '../components/TurnSlightRightFill0Wght500Grad0Opsz48'
import IconTurnSlightRightFill0Wght600Grad0Opsz48 from '../components/TurnSlightRightFill0Wght600Grad0Opsz48'
import IconTurnSlightRightFill0Wght700Grad0Opsz48 from '../components/TurnSlightRightFill0Wght700Grad0Opsz48'
import IconTurnSlightRightFill1Wght100Grad0Opsz48 from '../components/TurnSlightRightFill1Wght100Grad0Opsz48'
import IconTurnSlightRightFill1Wght200Grad0Opsz48 from '../components/TurnSlightRightFill1Wght200Grad0Opsz48'
import IconTurnSlightRightFill1Wght300Grad0Opsz48 from '../components/TurnSlightRightFill1Wght300Grad0Opsz48'
import IconTurnSlightRightFill1Wght400Grad0Opsz48 from '../components/TurnSlightRightFill1Wght400Grad0Opsz48'
import IconTurnSlightRightFill1Wght500Grad0Opsz48 from '../components/TurnSlightRightFill1Wght500Grad0Opsz48'
import IconTurnSlightRightFill1Wght600Grad0Opsz48 from '../components/TurnSlightRightFill1Wght600Grad0Opsz48'
import IconTurnSlightRightFill1Wght700Grad0Opsz48 from '../components/TurnSlightRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTurnSlightRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTurnSlightRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTurnSlightRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTurnSlightRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTurnSlightRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTurnSlightRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTurnSlightRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTurnSlightRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTurnSlightRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTurnSlightRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTurnSlightRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTurnSlightRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTurnSlightRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTurnSlightRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTurnSlightRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
