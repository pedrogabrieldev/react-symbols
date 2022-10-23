import IconCloseFill0Wght100Grad0Opsz48 from '../components/CloseFill0Wght100Grad0Opsz48'
import IconCloseFill0Wght200Grad0Opsz48 from '../components/CloseFill0Wght200Grad0Opsz48'
import IconCloseFill0Wght300Grad0Opsz48 from '../components/CloseFill0Wght300Grad0Opsz48'
import IconCloseFill0Wght400Grad0Opsz48 from '../components/CloseFill0Wght400Grad0Opsz48'
import IconCloseFill0Wght500Grad0Opsz48 from '../components/CloseFill0Wght500Grad0Opsz48'
import IconCloseFill0Wght600Grad0Opsz48 from '../components/CloseFill0Wght600Grad0Opsz48'
import IconCloseFill0Wght700Grad0Opsz48 from '../components/CloseFill0Wght700Grad0Opsz48'
import IconCloseFill1Wght100Grad0Opsz48 from '../components/CloseFill1Wght100Grad0Opsz48'
import IconCloseFill1Wght200Grad0Opsz48 from '../components/CloseFill1Wght200Grad0Opsz48'
import IconCloseFill1Wght300Grad0Opsz48 from '../components/CloseFill1Wght300Grad0Opsz48'
import IconCloseFill1Wght400Grad0Opsz48 from '../components/CloseFill1Wght400Grad0Opsz48'
import IconCloseFill1Wght500Grad0Opsz48 from '../components/CloseFill1Wght500Grad0Opsz48'
import IconCloseFill1Wght600Grad0Opsz48 from '../components/CloseFill1Wght600Grad0Opsz48'
import IconCloseFill1Wght700Grad0Opsz48 from '../components/CloseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconClose = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
