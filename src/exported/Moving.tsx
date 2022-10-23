import IconMovingFill0Wght100Grad0Opsz48 from '../components/MovingFill0Wght100Grad0Opsz48'
import IconMovingFill0Wght200Grad0Opsz48 from '../components/MovingFill0Wght200Grad0Opsz48'
import IconMovingFill0Wght300Grad0Opsz48 from '../components/MovingFill0Wght300Grad0Opsz48'
import IconMovingFill0Wght400Grad0Opsz48 from '../components/MovingFill0Wght400Grad0Opsz48'
import IconMovingFill0Wght500Grad0Opsz48 from '../components/MovingFill0Wght500Grad0Opsz48'
import IconMovingFill0Wght600Grad0Opsz48 from '../components/MovingFill0Wght600Grad0Opsz48'
import IconMovingFill0Wght700Grad0Opsz48 from '../components/MovingFill0Wght700Grad0Opsz48'
import IconMovingFill1Wght100Grad0Opsz48 from '../components/MovingFill1Wght100Grad0Opsz48'
import IconMovingFill1Wght200Grad0Opsz48 from '../components/MovingFill1Wght200Grad0Opsz48'
import IconMovingFill1Wght300Grad0Opsz48 from '../components/MovingFill1Wght300Grad0Opsz48'
import IconMovingFill1Wght400Grad0Opsz48 from '../components/MovingFill1Wght400Grad0Opsz48'
import IconMovingFill1Wght500Grad0Opsz48 from '../components/MovingFill1Wght500Grad0Opsz48'
import IconMovingFill1Wght600Grad0Opsz48 from '../components/MovingFill1Wght600Grad0Opsz48'
import IconMovingFill1Wght700Grad0Opsz48 from '../components/MovingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoving = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMovingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMovingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMovingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMovingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMovingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMovingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMovingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMovingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMovingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMovingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMovingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMovingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMovingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMovingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
