import IconLocalCafeFill0Wght100Grad0Opsz48 from '../components/LocalCafeFill0Wght100Grad0Opsz48'
import IconLocalCafeFill0Wght200Grad0Opsz48 from '../components/LocalCafeFill0Wght200Grad0Opsz48'
import IconLocalCafeFill0Wght300Grad0Opsz48 from '../components/LocalCafeFill0Wght300Grad0Opsz48'
import IconLocalCafeFill0Wght400Grad0Opsz48 from '../components/LocalCafeFill0Wght400Grad0Opsz48'
import IconLocalCafeFill0Wght500Grad0Opsz48 from '../components/LocalCafeFill0Wght500Grad0Opsz48'
import IconLocalCafeFill0Wght600Grad0Opsz48 from '../components/LocalCafeFill0Wght600Grad0Opsz48'
import IconLocalCafeFill0Wght700Grad0Opsz48 from '../components/LocalCafeFill0Wght700Grad0Opsz48'
import IconLocalCafeFill1Wght100Grad0Opsz48 from '../components/LocalCafeFill1Wght100Grad0Opsz48'
import IconLocalCafeFill1Wght200Grad0Opsz48 from '../components/LocalCafeFill1Wght200Grad0Opsz48'
import IconLocalCafeFill1Wght300Grad0Opsz48 from '../components/LocalCafeFill1Wght300Grad0Opsz48'
import IconLocalCafeFill1Wght400Grad0Opsz48 from '../components/LocalCafeFill1Wght400Grad0Opsz48'
import IconLocalCafeFill1Wght500Grad0Opsz48 from '../components/LocalCafeFill1Wght500Grad0Opsz48'
import IconLocalCafeFill1Wght600Grad0Opsz48 from '../components/LocalCafeFill1Wght600Grad0Opsz48'
import IconLocalCafeFill1Wght700Grad0Opsz48 from '../components/LocalCafeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalCafe = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalCafeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalCafeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalCafeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalCafeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalCafeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalCafeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalCafeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalCafeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalCafeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalCafeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalCafeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalCafeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalCafeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalCafeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
