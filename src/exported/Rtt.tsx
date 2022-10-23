import IconRttFill0Wght100Grad0Opsz48 from '../components/RttFill0Wght100Grad0Opsz48'
import IconRttFill0Wght200Grad0Opsz48 from '../components/RttFill0Wght200Grad0Opsz48'
import IconRttFill0Wght300Grad0Opsz48 from '../components/RttFill0Wght300Grad0Opsz48'
import IconRttFill0Wght400Grad0Opsz48 from '../components/RttFill0Wght400Grad0Opsz48'
import IconRttFill0Wght500Grad0Opsz48 from '../components/RttFill0Wght500Grad0Opsz48'
import IconRttFill0Wght600Grad0Opsz48 from '../components/RttFill0Wght600Grad0Opsz48'
import IconRttFill0Wght700Grad0Opsz48 from '../components/RttFill0Wght700Grad0Opsz48'
import IconRttFill1Wght100Grad0Opsz48 from '../components/RttFill1Wght100Grad0Opsz48'
import IconRttFill1Wght200Grad0Opsz48 from '../components/RttFill1Wght200Grad0Opsz48'
import IconRttFill1Wght300Grad0Opsz48 from '../components/RttFill1Wght300Grad0Opsz48'
import IconRttFill1Wght400Grad0Opsz48 from '../components/RttFill1Wght400Grad0Opsz48'
import IconRttFill1Wght500Grad0Opsz48 from '../components/RttFill1Wght500Grad0Opsz48'
import IconRttFill1Wght600Grad0Opsz48 from '../components/RttFill1Wght600Grad0Opsz48'
import IconRttFill1Wght700Grad0Opsz48 from '../components/RttFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRtt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRttFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRttFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRttFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRttFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRttFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRttFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRttFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRttFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRttFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRttFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRttFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRttFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRttFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRttFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
