import IconAccessibleForwardFill0Wght100Grad0Opsz48 from '../components/AccessibleForwardFill0Wght100Grad0Opsz48'
import IconAccessibleForwardFill0Wght200Grad0Opsz48 from '../components/AccessibleForwardFill0Wght200Grad0Opsz48'
import IconAccessibleForwardFill0Wght300Grad0Opsz48 from '../components/AccessibleForwardFill0Wght300Grad0Opsz48'
import IconAccessibleForwardFill0Wght400Grad0Opsz48 from '../components/AccessibleForwardFill0Wght400Grad0Opsz48'
import IconAccessibleForwardFill0Wght500Grad0Opsz48 from '../components/AccessibleForwardFill0Wght500Grad0Opsz48'
import IconAccessibleForwardFill0Wght600Grad0Opsz48 from '../components/AccessibleForwardFill0Wght600Grad0Opsz48'
import IconAccessibleForwardFill0Wght700Grad0Opsz48 from '../components/AccessibleForwardFill0Wght700Grad0Opsz48'
import IconAccessibleForwardFill1Wght100Grad0Opsz48 from '../components/AccessibleForwardFill1Wght100Grad0Opsz48'
import IconAccessibleForwardFill1Wght200Grad0Opsz48 from '../components/AccessibleForwardFill1Wght200Grad0Opsz48'
import IconAccessibleForwardFill1Wght300Grad0Opsz48 from '../components/AccessibleForwardFill1Wght300Grad0Opsz48'
import IconAccessibleForwardFill1Wght400Grad0Opsz48 from '../components/AccessibleForwardFill1Wght400Grad0Opsz48'
import IconAccessibleForwardFill1Wght500Grad0Opsz48 from '../components/AccessibleForwardFill1Wght500Grad0Opsz48'
import IconAccessibleForwardFill1Wght600Grad0Opsz48 from '../components/AccessibleForwardFill1Wght600Grad0Opsz48'
import IconAccessibleForwardFill1Wght700Grad0Opsz48 from '../components/AccessibleForwardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAccessibleForward = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAccessibleForwardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAccessibleForwardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAccessibleForwardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAccessibleForwardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAccessibleForwardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAccessibleForwardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAccessibleForwardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAccessibleForwardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAccessibleForwardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAccessibleForwardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAccessibleForwardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAccessibleForwardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAccessibleForwardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAccessibleForwardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
