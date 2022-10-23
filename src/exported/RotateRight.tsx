import IconRotateRightFill0Wght100Grad0Opsz48 from '../components/RotateRightFill0Wght100Grad0Opsz48'
import IconRotateRightFill0Wght200Grad0Opsz48 from '../components/RotateRightFill0Wght200Grad0Opsz48'
import IconRotateRightFill0Wght300Grad0Opsz48 from '../components/RotateRightFill0Wght300Grad0Opsz48'
import IconRotateRightFill0Wght400Grad0Opsz48 from '../components/RotateRightFill0Wght400Grad0Opsz48'
import IconRotateRightFill0Wght500Grad0Opsz48 from '../components/RotateRightFill0Wght500Grad0Opsz48'
import IconRotateRightFill0Wght600Grad0Opsz48 from '../components/RotateRightFill0Wght600Grad0Opsz48'
import IconRotateRightFill0Wght700Grad0Opsz48 from '../components/RotateRightFill0Wght700Grad0Opsz48'
import IconRotateRightFill1Wght100Grad0Opsz48 from '../components/RotateRightFill1Wght100Grad0Opsz48'
import IconRotateRightFill1Wght200Grad0Opsz48 from '../components/RotateRightFill1Wght200Grad0Opsz48'
import IconRotateRightFill1Wght300Grad0Opsz48 from '../components/RotateRightFill1Wght300Grad0Opsz48'
import IconRotateRightFill1Wght400Grad0Opsz48 from '../components/RotateRightFill1Wght400Grad0Opsz48'
import IconRotateRightFill1Wght500Grad0Opsz48 from '../components/RotateRightFill1Wght500Grad0Opsz48'
import IconRotateRightFill1Wght600Grad0Opsz48 from '../components/RotateRightFill1Wght600Grad0Opsz48'
import IconRotateRightFill1Wght700Grad0Opsz48 from '../components/RotateRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRotateRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRotateRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRotateRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRotateRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRotateRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRotateRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRotateRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRotateRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRotateRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRotateRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRotateRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRotateRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRotateRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRotateRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRotateRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
