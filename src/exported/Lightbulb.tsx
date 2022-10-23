import IconLightbulbFill0Wght100Grad0Opsz48 from '../components/LightbulbFill0Wght100Grad0Opsz48'
import IconLightbulbFill0Wght200Grad0Opsz48 from '../components/LightbulbFill0Wght200Grad0Opsz48'
import IconLightbulbFill0Wght300Grad0Opsz48 from '../components/LightbulbFill0Wght300Grad0Opsz48'
import IconLightbulbFill0Wght400Grad0Opsz48 from '../components/LightbulbFill0Wght400Grad0Opsz48'
import IconLightbulbFill0Wght500Grad0Opsz48 from '../components/LightbulbFill0Wght500Grad0Opsz48'
import IconLightbulbFill0Wght600Grad0Opsz48 from '../components/LightbulbFill0Wght600Grad0Opsz48'
import IconLightbulbFill0Wght700Grad0Opsz48 from '../components/LightbulbFill0Wght700Grad0Opsz48'
import IconLightbulbFill1Wght100Grad0Opsz48 from '../components/LightbulbFill1Wght100Grad0Opsz48'
import IconLightbulbFill1Wght200Grad0Opsz48 from '../components/LightbulbFill1Wght200Grad0Opsz48'
import IconLightbulbFill1Wght300Grad0Opsz48 from '../components/LightbulbFill1Wght300Grad0Opsz48'
import IconLightbulbFill1Wght400Grad0Opsz48 from '../components/LightbulbFill1Wght400Grad0Opsz48'
import IconLightbulbFill1Wght500Grad0Opsz48 from '../components/LightbulbFill1Wght500Grad0Opsz48'
import IconLightbulbFill1Wght600Grad0Opsz48 from '../components/LightbulbFill1Wght600Grad0Opsz48'
import IconLightbulbFill1Wght700Grad0Opsz48 from '../components/LightbulbFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLightbulb = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLightbulbFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLightbulbFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLightbulbFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLightbulbFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLightbulbFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLightbulbFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLightbulbFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLightbulbFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLightbulbFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLightbulbFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLightbulbFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLightbulbFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLightbulbFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLightbulbFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
