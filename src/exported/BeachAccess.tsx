import IconBeachAccessFill0Wght100Grad0Opsz48 from '../components/BeachAccessFill0Wght100Grad0Opsz48'
import IconBeachAccessFill0Wght200Grad0Opsz48 from '../components/BeachAccessFill0Wght200Grad0Opsz48'
import IconBeachAccessFill0Wght300Grad0Opsz48 from '../components/BeachAccessFill0Wght300Grad0Opsz48'
import IconBeachAccessFill0Wght400Grad0Opsz48 from '../components/BeachAccessFill0Wght400Grad0Opsz48'
import IconBeachAccessFill0Wght500Grad0Opsz48 from '../components/BeachAccessFill0Wght500Grad0Opsz48'
import IconBeachAccessFill0Wght600Grad0Opsz48 from '../components/BeachAccessFill0Wght600Grad0Opsz48'
import IconBeachAccessFill0Wght700Grad0Opsz48 from '../components/BeachAccessFill0Wght700Grad0Opsz48'
import IconBeachAccessFill1Wght100Grad0Opsz48 from '../components/BeachAccessFill1Wght100Grad0Opsz48'
import IconBeachAccessFill1Wght200Grad0Opsz48 from '../components/BeachAccessFill1Wght200Grad0Opsz48'
import IconBeachAccessFill1Wght300Grad0Opsz48 from '../components/BeachAccessFill1Wght300Grad0Opsz48'
import IconBeachAccessFill1Wght400Grad0Opsz48 from '../components/BeachAccessFill1Wght400Grad0Opsz48'
import IconBeachAccessFill1Wght500Grad0Opsz48 from '../components/BeachAccessFill1Wght500Grad0Opsz48'
import IconBeachAccessFill1Wght600Grad0Opsz48 from '../components/BeachAccessFill1Wght600Grad0Opsz48'
import IconBeachAccessFill1Wght700Grad0Opsz48 from '../components/BeachAccessFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBeachAccess = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBeachAccessFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBeachAccessFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBeachAccessFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBeachAccessFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBeachAccessFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBeachAccessFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBeachAccessFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBeachAccessFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBeachAccessFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBeachAccessFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBeachAccessFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBeachAccessFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBeachAccessFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBeachAccessFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
