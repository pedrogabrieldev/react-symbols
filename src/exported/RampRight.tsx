import IconRampRightFill0Wght100Grad0Opsz48 from '../components/RampRightFill0Wght100Grad0Opsz48'
import IconRampRightFill0Wght200Grad0Opsz48 from '../components/RampRightFill0Wght200Grad0Opsz48'
import IconRampRightFill0Wght300Grad0Opsz48 from '../components/RampRightFill0Wght300Grad0Opsz48'
import IconRampRightFill0Wght400Grad0Opsz48 from '../components/RampRightFill0Wght400Grad0Opsz48'
import IconRampRightFill0Wght500Grad0Opsz48 from '../components/RampRightFill0Wght500Grad0Opsz48'
import IconRampRightFill0Wght600Grad0Opsz48 from '../components/RampRightFill0Wght600Grad0Opsz48'
import IconRampRightFill0Wght700Grad0Opsz48 from '../components/RampRightFill0Wght700Grad0Opsz48'
import IconRampRightFill1Wght100Grad0Opsz48 from '../components/RampRightFill1Wght100Grad0Opsz48'
import IconRampRightFill1Wght200Grad0Opsz48 from '../components/RampRightFill1Wght200Grad0Opsz48'
import IconRampRightFill1Wght300Grad0Opsz48 from '../components/RampRightFill1Wght300Grad0Opsz48'
import IconRampRightFill1Wght400Grad0Opsz48 from '../components/RampRightFill1Wght400Grad0Opsz48'
import IconRampRightFill1Wght500Grad0Opsz48 from '../components/RampRightFill1Wght500Grad0Opsz48'
import IconRampRightFill1Wght600Grad0Opsz48 from '../components/RampRightFill1Wght600Grad0Opsz48'
import IconRampRightFill1Wght700Grad0Opsz48 from '../components/RampRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRampRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRampRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRampRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRampRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRampRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRampRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRampRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRampRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRampRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRampRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRampRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRampRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRampRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRampRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRampRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
