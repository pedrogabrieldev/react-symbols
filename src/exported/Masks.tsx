import IconMasksFill0Wght100Grad0Opsz48 from '../components/MasksFill0Wght100Grad0Opsz48'
import IconMasksFill0Wght200Grad0Opsz48 from '../components/MasksFill0Wght200Grad0Opsz48'
import IconMasksFill0Wght300Grad0Opsz48 from '../components/MasksFill0Wght300Grad0Opsz48'
import IconMasksFill0Wght400Grad0Opsz48 from '../components/MasksFill0Wght400Grad0Opsz48'
import IconMasksFill0Wght500Grad0Opsz48 from '../components/MasksFill0Wght500Grad0Opsz48'
import IconMasksFill0Wght600Grad0Opsz48 from '../components/MasksFill0Wght600Grad0Opsz48'
import IconMasksFill0Wght700Grad0Opsz48 from '../components/MasksFill0Wght700Grad0Opsz48'
import IconMasksFill1Wght100Grad0Opsz48 from '../components/MasksFill1Wght100Grad0Opsz48'
import IconMasksFill1Wght200Grad0Opsz48 from '../components/MasksFill1Wght200Grad0Opsz48'
import IconMasksFill1Wght300Grad0Opsz48 from '../components/MasksFill1Wght300Grad0Opsz48'
import IconMasksFill1Wght400Grad0Opsz48 from '../components/MasksFill1Wght400Grad0Opsz48'
import IconMasksFill1Wght500Grad0Opsz48 from '../components/MasksFill1Wght500Grad0Opsz48'
import IconMasksFill1Wght600Grad0Opsz48 from '../components/MasksFill1Wght600Grad0Opsz48'
import IconMasksFill1Wght700Grad0Opsz48 from '../components/MasksFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMasks = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMasksFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMasksFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMasksFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMasksFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMasksFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMasksFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMasksFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMasksFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMasksFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMasksFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMasksFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMasksFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMasksFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMasksFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
