import IconFiberNewFill0Wght100Grad0Opsz48 from '../components/FiberNewFill0Wght100Grad0Opsz48'
import IconFiberNewFill0Wght200Grad0Opsz48 from '../components/FiberNewFill0Wght200Grad0Opsz48'
import IconFiberNewFill0Wght300Grad0Opsz48 from '../components/FiberNewFill0Wght300Grad0Opsz48'
import IconFiberNewFill0Wght400Grad0Opsz48 from '../components/FiberNewFill0Wght400Grad0Opsz48'
import IconFiberNewFill0Wght500Grad0Opsz48 from '../components/FiberNewFill0Wght500Grad0Opsz48'
import IconFiberNewFill0Wght600Grad0Opsz48 from '../components/FiberNewFill0Wght600Grad0Opsz48'
import IconFiberNewFill0Wght700Grad0Opsz48 from '../components/FiberNewFill0Wght700Grad0Opsz48'
import IconFiberNewFill1Wght100Grad0Opsz48 from '../components/FiberNewFill1Wght100Grad0Opsz48'
import IconFiberNewFill1Wght200Grad0Opsz48 from '../components/FiberNewFill1Wght200Grad0Opsz48'
import IconFiberNewFill1Wght300Grad0Opsz48 from '../components/FiberNewFill1Wght300Grad0Opsz48'
import IconFiberNewFill1Wght400Grad0Opsz48 from '../components/FiberNewFill1Wght400Grad0Opsz48'
import IconFiberNewFill1Wght500Grad0Opsz48 from '../components/FiberNewFill1Wght500Grad0Opsz48'
import IconFiberNewFill1Wght600Grad0Opsz48 from '../components/FiberNewFill1Wght600Grad0Opsz48'
import IconFiberNewFill1Wght700Grad0Opsz48 from '../components/FiberNewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFiberNew = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFiberNewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFiberNewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFiberNewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFiberNewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFiberNewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFiberNewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFiberNewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFiberNewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFiberNewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFiberNewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFiberNewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFiberNewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFiberNewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFiberNewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
