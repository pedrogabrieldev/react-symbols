import IconWcFill0Wght100Grad0Opsz48 from '../components/WcFill0Wght100Grad0Opsz48'
import IconWcFill0Wght200Grad0Opsz48 from '../components/WcFill0Wght200Grad0Opsz48'
import IconWcFill0Wght300Grad0Opsz48 from '../components/WcFill0Wght300Grad0Opsz48'
import IconWcFill0Wght400Grad0Opsz48 from '../components/WcFill0Wght400Grad0Opsz48'
import IconWcFill0Wght500Grad0Opsz48 from '../components/WcFill0Wght500Grad0Opsz48'
import IconWcFill0Wght600Grad0Opsz48 from '../components/WcFill0Wght600Grad0Opsz48'
import IconWcFill0Wght700Grad0Opsz48 from '../components/WcFill0Wght700Grad0Opsz48'
import IconWcFill1Wght100Grad0Opsz48 from '../components/WcFill1Wght100Grad0Opsz48'
import IconWcFill1Wght200Grad0Opsz48 from '../components/WcFill1Wght200Grad0Opsz48'
import IconWcFill1Wght300Grad0Opsz48 from '../components/WcFill1Wght300Grad0Opsz48'
import IconWcFill1Wght400Grad0Opsz48 from '../components/WcFill1Wght400Grad0Opsz48'
import IconWcFill1Wght500Grad0Opsz48 from '../components/WcFill1Wght500Grad0Opsz48'
import IconWcFill1Wght600Grad0Opsz48 from '../components/WcFill1Wght600Grad0Opsz48'
import IconWcFill1Wght700Grad0Opsz48 from '../components/WcFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWc = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWcFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWcFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWcFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWcFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWcFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWcFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWcFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWcFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWcFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWcFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWcFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWcFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWcFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWcFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
