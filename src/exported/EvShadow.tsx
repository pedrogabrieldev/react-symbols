import IconEvShadowFill0Wght100Grad0Opsz48 from '../components/EvShadowFill0Wght100Grad0Opsz48'
import IconEvShadowFill0Wght200Grad0Opsz48 from '../components/EvShadowFill0Wght200Grad0Opsz48'
import IconEvShadowFill0Wght300Grad0Opsz48 from '../components/EvShadowFill0Wght300Grad0Opsz48'
import IconEvShadowFill0Wght400Grad0Opsz48 from '../components/EvShadowFill0Wght400Grad0Opsz48'
import IconEvShadowFill0Wght500Grad0Opsz48 from '../components/EvShadowFill0Wght500Grad0Opsz48'
import IconEvShadowFill0Wght600Grad0Opsz48 from '../components/EvShadowFill0Wght600Grad0Opsz48'
import IconEvShadowFill0Wght700Grad0Opsz48 from '../components/EvShadowFill0Wght700Grad0Opsz48'
import IconEvShadowFill1Wght100Grad0Opsz48 from '../components/EvShadowFill1Wght100Grad0Opsz48'
import IconEvShadowFill1Wght200Grad0Opsz48 from '../components/EvShadowFill1Wght200Grad0Opsz48'
import IconEvShadowFill1Wght300Grad0Opsz48 from '../components/EvShadowFill1Wght300Grad0Opsz48'
import IconEvShadowFill1Wght400Grad0Opsz48 from '../components/EvShadowFill1Wght400Grad0Opsz48'
import IconEvShadowFill1Wght500Grad0Opsz48 from '../components/EvShadowFill1Wght500Grad0Opsz48'
import IconEvShadowFill1Wght600Grad0Opsz48 from '../components/EvShadowFill1Wght600Grad0Opsz48'
import IconEvShadowFill1Wght700Grad0Opsz48 from '../components/EvShadowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEvShadow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEvShadowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEvShadowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEvShadowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEvShadowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEvShadowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEvShadowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEvShadowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEvShadowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEvShadowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEvShadowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEvShadowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEvShadowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEvShadowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEvShadowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
