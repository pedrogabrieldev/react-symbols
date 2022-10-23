import IconRotateLeftFill0Wght100Grad0Opsz48 from '../components/RotateLeftFill0Wght100Grad0Opsz48'
import IconRotateLeftFill0Wght200Grad0Opsz48 from '../components/RotateLeftFill0Wght200Grad0Opsz48'
import IconRotateLeftFill0Wght300Grad0Opsz48 from '../components/RotateLeftFill0Wght300Grad0Opsz48'
import IconRotateLeftFill0Wght400Grad0Opsz48 from '../components/RotateLeftFill0Wght400Grad0Opsz48'
import IconRotateLeftFill0Wght500Grad0Opsz48 from '../components/RotateLeftFill0Wght500Grad0Opsz48'
import IconRotateLeftFill0Wght600Grad0Opsz48 from '../components/RotateLeftFill0Wght600Grad0Opsz48'
import IconRotateLeftFill0Wght700Grad0Opsz48 from '../components/RotateLeftFill0Wght700Grad0Opsz48'
import IconRotateLeftFill1Wght100Grad0Opsz48 from '../components/RotateLeftFill1Wght100Grad0Opsz48'
import IconRotateLeftFill1Wght200Grad0Opsz48 from '../components/RotateLeftFill1Wght200Grad0Opsz48'
import IconRotateLeftFill1Wght300Grad0Opsz48 from '../components/RotateLeftFill1Wght300Grad0Opsz48'
import IconRotateLeftFill1Wght400Grad0Opsz48 from '../components/RotateLeftFill1Wght400Grad0Opsz48'
import IconRotateLeftFill1Wght500Grad0Opsz48 from '../components/RotateLeftFill1Wght500Grad0Opsz48'
import IconRotateLeftFill1Wght600Grad0Opsz48 from '../components/RotateLeftFill1Wght600Grad0Opsz48'
import IconRotateLeftFill1Wght700Grad0Opsz48 from '../components/RotateLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRotateLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRotateLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRotateLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRotateLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRotateLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRotateLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRotateLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRotateLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRotateLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRotateLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRotateLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRotateLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRotateLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRotateLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRotateLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
