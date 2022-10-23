import IconWbTwilightFill0Wght100Grad0Opsz48 from '../components/WbTwilightFill0Wght100Grad0Opsz48'
import IconWbTwilightFill0Wght200Grad0Opsz48 from '../components/WbTwilightFill0Wght200Grad0Opsz48'
import IconWbTwilightFill0Wght300Grad0Opsz48 from '../components/WbTwilightFill0Wght300Grad0Opsz48'
import IconWbTwilightFill0Wght400Grad0Opsz48 from '../components/WbTwilightFill0Wght400Grad0Opsz48'
import IconWbTwilightFill0Wght500Grad0Opsz48 from '../components/WbTwilightFill0Wght500Grad0Opsz48'
import IconWbTwilightFill0Wght600Grad0Opsz48 from '../components/WbTwilightFill0Wght600Grad0Opsz48'
import IconWbTwilightFill0Wght700Grad0Opsz48 from '../components/WbTwilightFill0Wght700Grad0Opsz48'
import IconWbTwilightFill1Wght100Grad0Opsz48 from '../components/WbTwilightFill1Wght100Grad0Opsz48'
import IconWbTwilightFill1Wght200Grad0Opsz48 from '../components/WbTwilightFill1Wght200Grad0Opsz48'
import IconWbTwilightFill1Wght300Grad0Opsz48 from '../components/WbTwilightFill1Wght300Grad0Opsz48'
import IconWbTwilightFill1Wght400Grad0Opsz48 from '../components/WbTwilightFill1Wght400Grad0Opsz48'
import IconWbTwilightFill1Wght500Grad0Opsz48 from '../components/WbTwilightFill1Wght500Grad0Opsz48'
import IconWbTwilightFill1Wght600Grad0Opsz48 from '../components/WbTwilightFill1Wght600Grad0Opsz48'
import IconWbTwilightFill1Wght700Grad0Opsz48 from '../components/WbTwilightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWbTwilight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWbTwilightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWbTwilightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWbTwilightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWbTwilightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWbTwilightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWbTwilightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWbTwilightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWbTwilightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWbTwilightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWbTwilightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWbTwilightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWbTwilightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWbTwilightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWbTwilightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
