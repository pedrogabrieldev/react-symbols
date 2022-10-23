import IconNestWakeOnApproachFill0Wght100Grad0Opsz48 from '../components/NestWakeOnApproachFill0Wght100Grad0Opsz48'
import IconNestWakeOnApproachFill0Wght200Grad0Opsz48 from '../components/NestWakeOnApproachFill0Wght200Grad0Opsz48'
import IconNestWakeOnApproachFill0Wght300Grad0Opsz48 from '../components/NestWakeOnApproachFill0Wght300Grad0Opsz48'
import IconNestWakeOnApproachFill0Wght400Grad0Opsz48 from '../components/NestWakeOnApproachFill0Wght400Grad0Opsz48'
import IconNestWakeOnApproachFill0Wght500Grad0Opsz48 from '../components/NestWakeOnApproachFill0Wght500Grad0Opsz48'
import IconNestWakeOnApproachFill0Wght600Grad0Opsz48 from '../components/NestWakeOnApproachFill0Wght600Grad0Opsz48'
import IconNestWakeOnApproachFill0Wght700Grad0Opsz48 from '../components/NestWakeOnApproachFill0Wght700Grad0Opsz48'
import IconNestWakeOnApproachFill1Wght100Grad0Opsz48 from '../components/NestWakeOnApproachFill1Wght100Grad0Opsz48'
import IconNestWakeOnApproachFill1Wght200Grad0Opsz48 from '../components/NestWakeOnApproachFill1Wght200Grad0Opsz48'
import IconNestWakeOnApproachFill1Wght300Grad0Opsz48 from '../components/NestWakeOnApproachFill1Wght300Grad0Opsz48'
import IconNestWakeOnApproachFill1Wght400Grad0Opsz48 from '../components/NestWakeOnApproachFill1Wght400Grad0Opsz48'
import IconNestWakeOnApproachFill1Wght500Grad0Opsz48 from '../components/NestWakeOnApproachFill1Wght500Grad0Opsz48'
import IconNestWakeOnApproachFill1Wght600Grad0Opsz48 from '../components/NestWakeOnApproachFill1Wght600Grad0Opsz48'
import IconNestWakeOnApproachFill1Wght700Grad0Opsz48 from '../components/NestWakeOnApproachFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestWakeOnApproach = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestWakeOnApproachFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestWakeOnApproachFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestWakeOnApproachFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestWakeOnApproachFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestWakeOnApproachFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestWakeOnApproachFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestWakeOnApproachFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestWakeOnApproachFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestWakeOnApproachFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestWakeOnApproachFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestWakeOnApproachFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestWakeOnApproachFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestWakeOnApproachFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestWakeOnApproachFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
