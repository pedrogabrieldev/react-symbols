import IconLooksOneFill0Wght100Grad0Opsz48 from '../components/LooksOneFill0Wght100Grad0Opsz48'
import IconLooksOneFill0Wght200Grad0Opsz48 from '../components/LooksOneFill0Wght200Grad0Opsz48'
import IconLooksOneFill0Wght300Grad0Opsz48 from '../components/LooksOneFill0Wght300Grad0Opsz48'
import IconLooksOneFill0Wght400Grad0Opsz48 from '../components/LooksOneFill0Wght400Grad0Opsz48'
import IconLooksOneFill0Wght500Grad0Opsz48 from '../components/LooksOneFill0Wght500Grad0Opsz48'
import IconLooksOneFill0Wght600Grad0Opsz48 from '../components/LooksOneFill0Wght600Grad0Opsz48'
import IconLooksOneFill0Wght700Grad0Opsz48 from '../components/LooksOneFill0Wght700Grad0Opsz48'
import IconLooksOneFill1Wght100Grad0Opsz48 from '../components/LooksOneFill1Wght100Grad0Opsz48'
import IconLooksOneFill1Wght200Grad0Opsz48 from '../components/LooksOneFill1Wght200Grad0Opsz48'
import IconLooksOneFill1Wght300Grad0Opsz48 from '../components/LooksOneFill1Wght300Grad0Opsz48'
import IconLooksOneFill1Wght400Grad0Opsz48 from '../components/LooksOneFill1Wght400Grad0Opsz48'
import IconLooksOneFill1Wght500Grad0Opsz48 from '../components/LooksOneFill1Wght500Grad0Opsz48'
import IconLooksOneFill1Wght600Grad0Opsz48 from '../components/LooksOneFill1Wght600Grad0Opsz48'
import IconLooksOneFill1Wght700Grad0Opsz48 from '../components/LooksOneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLooksOne = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLooksOneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLooksOneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLooksOneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLooksOneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLooksOneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLooksOneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLooksOneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLooksOneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLooksOneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLooksOneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLooksOneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLooksOneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLooksOneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLooksOneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
