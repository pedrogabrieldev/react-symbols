import IconRampLeftFill0Wght100Grad0Opsz48 from '../components/RampLeftFill0Wght100Grad0Opsz48'
import IconRampLeftFill0Wght200Grad0Opsz48 from '../components/RampLeftFill0Wght200Grad0Opsz48'
import IconRampLeftFill0Wght300Grad0Opsz48 from '../components/RampLeftFill0Wght300Grad0Opsz48'
import IconRampLeftFill0Wght400Grad0Opsz48 from '../components/RampLeftFill0Wght400Grad0Opsz48'
import IconRampLeftFill0Wght500Grad0Opsz48 from '../components/RampLeftFill0Wght500Grad0Opsz48'
import IconRampLeftFill0Wght600Grad0Opsz48 from '../components/RampLeftFill0Wght600Grad0Opsz48'
import IconRampLeftFill0Wght700Grad0Opsz48 from '../components/RampLeftFill0Wght700Grad0Opsz48'
import IconRampLeftFill1Wght100Grad0Opsz48 from '../components/RampLeftFill1Wght100Grad0Opsz48'
import IconRampLeftFill1Wght200Grad0Opsz48 from '../components/RampLeftFill1Wght200Grad0Opsz48'
import IconRampLeftFill1Wght300Grad0Opsz48 from '../components/RampLeftFill1Wght300Grad0Opsz48'
import IconRampLeftFill1Wght400Grad0Opsz48 from '../components/RampLeftFill1Wght400Grad0Opsz48'
import IconRampLeftFill1Wght500Grad0Opsz48 from '../components/RampLeftFill1Wght500Grad0Opsz48'
import IconRampLeftFill1Wght600Grad0Opsz48 from '../components/RampLeftFill1Wght600Grad0Opsz48'
import IconRampLeftFill1Wght700Grad0Opsz48 from '../components/RampLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRampLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRampLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRampLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRampLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRampLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRampLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRampLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRampLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRampLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRampLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRampLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRampLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRampLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRampLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRampLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
