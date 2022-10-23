import IconIceSkatingFill0Wght100Grad0Opsz48 from '../components/IceSkatingFill0Wght100Grad0Opsz48'
import IconIceSkatingFill0Wght200Grad0Opsz48 from '../components/IceSkatingFill0Wght200Grad0Opsz48'
import IconIceSkatingFill0Wght300Grad0Opsz48 from '../components/IceSkatingFill0Wght300Grad0Opsz48'
import IconIceSkatingFill0Wght400Grad0Opsz48 from '../components/IceSkatingFill0Wght400Grad0Opsz48'
import IconIceSkatingFill0Wght500Grad0Opsz48 from '../components/IceSkatingFill0Wght500Grad0Opsz48'
import IconIceSkatingFill0Wght600Grad0Opsz48 from '../components/IceSkatingFill0Wght600Grad0Opsz48'
import IconIceSkatingFill0Wght700Grad0Opsz48 from '../components/IceSkatingFill0Wght700Grad0Opsz48'
import IconIceSkatingFill1Wght100Grad0Opsz48 from '../components/IceSkatingFill1Wght100Grad0Opsz48'
import IconIceSkatingFill1Wght200Grad0Opsz48 from '../components/IceSkatingFill1Wght200Grad0Opsz48'
import IconIceSkatingFill1Wght300Grad0Opsz48 from '../components/IceSkatingFill1Wght300Grad0Opsz48'
import IconIceSkatingFill1Wght400Grad0Opsz48 from '../components/IceSkatingFill1Wght400Grad0Opsz48'
import IconIceSkatingFill1Wght500Grad0Opsz48 from '../components/IceSkatingFill1Wght500Grad0Opsz48'
import IconIceSkatingFill1Wght600Grad0Opsz48 from '../components/IceSkatingFill1Wght600Grad0Opsz48'
import IconIceSkatingFill1Wght700Grad0Opsz48 from '../components/IceSkatingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconIceSkating = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconIceSkatingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconIceSkatingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconIceSkatingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconIceSkatingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconIceSkatingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconIceSkatingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconIceSkatingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconIceSkatingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconIceSkatingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconIceSkatingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconIceSkatingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconIceSkatingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconIceSkatingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconIceSkatingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
