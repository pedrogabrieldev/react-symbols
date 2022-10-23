import IconMmsFill0Wght100Grad0Opsz48 from '../components/MmsFill0Wght100Grad0Opsz48'
import IconMmsFill0Wght200Grad0Opsz48 from '../components/MmsFill0Wght200Grad0Opsz48'
import IconMmsFill0Wght300Grad0Opsz48 from '../components/MmsFill0Wght300Grad0Opsz48'
import IconMmsFill0Wght400Grad0Opsz48 from '../components/MmsFill0Wght400Grad0Opsz48'
import IconMmsFill0Wght500Grad0Opsz48 from '../components/MmsFill0Wght500Grad0Opsz48'
import IconMmsFill0Wght600Grad0Opsz48 from '../components/MmsFill0Wght600Grad0Opsz48'
import IconMmsFill0Wght700Grad0Opsz48 from '../components/MmsFill0Wght700Grad0Opsz48'
import IconMmsFill1Wght100Grad0Opsz48 from '../components/MmsFill1Wght100Grad0Opsz48'
import IconMmsFill1Wght200Grad0Opsz48 from '../components/MmsFill1Wght200Grad0Opsz48'
import IconMmsFill1Wght300Grad0Opsz48 from '../components/MmsFill1Wght300Grad0Opsz48'
import IconMmsFill1Wght400Grad0Opsz48 from '../components/MmsFill1Wght400Grad0Opsz48'
import IconMmsFill1Wght500Grad0Opsz48 from '../components/MmsFill1Wght500Grad0Opsz48'
import IconMmsFill1Wght600Grad0Opsz48 from '../components/MmsFill1Wght600Grad0Opsz48'
import IconMmsFill1Wght700Grad0Opsz48 from '../components/MmsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMms = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMmsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMmsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMmsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMmsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMmsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMmsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMmsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMmsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMmsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMmsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMmsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMmsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMmsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMmsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
