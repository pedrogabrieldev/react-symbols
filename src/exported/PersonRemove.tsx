import IconPersonRemoveFill0Wght100Grad0Opsz48 from '../components/PersonRemoveFill0Wght100Grad0Opsz48'
import IconPersonRemoveFill0Wght200Grad0Opsz48 from '../components/PersonRemoveFill0Wght200Grad0Opsz48'
import IconPersonRemoveFill0Wght300Grad0Opsz48 from '../components/PersonRemoveFill0Wght300Grad0Opsz48'
import IconPersonRemoveFill0Wght400Grad0Opsz48 from '../components/PersonRemoveFill0Wght400Grad0Opsz48'
import IconPersonRemoveFill0Wght500Grad0Opsz48 from '../components/PersonRemoveFill0Wght500Grad0Opsz48'
import IconPersonRemoveFill0Wght600Grad0Opsz48 from '../components/PersonRemoveFill0Wght600Grad0Opsz48'
import IconPersonRemoveFill0Wght700Grad0Opsz48 from '../components/PersonRemoveFill0Wght700Grad0Opsz48'
import IconPersonRemoveFill1Wght100Grad0Opsz48 from '../components/PersonRemoveFill1Wght100Grad0Opsz48'
import IconPersonRemoveFill1Wght200Grad0Opsz48 from '../components/PersonRemoveFill1Wght200Grad0Opsz48'
import IconPersonRemoveFill1Wght300Grad0Opsz48 from '../components/PersonRemoveFill1Wght300Grad0Opsz48'
import IconPersonRemoveFill1Wght400Grad0Opsz48 from '../components/PersonRemoveFill1Wght400Grad0Opsz48'
import IconPersonRemoveFill1Wght500Grad0Opsz48 from '../components/PersonRemoveFill1Wght500Grad0Opsz48'
import IconPersonRemoveFill1Wght600Grad0Opsz48 from '../components/PersonRemoveFill1Wght600Grad0Opsz48'
import IconPersonRemoveFill1Wght700Grad0Opsz48 from '../components/PersonRemoveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPersonRemove = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPersonRemoveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPersonRemoveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPersonRemoveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPersonRemoveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPersonRemoveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPersonRemoveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPersonRemoveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPersonRemoveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPersonRemoveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPersonRemoveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPersonRemoveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPersonRemoveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPersonRemoveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPersonRemoveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
