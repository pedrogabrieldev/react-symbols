import IconTurnLeftFill0Wght100Grad0Opsz48 from '../components/TurnLeftFill0Wght100Grad0Opsz48'
import IconTurnLeftFill0Wght200Grad0Opsz48 from '../components/TurnLeftFill0Wght200Grad0Opsz48'
import IconTurnLeftFill0Wght300Grad0Opsz48 from '../components/TurnLeftFill0Wght300Grad0Opsz48'
import IconTurnLeftFill0Wght400Grad0Opsz48 from '../components/TurnLeftFill0Wght400Grad0Opsz48'
import IconTurnLeftFill0Wght500Grad0Opsz48 from '../components/TurnLeftFill0Wght500Grad0Opsz48'
import IconTurnLeftFill0Wght600Grad0Opsz48 from '../components/TurnLeftFill0Wght600Grad0Opsz48'
import IconTurnLeftFill0Wght700Grad0Opsz48 from '../components/TurnLeftFill0Wght700Grad0Opsz48'
import IconTurnLeftFill1Wght100Grad0Opsz48 from '../components/TurnLeftFill1Wght100Grad0Opsz48'
import IconTurnLeftFill1Wght200Grad0Opsz48 from '../components/TurnLeftFill1Wght200Grad0Opsz48'
import IconTurnLeftFill1Wght300Grad0Opsz48 from '../components/TurnLeftFill1Wght300Grad0Opsz48'
import IconTurnLeftFill1Wght400Grad0Opsz48 from '../components/TurnLeftFill1Wght400Grad0Opsz48'
import IconTurnLeftFill1Wght500Grad0Opsz48 from '../components/TurnLeftFill1Wght500Grad0Opsz48'
import IconTurnLeftFill1Wght600Grad0Opsz48 from '../components/TurnLeftFill1Wght600Grad0Opsz48'
import IconTurnLeftFill1Wght700Grad0Opsz48 from '../components/TurnLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTurnLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTurnLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTurnLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTurnLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTurnLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTurnLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTurnLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTurnLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTurnLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTurnLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTurnLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTurnLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTurnLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTurnLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTurnLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
