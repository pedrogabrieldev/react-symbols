import IconPermCameraMicFill0Wght100Grad0Opsz48 from '../components/PermCameraMicFill0Wght100Grad0Opsz48'
import IconPermCameraMicFill0Wght200Grad0Opsz48 from '../components/PermCameraMicFill0Wght200Grad0Opsz48'
import IconPermCameraMicFill0Wght300Grad0Opsz48 from '../components/PermCameraMicFill0Wght300Grad0Opsz48'
import IconPermCameraMicFill0Wght400Grad0Opsz48 from '../components/PermCameraMicFill0Wght400Grad0Opsz48'
import IconPermCameraMicFill0Wght500Grad0Opsz48 from '../components/PermCameraMicFill0Wght500Grad0Opsz48'
import IconPermCameraMicFill0Wght600Grad0Opsz48 from '../components/PermCameraMicFill0Wght600Grad0Opsz48'
import IconPermCameraMicFill0Wght700Grad0Opsz48 from '../components/PermCameraMicFill0Wght700Grad0Opsz48'
import IconPermCameraMicFill1Wght100Grad0Opsz48 from '../components/PermCameraMicFill1Wght100Grad0Opsz48'
import IconPermCameraMicFill1Wght200Grad0Opsz48 from '../components/PermCameraMicFill1Wght200Grad0Opsz48'
import IconPermCameraMicFill1Wght300Grad0Opsz48 from '../components/PermCameraMicFill1Wght300Grad0Opsz48'
import IconPermCameraMicFill1Wght400Grad0Opsz48 from '../components/PermCameraMicFill1Wght400Grad0Opsz48'
import IconPermCameraMicFill1Wght500Grad0Opsz48 from '../components/PermCameraMicFill1Wght500Grad0Opsz48'
import IconPermCameraMicFill1Wght600Grad0Opsz48 from '../components/PermCameraMicFill1Wght600Grad0Opsz48'
import IconPermCameraMicFill1Wght700Grad0Opsz48 from '../components/PermCameraMicFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPermCameraMic = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPermCameraMicFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPermCameraMicFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPermCameraMicFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPermCameraMicFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPermCameraMicFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPermCameraMicFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPermCameraMicFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPermCameraMicFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPermCameraMicFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPermCameraMicFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPermCameraMicFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPermCameraMicFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPermCameraMicFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPermCameraMicFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
