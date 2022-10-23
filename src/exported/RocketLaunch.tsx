import IconRocketLaunchFill0Wght100Grad0Opsz48 from '../components/RocketLaunchFill0Wght100Grad0Opsz48'
import IconRocketLaunchFill0Wght200Grad0Opsz48 from '../components/RocketLaunchFill0Wght200Grad0Opsz48'
import IconRocketLaunchFill0Wght300Grad0Opsz48 from '../components/RocketLaunchFill0Wght300Grad0Opsz48'
import IconRocketLaunchFill0Wght400Grad0Opsz48 from '../components/RocketLaunchFill0Wght400Grad0Opsz48'
import IconRocketLaunchFill0Wght500Grad0Opsz48 from '../components/RocketLaunchFill0Wght500Grad0Opsz48'
import IconRocketLaunchFill0Wght600Grad0Opsz48 from '../components/RocketLaunchFill0Wght600Grad0Opsz48'
import IconRocketLaunchFill0Wght700Grad0Opsz48 from '../components/RocketLaunchFill0Wght700Grad0Opsz48'
import IconRocketLaunchFill1Wght100Grad0Opsz48 from '../components/RocketLaunchFill1Wght100Grad0Opsz48'
import IconRocketLaunchFill1Wght200Grad0Opsz48 from '../components/RocketLaunchFill1Wght200Grad0Opsz48'
import IconRocketLaunchFill1Wght300Grad0Opsz48 from '../components/RocketLaunchFill1Wght300Grad0Opsz48'
import IconRocketLaunchFill1Wght400Grad0Opsz48 from '../components/RocketLaunchFill1Wght400Grad0Opsz48'
import IconRocketLaunchFill1Wght500Grad0Opsz48 from '../components/RocketLaunchFill1Wght500Grad0Opsz48'
import IconRocketLaunchFill1Wght600Grad0Opsz48 from '../components/RocketLaunchFill1Wght600Grad0Opsz48'
import IconRocketLaunchFill1Wght700Grad0Opsz48 from '../components/RocketLaunchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRocketLaunch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRocketLaunchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRocketLaunchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRocketLaunchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRocketLaunchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRocketLaunchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRocketLaunchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRocketLaunchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRocketLaunchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRocketLaunchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRocketLaunchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRocketLaunchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRocketLaunchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRocketLaunchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRocketLaunchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
