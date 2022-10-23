import IconCompostFill0Wght100Grad0Opsz48 from '../components/CompostFill0Wght100Grad0Opsz48'
import IconCompostFill0Wght200Grad0Opsz48 from '../components/CompostFill0Wght200Grad0Opsz48'
import IconCompostFill0Wght300Grad0Opsz48 from '../components/CompostFill0Wght300Grad0Opsz48'
import IconCompostFill0Wght400Grad0Opsz48 from '../components/CompostFill0Wght400Grad0Opsz48'
import IconCompostFill0Wght500Grad0Opsz48 from '../components/CompostFill0Wght500Grad0Opsz48'
import IconCompostFill0Wght600Grad0Opsz48 from '../components/CompostFill0Wght600Grad0Opsz48'
import IconCompostFill0Wght700Grad0Opsz48 from '../components/CompostFill0Wght700Grad0Opsz48'
import IconCompostFill1Wght100Grad0Opsz48 from '../components/CompostFill1Wght100Grad0Opsz48'
import IconCompostFill1Wght200Grad0Opsz48 from '../components/CompostFill1Wght200Grad0Opsz48'
import IconCompostFill1Wght300Grad0Opsz48 from '../components/CompostFill1Wght300Grad0Opsz48'
import IconCompostFill1Wght400Grad0Opsz48 from '../components/CompostFill1Wght400Grad0Opsz48'
import IconCompostFill1Wght500Grad0Opsz48 from '../components/CompostFill1Wght500Grad0Opsz48'
import IconCompostFill1Wght600Grad0Opsz48 from '../components/CompostFill1Wght600Grad0Opsz48'
import IconCompostFill1Wght700Grad0Opsz48 from '../components/CompostFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCompost = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCompostFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCompostFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCompostFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCompostFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCompostFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCompostFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCompostFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCompostFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCompostFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCompostFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCompostFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCompostFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCompostFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCompostFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
