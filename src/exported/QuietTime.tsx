import IconQuietTimeFill0Wght100Grad0Opsz48 from '../components/QuietTimeFill0Wght100Grad0Opsz48'
import IconQuietTimeFill0Wght200Grad0Opsz48 from '../components/QuietTimeFill0Wght200Grad0Opsz48'
import IconQuietTimeFill0Wght300Grad0Opsz48 from '../components/QuietTimeFill0Wght300Grad0Opsz48'
import IconQuietTimeFill0Wght400Grad0Opsz48 from '../components/QuietTimeFill0Wght400Grad0Opsz48'
import IconQuietTimeFill0Wght500Grad0Opsz48 from '../components/QuietTimeFill0Wght500Grad0Opsz48'
import IconQuietTimeFill0Wght600Grad0Opsz48 from '../components/QuietTimeFill0Wght600Grad0Opsz48'
import IconQuietTimeFill0Wght700Grad0Opsz48 from '../components/QuietTimeFill0Wght700Grad0Opsz48'
import IconQuietTimeFill1Wght100Grad0Opsz48 from '../components/QuietTimeFill1Wght100Grad0Opsz48'
import IconQuietTimeFill1Wght200Grad0Opsz48 from '../components/QuietTimeFill1Wght200Grad0Opsz48'
import IconQuietTimeFill1Wght300Grad0Opsz48 from '../components/QuietTimeFill1Wght300Grad0Opsz48'
import IconQuietTimeFill1Wght400Grad0Opsz48 from '../components/QuietTimeFill1Wght400Grad0Opsz48'
import IconQuietTimeFill1Wght500Grad0Opsz48 from '../components/QuietTimeFill1Wght500Grad0Opsz48'
import IconQuietTimeFill1Wght600Grad0Opsz48 from '../components/QuietTimeFill1Wght600Grad0Opsz48'
import IconQuietTimeFill1Wght700Grad0Opsz48 from '../components/QuietTimeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconQuietTime = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconQuietTimeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconQuietTimeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconQuietTimeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconQuietTimeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconQuietTimeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconQuietTimeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconQuietTimeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconQuietTimeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconQuietTimeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconQuietTimeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconQuietTimeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconQuietTimeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconQuietTimeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconQuietTimeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
