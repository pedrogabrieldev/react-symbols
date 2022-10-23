import IconMergeTypeFill0Wght100Grad0Opsz48 from '../components/MergeTypeFill0Wght100Grad0Opsz48'
import IconMergeTypeFill0Wght200Grad0Opsz48 from '../components/MergeTypeFill0Wght200Grad0Opsz48'
import IconMergeTypeFill0Wght300Grad0Opsz48 from '../components/MergeTypeFill0Wght300Grad0Opsz48'
import IconMergeTypeFill0Wght400Grad0Opsz48 from '../components/MergeTypeFill0Wght400Grad0Opsz48'
import IconMergeTypeFill0Wght500Grad0Opsz48 from '../components/MergeTypeFill0Wght500Grad0Opsz48'
import IconMergeTypeFill0Wght600Grad0Opsz48 from '../components/MergeTypeFill0Wght600Grad0Opsz48'
import IconMergeTypeFill0Wght700Grad0Opsz48 from '../components/MergeTypeFill0Wght700Grad0Opsz48'
import IconMergeTypeFill1Wght100Grad0Opsz48 from '../components/MergeTypeFill1Wght100Grad0Opsz48'
import IconMergeTypeFill1Wght200Grad0Opsz48 from '../components/MergeTypeFill1Wght200Grad0Opsz48'
import IconMergeTypeFill1Wght300Grad0Opsz48 from '../components/MergeTypeFill1Wght300Grad0Opsz48'
import IconMergeTypeFill1Wght400Grad0Opsz48 from '../components/MergeTypeFill1Wght400Grad0Opsz48'
import IconMergeTypeFill1Wght500Grad0Opsz48 from '../components/MergeTypeFill1Wght500Grad0Opsz48'
import IconMergeTypeFill1Wght600Grad0Opsz48 from '../components/MergeTypeFill1Wght600Grad0Opsz48'
import IconMergeTypeFill1Wght700Grad0Opsz48 from '../components/MergeTypeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMergeType = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMergeTypeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMergeTypeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMergeTypeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMergeTypeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMergeTypeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMergeTypeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMergeTypeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMergeTypeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMergeTypeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMergeTypeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMergeTypeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMergeTypeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMergeTypeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMergeTypeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
