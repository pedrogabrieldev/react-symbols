import IconEarlyOnFill0Wght100Grad0Opsz48 from '../components/EarlyOnFill0Wght100Grad0Opsz48'
import IconEarlyOnFill0Wght200Grad0Opsz48 from '../components/EarlyOnFill0Wght200Grad0Opsz48'
import IconEarlyOnFill0Wght300Grad0Opsz48 from '../components/EarlyOnFill0Wght300Grad0Opsz48'
import IconEarlyOnFill0Wght400Grad0Opsz48 from '../components/EarlyOnFill0Wght400Grad0Opsz48'
import IconEarlyOnFill0Wght500Grad0Opsz48 from '../components/EarlyOnFill0Wght500Grad0Opsz48'
import IconEarlyOnFill0Wght600Grad0Opsz48 from '../components/EarlyOnFill0Wght600Grad0Opsz48'
import IconEarlyOnFill0Wght700Grad0Opsz48 from '../components/EarlyOnFill0Wght700Grad0Opsz48'
import IconEarlyOnFill1Wght100Grad0Opsz48 from '../components/EarlyOnFill1Wght100Grad0Opsz48'
import IconEarlyOnFill1Wght200Grad0Opsz48 from '../components/EarlyOnFill1Wght200Grad0Opsz48'
import IconEarlyOnFill1Wght300Grad0Opsz48 from '../components/EarlyOnFill1Wght300Grad0Opsz48'
import IconEarlyOnFill1Wght400Grad0Opsz48 from '../components/EarlyOnFill1Wght400Grad0Opsz48'
import IconEarlyOnFill1Wght500Grad0Opsz48 from '../components/EarlyOnFill1Wght500Grad0Opsz48'
import IconEarlyOnFill1Wght600Grad0Opsz48 from '../components/EarlyOnFill1Wght600Grad0Opsz48'
import IconEarlyOnFill1Wght700Grad0Opsz48 from '../components/EarlyOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEarlyOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEarlyOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEarlyOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEarlyOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEarlyOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEarlyOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEarlyOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEarlyOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEarlyOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEarlyOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEarlyOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEarlyOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEarlyOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEarlyOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEarlyOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
