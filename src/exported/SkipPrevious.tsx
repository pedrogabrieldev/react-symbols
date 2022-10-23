import IconSkipPreviousFill0Wght100Grad0Opsz48 from '../components/SkipPreviousFill0Wght100Grad0Opsz48'
import IconSkipPreviousFill0Wght200Grad0Opsz48 from '../components/SkipPreviousFill0Wght200Grad0Opsz48'
import IconSkipPreviousFill0Wght300Grad0Opsz48 from '../components/SkipPreviousFill0Wght300Grad0Opsz48'
import IconSkipPreviousFill0Wght400Grad0Opsz48 from '../components/SkipPreviousFill0Wght400Grad0Opsz48'
import IconSkipPreviousFill0Wght500Grad0Opsz48 from '../components/SkipPreviousFill0Wght500Grad0Opsz48'
import IconSkipPreviousFill0Wght600Grad0Opsz48 from '../components/SkipPreviousFill0Wght600Grad0Opsz48'
import IconSkipPreviousFill0Wght700Grad0Opsz48 from '../components/SkipPreviousFill0Wght700Grad0Opsz48'
import IconSkipPreviousFill1Wght100Grad0Opsz48 from '../components/SkipPreviousFill1Wght100Grad0Opsz48'
import IconSkipPreviousFill1Wght200Grad0Opsz48 from '../components/SkipPreviousFill1Wght200Grad0Opsz48'
import IconSkipPreviousFill1Wght300Grad0Opsz48 from '../components/SkipPreviousFill1Wght300Grad0Opsz48'
import IconSkipPreviousFill1Wght400Grad0Opsz48 from '../components/SkipPreviousFill1Wght400Grad0Opsz48'
import IconSkipPreviousFill1Wght500Grad0Opsz48 from '../components/SkipPreviousFill1Wght500Grad0Opsz48'
import IconSkipPreviousFill1Wght600Grad0Opsz48 from '../components/SkipPreviousFill1Wght600Grad0Opsz48'
import IconSkipPreviousFill1Wght700Grad0Opsz48 from '../components/SkipPreviousFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSkipPrevious = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSkipPreviousFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSkipPreviousFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSkipPreviousFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSkipPreviousFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSkipPreviousFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSkipPreviousFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSkipPreviousFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSkipPreviousFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSkipPreviousFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSkipPreviousFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSkipPreviousFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSkipPreviousFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSkipPreviousFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSkipPreviousFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
