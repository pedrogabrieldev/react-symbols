import IconCompareArrowsFill0Wght100Grad0Opsz48 from '../components/CompareArrowsFill0Wght100Grad0Opsz48'
import IconCompareArrowsFill0Wght200Grad0Opsz48 from '../components/CompareArrowsFill0Wght200Grad0Opsz48'
import IconCompareArrowsFill0Wght300Grad0Opsz48 from '../components/CompareArrowsFill0Wght300Grad0Opsz48'
import IconCompareArrowsFill0Wght400Grad0Opsz48 from '../components/CompareArrowsFill0Wght400Grad0Opsz48'
import IconCompareArrowsFill0Wght500Grad0Opsz48 from '../components/CompareArrowsFill0Wght500Grad0Opsz48'
import IconCompareArrowsFill0Wght600Grad0Opsz48 from '../components/CompareArrowsFill0Wght600Grad0Opsz48'
import IconCompareArrowsFill0Wght700Grad0Opsz48 from '../components/CompareArrowsFill0Wght700Grad0Opsz48'
import IconCompareArrowsFill1Wght100Grad0Opsz48 from '../components/CompareArrowsFill1Wght100Grad0Opsz48'
import IconCompareArrowsFill1Wght200Grad0Opsz48 from '../components/CompareArrowsFill1Wght200Grad0Opsz48'
import IconCompareArrowsFill1Wght300Grad0Opsz48 from '../components/CompareArrowsFill1Wght300Grad0Opsz48'
import IconCompareArrowsFill1Wght400Grad0Opsz48 from '../components/CompareArrowsFill1Wght400Grad0Opsz48'
import IconCompareArrowsFill1Wght500Grad0Opsz48 from '../components/CompareArrowsFill1Wght500Grad0Opsz48'
import IconCompareArrowsFill1Wght600Grad0Opsz48 from '../components/CompareArrowsFill1Wght600Grad0Opsz48'
import IconCompareArrowsFill1Wght700Grad0Opsz48 from '../components/CompareArrowsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCompareArrows = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCompareArrowsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCompareArrowsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCompareArrowsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCompareArrowsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCompareArrowsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCompareArrowsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCompareArrowsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCompareArrowsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCompareArrowsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCompareArrowsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCompareArrowsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCompareArrowsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCompareArrowsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCompareArrowsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
