import IconLightbulbCircleFill0Wght100Grad0Opsz48 from '../components/LightbulbCircleFill0Wght100Grad0Opsz48'
import IconLightbulbCircleFill0Wght200Grad0Opsz48 from '../components/LightbulbCircleFill0Wght200Grad0Opsz48'
import IconLightbulbCircleFill0Wght300Grad0Opsz48 from '../components/LightbulbCircleFill0Wght300Grad0Opsz48'
import IconLightbulbCircleFill0Wght400Grad0Opsz48 from '../components/LightbulbCircleFill0Wght400Grad0Opsz48'
import IconLightbulbCircleFill0Wght500Grad0Opsz48 from '../components/LightbulbCircleFill0Wght500Grad0Opsz48'
import IconLightbulbCircleFill0Wght600Grad0Opsz48 from '../components/LightbulbCircleFill0Wght600Grad0Opsz48'
import IconLightbulbCircleFill0Wght700Grad0Opsz48 from '../components/LightbulbCircleFill0Wght700Grad0Opsz48'
import IconLightbulbCircleFill1Wght100Grad0Opsz48 from '../components/LightbulbCircleFill1Wght100Grad0Opsz48'
import IconLightbulbCircleFill1Wght200Grad0Opsz48 from '../components/LightbulbCircleFill1Wght200Grad0Opsz48'
import IconLightbulbCircleFill1Wght300Grad0Opsz48 from '../components/LightbulbCircleFill1Wght300Grad0Opsz48'
import IconLightbulbCircleFill1Wght400Grad0Opsz48 from '../components/LightbulbCircleFill1Wght400Grad0Opsz48'
import IconLightbulbCircleFill1Wght500Grad0Opsz48 from '../components/LightbulbCircleFill1Wght500Grad0Opsz48'
import IconLightbulbCircleFill1Wght600Grad0Opsz48 from '../components/LightbulbCircleFill1Wght600Grad0Opsz48'
import IconLightbulbCircleFill1Wght700Grad0Opsz48 from '../components/LightbulbCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLightbulbCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLightbulbCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLightbulbCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLightbulbCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLightbulbCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLightbulbCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLightbulbCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLightbulbCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLightbulbCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLightbulbCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLightbulbCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLightbulbCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLightbulbCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLightbulbCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLightbulbCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
