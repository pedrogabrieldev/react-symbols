import IconClearAllFill0Wght100Grad0Opsz48 from '../components/ClearAllFill0Wght100Grad0Opsz48'
import IconClearAllFill0Wght200Grad0Opsz48 from '../components/ClearAllFill0Wght200Grad0Opsz48'
import IconClearAllFill0Wght300Grad0Opsz48 from '../components/ClearAllFill0Wght300Grad0Opsz48'
import IconClearAllFill0Wght400Grad0Opsz48 from '../components/ClearAllFill0Wght400Grad0Opsz48'
import IconClearAllFill0Wght500Grad0Opsz48 from '../components/ClearAllFill0Wght500Grad0Opsz48'
import IconClearAllFill0Wght600Grad0Opsz48 from '../components/ClearAllFill0Wght600Grad0Opsz48'
import IconClearAllFill0Wght700Grad0Opsz48 from '../components/ClearAllFill0Wght700Grad0Opsz48'
import IconClearAllFill1Wght100Grad0Opsz48 from '../components/ClearAllFill1Wght100Grad0Opsz48'
import IconClearAllFill1Wght200Grad0Opsz48 from '../components/ClearAllFill1Wght200Grad0Opsz48'
import IconClearAllFill1Wght300Grad0Opsz48 from '../components/ClearAllFill1Wght300Grad0Opsz48'
import IconClearAllFill1Wght400Grad0Opsz48 from '../components/ClearAllFill1Wght400Grad0Opsz48'
import IconClearAllFill1Wght500Grad0Opsz48 from '../components/ClearAllFill1Wght500Grad0Opsz48'
import IconClearAllFill1Wght600Grad0Opsz48 from '../components/ClearAllFill1Wght600Grad0Opsz48'
import IconClearAllFill1Wght700Grad0Opsz48 from '../components/ClearAllFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconClearAll = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconClearAllFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconClearAllFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconClearAllFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconClearAllFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconClearAllFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconClearAllFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconClearAllFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconClearAllFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconClearAllFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconClearAllFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconClearAllFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconClearAllFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconClearAllFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconClearAllFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
