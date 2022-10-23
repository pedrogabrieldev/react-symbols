import IconFlatwareFill0Wght100Grad0Opsz48 from '../components/FlatwareFill0Wght100Grad0Opsz48'
import IconFlatwareFill0Wght200Grad0Opsz48 from '../components/FlatwareFill0Wght200Grad0Opsz48'
import IconFlatwareFill0Wght300Grad0Opsz48 from '../components/FlatwareFill0Wght300Grad0Opsz48'
import IconFlatwareFill0Wght400Grad0Opsz48 from '../components/FlatwareFill0Wght400Grad0Opsz48'
import IconFlatwareFill0Wght500Grad0Opsz48 from '../components/FlatwareFill0Wght500Grad0Opsz48'
import IconFlatwareFill0Wght600Grad0Opsz48 from '../components/FlatwareFill0Wght600Grad0Opsz48'
import IconFlatwareFill0Wght700Grad0Opsz48 from '../components/FlatwareFill0Wght700Grad0Opsz48'
import IconFlatwareFill1Wght100Grad0Opsz48 from '../components/FlatwareFill1Wght100Grad0Opsz48'
import IconFlatwareFill1Wght200Grad0Opsz48 from '../components/FlatwareFill1Wght200Grad0Opsz48'
import IconFlatwareFill1Wght300Grad0Opsz48 from '../components/FlatwareFill1Wght300Grad0Opsz48'
import IconFlatwareFill1Wght400Grad0Opsz48 from '../components/FlatwareFill1Wght400Grad0Opsz48'
import IconFlatwareFill1Wght500Grad0Opsz48 from '../components/FlatwareFill1Wght500Grad0Opsz48'
import IconFlatwareFill1Wght600Grad0Opsz48 from '../components/FlatwareFill1Wght600Grad0Opsz48'
import IconFlatwareFill1Wght700Grad0Opsz48 from '../components/FlatwareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlatware = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlatwareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlatwareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlatwareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlatwareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlatwareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlatwareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlatwareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlatwareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlatwareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlatwareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlatwareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlatwareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlatwareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlatwareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
