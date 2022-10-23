import IconTurnSharpLeftFill0Wght100Grad0Opsz48 from '../components/TurnSharpLeftFill0Wght100Grad0Opsz48'
import IconTurnSharpLeftFill0Wght200Grad0Opsz48 from '../components/TurnSharpLeftFill0Wght200Grad0Opsz48'
import IconTurnSharpLeftFill0Wght300Grad0Opsz48 from '../components/TurnSharpLeftFill0Wght300Grad0Opsz48'
import IconTurnSharpLeftFill0Wght400Grad0Opsz48 from '../components/TurnSharpLeftFill0Wght400Grad0Opsz48'
import IconTurnSharpLeftFill0Wght500Grad0Opsz48 from '../components/TurnSharpLeftFill0Wght500Grad0Opsz48'
import IconTurnSharpLeftFill0Wght600Grad0Opsz48 from '../components/TurnSharpLeftFill0Wght600Grad0Opsz48'
import IconTurnSharpLeftFill0Wght700Grad0Opsz48 from '../components/TurnSharpLeftFill0Wght700Grad0Opsz48'
import IconTurnSharpLeftFill1Wght100Grad0Opsz48 from '../components/TurnSharpLeftFill1Wght100Grad0Opsz48'
import IconTurnSharpLeftFill1Wght200Grad0Opsz48 from '../components/TurnSharpLeftFill1Wght200Grad0Opsz48'
import IconTurnSharpLeftFill1Wght300Grad0Opsz48 from '../components/TurnSharpLeftFill1Wght300Grad0Opsz48'
import IconTurnSharpLeftFill1Wght400Grad0Opsz48 from '../components/TurnSharpLeftFill1Wght400Grad0Opsz48'
import IconTurnSharpLeftFill1Wght500Grad0Opsz48 from '../components/TurnSharpLeftFill1Wght500Grad0Opsz48'
import IconTurnSharpLeftFill1Wght600Grad0Opsz48 from '../components/TurnSharpLeftFill1Wght600Grad0Opsz48'
import IconTurnSharpLeftFill1Wght700Grad0Opsz48 from '../components/TurnSharpLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTurnSharpLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTurnSharpLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTurnSharpLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTurnSharpLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTurnSharpLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTurnSharpLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTurnSharpLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTurnSharpLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTurnSharpLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTurnSharpLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTurnSharpLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTurnSharpLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTurnSharpLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTurnSharpLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTurnSharpLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
