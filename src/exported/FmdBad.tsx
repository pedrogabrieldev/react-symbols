import IconFmdBadFill0Wght100Grad0Opsz48 from '../components/FmdBadFill0Wght100Grad0Opsz48'
import IconFmdBadFill0Wght200Grad0Opsz48 from '../components/FmdBadFill0Wght200Grad0Opsz48'
import IconFmdBadFill0Wght300Grad0Opsz48 from '../components/FmdBadFill0Wght300Grad0Opsz48'
import IconFmdBadFill0Wght400Grad0Opsz48 from '../components/FmdBadFill0Wght400Grad0Opsz48'
import IconFmdBadFill0Wght500Grad0Opsz48 from '../components/FmdBadFill0Wght500Grad0Opsz48'
import IconFmdBadFill0Wght600Grad0Opsz48 from '../components/FmdBadFill0Wght600Grad0Opsz48'
import IconFmdBadFill0Wght700Grad0Opsz48 from '../components/FmdBadFill0Wght700Grad0Opsz48'
import IconFmdBadFill1Wght100Grad0Opsz48 from '../components/FmdBadFill1Wght100Grad0Opsz48'
import IconFmdBadFill1Wght200Grad0Opsz48 from '../components/FmdBadFill1Wght200Grad0Opsz48'
import IconFmdBadFill1Wght300Grad0Opsz48 from '../components/FmdBadFill1Wght300Grad0Opsz48'
import IconFmdBadFill1Wght400Grad0Opsz48 from '../components/FmdBadFill1Wght400Grad0Opsz48'
import IconFmdBadFill1Wght500Grad0Opsz48 from '../components/FmdBadFill1Wght500Grad0Opsz48'
import IconFmdBadFill1Wght600Grad0Opsz48 from '../components/FmdBadFill1Wght600Grad0Opsz48'
import IconFmdBadFill1Wght700Grad0Opsz48 from '../components/FmdBadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFmdBad = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFmdBadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFmdBadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFmdBadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFmdBadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFmdBadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFmdBadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFmdBadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFmdBadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFmdBadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFmdBadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFmdBadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFmdBadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFmdBadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFmdBadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
