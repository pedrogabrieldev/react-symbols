import IconMergeFill0Wght100Grad0Opsz48 from '../components/MergeFill0Wght100Grad0Opsz48'
import IconMergeFill0Wght200Grad0Opsz48 from '../components/MergeFill0Wght200Grad0Opsz48'
import IconMergeFill0Wght300Grad0Opsz48 from '../components/MergeFill0Wght300Grad0Opsz48'
import IconMergeFill0Wght400Grad0Opsz48 from '../components/MergeFill0Wght400Grad0Opsz48'
import IconMergeFill0Wght500Grad0Opsz48 from '../components/MergeFill0Wght500Grad0Opsz48'
import IconMergeFill0Wght600Grad0Opsz48 from '../components/MergeFill0Wght600Grad0Opsz48'
import IconMergeFill0Wght700Grad0Opsz48 from '../components/MergeFill0Wght700Grad0Opsz48'
import IconMergeFill1Wght100Grad0Opsz48 from '../components/MergeFill1Wght100Grad0Opsz48'
import IconMergeFill1Wght200Grad0Opsz48 from '../components/MergeFill1Wght200Grad0Opsz48'
import IconMergeFill1Wght300Grad0Opsz48 from '../components/MergeFill1Wght300Grad0Opsz48'
import IconMergeFill1Wght400Grad0Opsz48 from '../components/MergeFill1Wght400Grad0Opsz48'
import IconMergeFill1Wght500Grad0Opsz48 from '../components/MergeFill1Wght500Grad0Opsz48'
import IconMergeFill1Wght600Grad0Opsz48 from '../components/MergeFill1Wght600Grad0Opsz48'
import IconMergeFill1Wght700Grad0Opsz48 from '../components/MergeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMerge = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMergeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMergeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMergeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMergeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMergeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMergeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMergeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMergeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMergeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMergeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMergeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMergeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMergeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMergeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
