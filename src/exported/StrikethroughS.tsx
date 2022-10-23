import IconStrikethroughSFill0Wght100Grad0Opsz48 from '../components/StrikethroughSFill0Wght100Grad0Opsz48'
import IconStrikethroughSFill0Wght200Grad0Opsz48 from '../components/StrikethroughSFill0Wght200Grad0Opsz48'
import IconStrikethroughSFill0Wght300Grad0Opsz48 from '../components/StrikethroughSFill0Wght300Grad0Opsz48'
import IconStrikethroughSFill0Wght400Grad0Opsz48 from '../components/StrikethroughSFill0Wght400Grad0Opsz48'
import IconStrikethroughSFill0Wght500Grad0Opsz48 from '../components/StrikethroughSFill0Wght500Grad0Opsz48'
import IconStrikethroughSFill0Wght600Grad0Opsz48 from '../components/StrikethroughSFill0Wght600Grad0Opsz48'
import IconStrikethroughSFill0Wght700Grad0Opsz48 from '../components/StrikethroughSFill0Wght700Grad0Opsz48'
import IconStrikethroughSFill1Wght100Grad0Opsz48 from '../components/StrikethroughSFill1Wght100Grad0Opsz48'
import IconStrikethroughSFill1Wght200Grad0Opsz48 from '../components/StrikethroughSFill1Wght200Grad0Opsz48'
import IconStrikethroughSFill1Wght300Grad0Opsz48 from '../components/StrikethroughSFill1Wght300Grad0Opsz48'
import IconStrikethroughSFill1Wght400Grad0Opsz48 from '../components/StrikethroughSFill1Wght400Grad0Opsz48'
import IconStrikethroughSFill1Wght500Grad0Opsz48 from '../components/StrikethroughSFill1Wght500Grad0Opsz48'
import IconStrikethroughSFill1Wght600Grad0Opsz48 from '../components/StrikethroughSFill1Wght600Grad0Opsz48'
import IconStrikethroughSFill1Wght700Grad0Opsz48 from '../components/StrikethroughSFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStrikethroughS = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStrikethroughSFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStrikethroughSFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStrikethroughSFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStrikethroughSFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStrikethroughSFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStrikethroughSFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStrikethroughSFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStrikethroughSFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStrikethroughSFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStrikethroughSFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStrikethroughSFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStrikethroughSFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStrikethroughSFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStrikethroughSFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
