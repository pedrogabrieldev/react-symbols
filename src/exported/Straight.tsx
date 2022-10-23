import IconStraightFill0Wght100Grad0Opsz48 from '../components/StraightFill0Wght100Grad0Opsz48'
import IconStraightFill0Wght200Grad0Opsz48 from '../components/StraightFill0Wght200Grad0Opsz48'
import IconStraightFill0Wght300Grad0Opsz48 from '../components/StraightFill0Wght300Grad0Opsz48'
import IconStraightFill0Wght400Grad0Opsz48 from '../components/StraightFill0Wght400Grad0Opsz48'
import IconStraightFill0Wght500Grad0Opsz48 from '../components/StraightFill0Wght500Grad0Opsz48'
import IconStraightFill0Wght600Grad0Opsz48 from '../components/StraightFill0Wght600Grad0Opsz48'
import IconStraightFill0Wght700Grad0Opsz48 from '../components/StraightFill0Wght700Grad0Opsz48'
import IconStraightFill1Wght100Grad0Opsz48 from '../components/StraightFill1Wght100Grad0Opsz48'
import IconStraightFill1Wght200Grad0Opsz48 from '../components/StraightFill1Wght200Grad0Opsz48'
import IconStraightFill1Wght300Grad0Opsz48 from '../components/StraightFill1Wght300Grad0Opsz48'
import IconStraightFill1Wght400Grad0Opsz48 from '../components/StraightFill1Wght400Grad0Opsz48'
import IconStraightFill1Wght500Grad0Opsz48 from '../components/StraightFill1Wght500Grad0Opsz48'
import IconStraightFill1Wght600Grad0Opsz48 from '../components/StraightFill1Wght600Grad0Opsz48'
import IconStraightFill1Wght700Grad0Opsz48 from '../components/StraightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStraight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStraightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStraightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStraightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStraightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStraightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStraightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStraightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStraightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStraightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStraightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStraightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStraightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStraightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStraightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
