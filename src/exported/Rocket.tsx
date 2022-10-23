import IconRocketFill0Wght100Grad0Opsz48 from '../components/RocketFill0Wght100Grad0Opsz48'
import IconRocketFill0Wght200Grad0Opsz48 from '../components/RocketFill0Wght200Grad0Opsz48'
import IconRocketFill0Wght300Grad0Opsz48 from '../components/RocketFill0Wght300Grad0Opsz48'
import IconRocketFill0Wght400Grad0Opsz48 from '../components/RocketFill0Wght400Grad0Opsz48'
import IconRocketFill0Wght500Grad0Opsz48 from '../components/RocketFill0Wght500Grad0Opsz48'
import IconRocketFill0Wght600Grad0Opsz48 from '../components/RocketFill0Wght600Grad0Opsz48'
import IconRocketFill0Wght700Grad0Opsz48 from '../components/RocketFill0Wght700Grad0Opsz48'
import IconRocketFill1Wght100Grad0Opsz48 from '../components/RocketFill1Wght100Grad0Opsz48'
import IconRocketFill1Wght200Grad0Opsz48 from '../components/RocketFill1Wght200Grad0Opsz48'
import IconRocketFill1Wght300Grad0Opsz48 from '../components/RocketFill1Wght300Grad0Opsz48'
import IconRocketFill1Wght400Grad0Opsz48 from '../components/RocketFill1Wght400Grad0Opsz48'
import IconRocketFill1Wght500Grad0Opsz48 from '../components/RocketFill1Wght500Grad0Opsz48'
import IconRocketFill1Wght600Grad0Opsz48 from '../components/RocketFill1Wght600Grad0Opsz48'
import IconRocketFill1Wght700Grad0Opsz48 from '../components/RocketFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRocket = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRocketFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRocketFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRocketFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRocketFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRocketFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRocketFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRocketFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRocketFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRocketFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRocketFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRocketFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRocketFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRocketFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRocketFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
