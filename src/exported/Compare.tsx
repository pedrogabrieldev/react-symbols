import IconCompareFill0Wght100Grad0Opsz48 from '../components/CompareFill0Wght100Grad0Opsz48'
import IconCompareFill0Wght200Grad0Opsz48 from '../components/CompareFill0Wght200Grad0Opsz48'
import IconCompareFill0Wght300Grad0Opsz48 from '../components/CompareFill0Wght300Grad0Opsz48'
import IconCompareFill0Wght400Grad0Opsz48 from '../components/CompareFill0Wght400Grad0Opsz48'
import IconCompareFill0Wght500Grad0Opsz48 from '../components/CompareFill0Wght500Grad0Opsz48'
import IconCompareFill0Wght600Grad0Opsz48 from '../components/CompareFill0Wght600Grad0Opsz48'
import IconCompareFill0Wght700Grad0Opsz48 from '../components/CompareFill0Wght700Grad0Opsz48'
import IconCompareFill1Wght100Grad0Opsz48 from '../components/CompareFill1Wght100Grad0Opsz48'
import IconCompareFill1Wght200Grad0Opsz48 from '../components/CompareFill1Wght200Grad0Opsz48'
import IconCompareFill1Wght300Grad0Opsz48 from '../components/CompareFill1Wght300Grad0Opsz48'
import IconCompareFill1Wght400Grad0Opsz48 from '../components/CompareFill1Wght400Grad0Opsz48'
import IconCompareFill1Wght500Grad0Opsz48 from '../components/CompareFill1Wght500Grad0Opsz48'
import IconCompareFill1Wght600Grad0Opsz48 from '../components/CompareFill1Wght600Grad0Opsz48'
import IconCompareFill1Wght700Grad0Opsz48 from '../components/CompareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCompare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCompareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCompareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCompareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCompareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCompareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCompareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCompareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCompareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCompareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCompareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCompareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCompareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCompareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCompareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
