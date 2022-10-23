import IconSkipNextFill0Wght100Grad0Opsz48 from '../components/SkipNextFill0Wght100Grad0Opsz48'
import IconSkipNextFill0Wght200Grad0Opsz48 from '../components/SkipNextFill0Wght200Grad0Opsz48'
import IconSkipNextFill0Wght300Grad0Opsz48 from '../components/SkipNextFill0Wght300Grad0Opsz48'
import IconSkipNextFill0Wght400Grad0Opsz48 from '../components/SkipNextFill0Wght400Grad0Opsz48'
import IconSkipNextFill0Wght500Grad0Opsz48 from '../components/SkipNextFill0Wght500Grad0Opsz48'
import IconSkipNextFill0Wght600Grad0Opsz48 from '../components/SkipNextFill0Wght600Grad0Opsz48'
import IconSkipNextFill0Wght700Grad0Opsz48 from '../components/SkipNextFill0Wght700Grad0Opsz48'
import IconSkipNextFill1Wght100Grad0Opsz48 from '../components/SkipNextFill1Wght100Grad0Opsz48'
import IconSkipNextFill1Wght200Grad0Opsz48 from '../components/SkipNextFill1Wght200Grad0Opsz48'
import IconSkipNextFill1Wght300Grad0Opsz48 from '../components/SkipNextFill1Wght300Grad0Opsz48'
import IconSkipNextFill1Wght400Grad0Opsz48 from '../components/SkipNextFill1Wght400Grad0Opsz48'
import IconSkipNextFill1Wght500Grad0Opsz48 from '../components/SkipNextFill1Wght500Grad0Opsz48'
import IconSkipNextFill1Wght600Grad0Opsz48 from '../components/SkipNextFill1Wght600Grad0Opsz48'
import IconSkipNextFill1Wght700Grad0Opsz48 from '../components/SkipNextFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSkipNext = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSkipNextFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSkipNextFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSkipNextFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSkipNextFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSkipNextFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSkipNextFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSkipNextFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSkipNextFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSkipNextFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSkipNextFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSkipNextFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSkipNextFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSkipNextFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSkipNextFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
