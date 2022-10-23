import IconLightGroupFill0Wght100Grad0Opsz48 from '../components/LightGroupFill0Wght100Grad0Opsz48'
import IconLightGroupFill0Wght200Grad0Opsz48 from '../components/LightGroupFill0Wght200Grad0Opsz48'
import IconLightGroupFill0Wght300Grad0Opsz48 from '../components/LightGroupFill0Wght300Grad0Opsz48'
import IconLightGroupFill0Wght400Grad0Opsz48 from '../components/LightGroupFill0Wght400Grad0Opsz48'
import IconLightGroupFill0Wght500Grad0Opsz48 from '../components/LightGroupFill0Wght500Grad0Opsz48'
import IconLightGroupFill0Wght600Grad0Opsz48 from '../components/LightGroupFill0Wght600Grad0Opsz48'
import IconLightGroupFill0Wght700Grad0Opsz48 from '../components/LightGroupFill0Wght700Grad0Opsz48'
import IconLightGroupFill1Wght100Grad0Opsz48 from '../components/LightGroupFill1Wght100Grad0Opsz48'
import IconLightGroupFill1Wght200Grad0Opsz48 from '../components/LightGroupFill1Wght200Grad0Opsz48'
import IconLightGroupFill1Wght300Grad0Opsz48 from '../components/LightGroupFill1Wght300Grad0Opsz48'
import IconLightGroupFill1Wght400Grad0Opsz48 from '../components/LightGroupFill1Wght400Grad0Opsz48'
import IconLightGroupFill1Wght500Grad0Opsz48 from '../components/LightGroupFill1Wght500Grad0Opsz48'
import IconLightGroupFill1Wght600Grad0Opsz48 from '../components/LightGroupFill1Wght600Grad0Opsz48'
import IconLightGroupFill1Wght700Grad0Opsz48 from '../components/LightGroupFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLightGroup = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLightGroupFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLightGroupFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLightGroupFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLightGroupFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLightGroupFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLightGroupFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLightGroupFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLightGroupFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLightGroupFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLightGroupFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLightGroupFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLightGroupFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLightGroupFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLightGroupFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
