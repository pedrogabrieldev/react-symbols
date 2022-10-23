import IconFoggyFill0Wght100Grad0Opsz48 from '../components/FoggyFill0Wght100Grad0Opsz48'
import IconFoggyFill0Wght200Grad0Opsz48 from '../components/FoggyFill0Wght200Grad0Opsz48'
import IconFoggyFill0Wght300Grad0Opsz48 from '../components/FoggyFill0Wght300Grad0Opsz48'
import IconFoggyFill0Wght400Grad0Opsz48 from '../components/FoggyFill0Wght400Grad0Opsz48'
import IconFoggyFill0Wght500Grad0Opsz48 from '../components/FoggyFill0Wght500Grad0Opsz48'
import IconFoggyFill0Wght600Grad0Opsz48 from '../components/FoggyFill0Wght600Grad0Opsz48'
import IconFoggyFill0Wght700Grad0Opsz48 from '../components/FoggyFill0Wght700Grad0Opsz48'
import IconFoggyFill1Wght100Grad0Opsz48 from '../components/FoggyFill1Wght100Grad0Opsz48'
import IconFoggyFill1Wght200Grad0Opsz48 from '../components/FoggyFill1Wght200Grad0Opsz48'
import IconFoggyFill1Wght300Grad0Opsz48 from '../components/FoggyFill1Wght300Grad0Opsz48'
import IconFoggyFill1Wght400Grad0Opsz48 from '../components/FoggyFill1Wght400Grad0Opsz48'
import IconFoggyFill1Wght500Grad0Opsz48 from '../components/FoggyFill1Wght500Grad0Opsz48'
import IconFoggyFill1Wght600Grad0Opsz48 from '../components/FoggyFill1Wght600Grad0Opsz48'
import IconFoggyFill1Wght700Grad0Opsz48 from '../components/FoggyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFoggy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFoggyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFoggyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFoggyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFoggyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFoggyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFoggyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFoggyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFoggyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFoggyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFoggyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFoggyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFoggyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFoggyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFoggyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
