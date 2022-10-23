import IconTurnSlightLeftFill0Wght100Grad0Opsz48 from '../components/TurnSlightLeftFill0Wght100Grad0Opsz48'
import IconTurnSlightLeftFill0Wght200Grad0Opsz48 from '../components/TurnSlightLeftFill0Wght200Grad0Opsz48'
import IconTurnSlightLeftFill0Wght300Grad0Opsz48 from '../components/TurnSlightLeftFill0Wght300Grad0Opsz48'
import IconTurnSlightLeftFill0Wght400Grad0Opsz48 from '../components/TurnSlightLeftFill0Wght400Grad0Opsz48'
import IconTurnSlightLeftFill0Wght500Grad0Opsz48 from '../components/TurnSlightLeftFill0Wght500Grad0Opsz48'
import IconTurnSlightLeftFill0Wght600Grad0Opsz48 from '../components/TurnSlightLeftFill0Wght600Grad0Opsz48'
import IconTurnSlightLeftFill0Wght700Grad0Opsz48 from '../components/TurnSlightLeftFill0Wght700Grad0Opsz48'
import IconTurnSlightLeftFill1Wght100Grad0Opsz48 from '../components/TurnSlightLeftFill1Wght100Grad0Opsz48'
import IconTurnSlightLeftFill1Wght200Grad0Opsz48 from '../components/TurnSlightLeftFill1Wght200Grad0Opsz48'
import IconTurnSlightLeftFill1Wght300Grad0Opsz48 from '../components/TurnSlightLeftFill1Wght300Grad0Opsz48'
import IconTurnSlightLeftFill1Wght400Grad0Opsz48 from '../components/TurnSlightLeftFill1Wght400Grad0Opsz48'
import IconTurnSlightLeftFill1Wght500Grad0Opsz48 from '../components/TurnSlightLeftFill1Wght500Grad0Opsz48'
import IconTurnSlightLeftFill1Wght600Grad0Opsz48 from '../components/TurnSlightLeftFill1Wght600Grad0Opsz48'
import IconTurnSlightLeftFill1Wght700Grad0Opsz48 from '../components/TurnSlightLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTurnSlightLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTurnSlightLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTurnSlightLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTurnSlightLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTurnSlightLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTurnSlightLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTurnSlightLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTurnSlightLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTurnSlightLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTurnSlightLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTurnSlightLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTurnSlightLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTurnSlightLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTurnSlightLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTurnSlightLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
