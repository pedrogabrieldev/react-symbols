import IconLightFill0Wght100Grad0Opsz48 from '../components/LightFill0Wght100Grad0Opsz48'
import IconLightFill0Wght200Grad0Opsz48 from '../components/LightFill0Wght200Grad0Opsz48'
import IconLightFill0Wght300Grad0Opsz48 from '../components/LightFill0Wght300Grad0Opsz48'
import IconLightFill0Wght400Grad0Opsz48 from '../components/LightFill0Wght400Grad0Opsz48'
import IconLightFill0Wght500Grad0Opsz48 from '../components/LightFill0Wght500Grad0Opsz48'
import IconLightFill0Wght600Grad0Opsz48 from '../components/LightFill0Wght600Grad0Opsz48'
import IconLightFill0Wght700Grad0Opsz48 from '../components/LightFill0Wght700Grad0Opsz48'
import IconLightFill1Wght100Grad0Opsz48 from '../components/LightFill1Wght100Grad0Opsz48'
import IconLightFill1Wght200Grad0Opsz48 from '../components/LightFill1Wght200Grad0Opsz48'
import IconLightFill1Wght300Grad0Opsz48 from '../components/LightFill1Wght300Grad0Opsz48'
import IconLightFill1Wght400Grad0Opsz48 from '../components/LightFill1Wght400Grad0Opsz48'
import IconLightFill1Wght500Grad0Opsz48 from '../components/LightFill1Wght500Grad0Opsz48'
import IconLightFill1Wght600Grad0Opsz48 from '../components/LightFill1Wght600Grad0Opsz48'
import IconLightFill1Wght700Grad0Opsz48 from '../components/LightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
