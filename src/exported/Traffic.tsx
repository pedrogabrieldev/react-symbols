import IconTrafficFill0Wght100Grad0Opsz48 from '../components/TrafficFill0Wght100Grad0Opsz48'
import IconTrafficFill0Wght200Grad0Opsz48 from '../components/TrafficFill0Wght200Grad0Opsz48'
import IconTrafficFill0Wght300Grad0Opsz48 from '../components/TrafficFill0Wght300Grad0Opsz48'
import IconTrafficFill0Wght400Grad0Opsz48 from '../components/TrafficFill0Wght400Grad0Opsz48'
import IconTrafficFill0Wght500Grad0Opsz48 from '../components/TrafficFill0Wght500Grad0Opsz48'
import IconTrafficFill0Wght600Grad0Opsz48 from '../components/TrafficFill0Wght600Grad0Opsz48'
import IconTrafficFill0Wght700Grad0Opsz48 from '../components/TrafficFill0Wght700Grad0Opsz48'
import IconTrafficFill1Wght100Grad0Opsz48 from '../components/TrafficFill1Wght100Grad0Opsz48'
import IconTrafficFill1Wght200Grad0Opsz48 from '../components/TrafficFill1Wght200Grad0Opsz48'
import IconTrafficFill1Wght300Grad0Opsz48 from '../components/TrafficFill1Wght300Grad0Opsz48'
import IconTrafficFill1Wght400Grad0Opsz48 from '../components/TrafficFill1Wght400Grad0Opsz48'
import IconTrafficFill1Wght500Grad0Opsz48 from '../components/TrafficFill1Wght500Grad0Opsz48'
import IconTrafficFill1Wght600Grad0Opsz48 from '../components/TrafficFill1Wght600Grad0Opsz48'
import IconTrafficFill1Wght700Grad0Opsz48 from '../components/TrafficFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTraffic = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTrafficFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTrafficFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTrafficFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTrafficFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTrafficFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTrafficFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTrafficFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTrafficFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTrafficFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTrafficFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTrafficFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTrafficFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTrafficFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTrafficFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
