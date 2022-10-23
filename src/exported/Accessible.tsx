import IconAccessibleFill0Wght100Grad0Opsz48 from '../components/AccessibleFill0Wght100Grad0Opsz48'
import IconAccessibleFill0Wght200Grad0Opsz48 from '../components/AccessibleFill0Wght200Grad0Opsz48'
import IconAccessibleFill0Wght300Grad0Opsz48 from '../components/AccessibleFill0Wght300Grad0Opsz48'
import IconAccessibleFill0Wght400Grad0Opsz48 from '../components/AccessibleFill0Wght400Grad0Opsz48'
import IconAccessibleFill0Wght500Grad0Opsz48 from '../components/AccessibleFill0Wght500Grad0Opsz48'
import IconAccessibleFill0Wght600Grad0Opsz48 from '../components/AccessibleFill0Wght600Grad0Opsz48'
import IconAccessibleFill0Wght700Grad0Opsz48 from '../components/AccessibleFill0Wght700Grad0Opsz48'
import IconAccessibleFill1Wght100Grad0Opsz48 from '../components/AccessibleFill1Wght100Grad0Opsz48'
import IconAccessibleFill1Wght200Grad0Opsz48 from '../components/AccessibleFill1Wght200Grad0Opsz48'
import IconAccessibleFill1Wght300Grad0Opsz48 from '../components/AccessibleFill1Wght300Grad0Opsz48'
import IconAccessibleFill1Wght400Grad0Opsz48 from '../components/AccessibleFill1Wght400Grad0Opsz48'
import IconAccessibleFill1Wght500Grad0Opsz48 from '../components/AccessibleFill1Wght500Grad0Opsz48'
import IconAccessibleFill1Wght600Grad0Opsz48 from '../components/AccessibleFill1Wght600Grad0Opsz48'
import IconAccessibleFill1Wght700Grad0Opsz48 from '../components/AccessibleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAccessible = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAccessibleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAccessibleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAccessibleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAccessibleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAccessibleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAccessibleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAccessibleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAccessibleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAccessibleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAccessibleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAccessibleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAccessibleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAccessibleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAccessibleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
