import IconLightModeFill0Wght100Grad0Opsz48 from '../components/LightModeFill0Wght100Grad0Opsz48'
import IconLightModeFill0Wght200Grad0Opsz48 from '../components/LightModeFill0Wght200Grad0Opsz48'
import IconLightModeFill0Wght300Grad0Opsz48 from '../components/LightModeFill0Wght300Grad0Opsz48'
import IconLightModeFill0Wght400Grad0Opsz48 from '../components/LightModeFill0Wght400Grad0Opsz48'
import IconLightModeFill0Wght500Grad0Opsz48 from '../components/LightModeFill0Wght500Grad0Opsz48'
import IconLightModeFill0Wght600Grad0Opsz48 from '../components/LightModeFill0Wght600Grad0Opsz48'
import IconLightModeFill0Wght700Grad0Opsz48 from '../components/LightModeFill0Wght700Grad0Opsz48'
import IconLightModeFill1Wght100Grad0Opsz48 from '../components/LightModeFill1Wght100Grad0Opsz48'
import IconLightModeFill1Wght200Grad0Opsz48 from '../components/LightModeFill1Wght200Grad0Opsz48'
import IconLightModeFill1Wght300Grad0Opsz48 from '../components/LightModeFill1Wght300Grad0Opsz48'
import IconLightModeFill1Wght400Grad0Opsz48 from '../components/LightModeFill1Wght400Grad0Opsz48'
import IconLightModeFill1Wght500Grad0Opsz48 from '../components/LightModeFill1Wght500Grad0Opsz48'
import IconLightModeFill1Wght600Grad0Opsz48 from '../components/LightModeFill1Wght600Grad0Opsz48'
import IconLightModeFill1Wght700Grad0Opsz48 from '../components/LightModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLightMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLightModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLightModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLightModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLightModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLightModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLightModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLightModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLightModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLightModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLightModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLightModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLightModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLightModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLightModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
