import IconManFill0Wght100Grad0Opsz48 from '../components/ManFill0Wght100Grad0Opsz48'
import IconManFill0Wght200Grad0Opsz48 from '../components/ManFill0Wght200Grad0Opsz48'
import IconManFill0Wght300Grad0Opsz48 from '../components/ManFill0Wght300Grad0Opsz48'
import IconManFill0Wght400Grad0Opsz48 from '../components/ManFill0Wght400Grad0Opsz48'
import IconManFill0Wght500Grad0Opsz48 from '../components/ManFill0Wght500Grad0Opsz48'
import IconManFill0Wght600Grad0Opsz48 from '../components/ManFill0Wght600Grad0Opsz48'
import IconManFill0Wght700Grad0Opsz48 from '../components/ManFill0Wght700Grad0Opsz48'
import IconManFill1Wght100Grad0Opsz48 from '../components/ManFill1Wght100Grad0Opsz48'
import IconManFill1Wght200Grad0Opsz48 from '../components/ManFill1Wght200Grad0Opsz48'
import IconManFill1Wght300Grad0Opsz48 from '../components/ManFill1Wght300Grad0Opsz48'
import IconManFill1Wght400Grad0Opsz48 from '../components/ManFill1Wght400Grad0Opsz48'
import IconManFill1Wght500Grad0Opsz48 from '../components/ManFill1Wght500Grad0Opsz48'
import IconManFill1Wght600Grad0Opsz48 from '../components/ManFill1Wght600Grad0Opsz48'
import IconManFill1Wght700Grad0Opsz48 from '../components/ManFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMan = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconManFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconManFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconManFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconManFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconManFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconManFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconManFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconManFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconManFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconManFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconManFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconManFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconManFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconManFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
