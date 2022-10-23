import IconWidthWideFill0Wght100Grad0Opsz48 from '../components/WidthWideFill0Wght100Grad0Opsz48'
import IconWidthWideFill0Wght200Grad0Opsz48 from '../components/WidthWideFill0Wght200Grad0Opsz48'
import IconWidthWideFill0Wght300Grad0Opsz48 from '../components/WidthWideFill0Wght300Grad0Opsz48'
import IconWidthWideFill0Wght400Grad0Opsz48 from '../components/WidthWideFill0Wght400Grad0Opsz48'
import IconWidthWideFill0Wght500Grad0Opsz48 from '../components/WidthWideFill0Wght500Grad0Opsz48'
import IconWidthWideFill0Wght600Grad0Opsz48 from '../components/WidthWideFill0Wght600Grad0Opsz48'
import IconWidthWideFill0Wght700Grad0Opsz48 from '../components/WidthWideFill0Wght700Grad0Opsz48'
import IconWidthWideFill1Wght100Grad0Opsz48 from '../components/WidthWideFill1Wght100Grad0Opsz48'
import IconWidthWideFill1Wght200Grad0Opsz48 from '../components/WidthWideFill1Wght200Grad0Opsz48'
import IconWidthWideFill1Wght300Grad0Opsz48 from '../components/WidthWideFill1Wght300Grad0Opsz48'
import IconWidthWideFill1Wght400Grad0Opsz48 from '../components/WidthWideFill1Wght400Grad0Opsz48'
import IconWidthWideFill1Wght500Grad0Opsz48 from '../components/WidthWideFill1Wght500Grad0Opsz48'
import IconWidthWideFill1Wght600Grad0Opsz48 from '../components/WidthWideFill1Wght600Grad0Opsz48'
import IconWidthWideFill1Wght700Grad0Opsz48 from '../components/WidthWideFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWidthWide = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWidthWideFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWidthWideFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWidthWideFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWidthWideFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWidthWideFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWidthWideFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWidthWideFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWidthWideFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWidthWideFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWidthWideFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWidthWideFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWidthWideFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWidthWideFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWidthWideFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
