import IconQuietTimeActiveFill0Wght100Grad0Opsz48 from '../components/QuietTimeActiveFill0Wght100Grad0Opsz48'
import IconQuietTimeActiveFill0Wght200Grad0Opsz48 from '../components/QuietTimeActiveFill0Wght200Grad0Opsz48'
import IconQuietTimeActiveFill0Wght300Grad0Opsz48 from '../components/QuietTimeActiveFill0Wght300Grad0Opsz48'
import IconQuietTimeActiveFill0Wght400Grad0Opsz48 from '../components/QuietTimeActiveFill0Wght400Grad0Opsz48'
import IconQuietTimeActiveFill0Wght500Grad0Opsz48 from '../components/QuietTimeActiveFill0Wght500Grad0Opsz48'
import IconQuietTimeActiveFill0Wght600Grad0Opsz48 from '../components/QuietTimeActiveFill0Wght600Grad0Opsz48'
import IconQuietTimeActiveFill0Wght700Grad0Opsz48 from '../components/QuietTimeActiveFill0Wght700Grad0Opsz48'
import IconQuietTimeActiveFill1Wght100Grad0Opsz48 from '../components/QuietTimeActiveFill1Wght100Grad0Opsz48'
import IconQuietTimeActiveFill1Wght200Grad0Opsz48 from '../components/QuietTimeActiveFill1Wght200Grad0Opsz48'
import IconQuietTimeActiveFill1Wght300Grad0Opsz48 from '../components/QuietTimeActiveFill1Wght300Grad0Opsz48'
import IconQuietTimeActiveFill1Wght400Grad0Opsz48 from '../components/QuietTimeActiveFill1Wght400Grad0Opsz48'
import IconQuietTimeActiveFill1Wght500Grad0Opsz48 from '../components/QuietTimeActiveFill1Wght500Grad0Opsz48'
import IconQuietTimeActiveFill1Wght600Grad0Opsz48 from '../components/QuietTimeActiveFill1Wght600Grad0Opsz48'
import IconQuietTimeActiveFill1Wght700Grad0Opsz48 from '../components/QuietTimeActiveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconQuietTimeActive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconQuietTimeActiveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconQuietTimeActiveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconQuietTimeActiveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconQuietTimeActiveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconQuietTimeActiveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconQuietTimeActiveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconQuietTimeActiveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconQuietTimeActiveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconQuietTimeActiveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconQuietTimeActiveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconQuietTimeActiveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconQuietTimeActiveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconQuietTimeActiveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconQuietTimeActiveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
