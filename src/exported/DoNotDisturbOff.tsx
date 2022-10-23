import IconDoNotDisturbOffFill0Wght100Grad0Opsz48 from '../components/DoNotDisturbOffFill0Wght100Grad0Opsz48'
import IconDoNotDisturbOffFill0Wght200Grad0Opsz48 from '../components/DoNotDisturbOffFill0Wght200Grad0Opsz48'
import IconDoNotDisturbOffFill0Wght300Grad0Opsz48 from '../components/DoNotDisturbOffFill0Wght300Grad0Opsz48'
import IconDoNotDisturbOffFill0Wght400Grad0Opsz48 from '../components/DoNotDisturbOffFill0Wght400Grad0Opsz48'
import IconDoNotDisturbOffFill0Wght500Grad0Opsz48 from '../components/DoNotDisturbOffFill0Wght500Grad0Opsz48'
import IconDoNotDisturbOffFill0Wght600Grad0Opsz48 from '../components/DoNotDisturbOffFill0Wght600Grad0Opsz48'
import IconDoNotDisturbOffFill0Wght700Grad0Opsz48 from '../components/DoNotDisturbOffFill0Wght700Grad0Opsz48'
import IconDoNotDisturbOffFill1Wght100Grad0Opsz48 from '../components/DoNotDisturbOffFill1Wght100Grad0Opsz48'
import IconDoNotDisturbOffFill1Wght200Grad0Opsz48 from '../components/DoNotDisturbOffFill1Wght200Grad0Opsz48'
import IconDoNotDisturbOffFill1Wght300Grad0Opsz48 from '../components/DoNotDisturbOffFill1Wght300Grad0Opsz48'
import IconDoNotDisturbOffFill1Wght400Grad0Opsz48 from '../components/DoNotDisturbOffFill1Wght400Grad0Opsz48'
import IconDoNotDisturbOffFill1Wght500Grad0Opsz48 from '../components/DoNotDisturbOffFill1Wght500Grad0Opsz48'
import IconDoNotDisturbOffFill1Wght600Grad0Opsz48 from '../components/DoNotDisturbOffFill1Wght600Grad0Opsz48'
import IconDoNotDisturbOffFill1Wght700Grad0Opsz48 from '../components/DoNotDisturbOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoNotDisturbOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoNotDisturbOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoNotDisturbOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoNotDisturbOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoNotDisturbOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoNotDisturbOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoNotDisturbOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoNotDisturbOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoNotDisturbOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoNotDisturbOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoNotDisturbOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoNotDisturbOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoNotDisturbOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoNotDisturbOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoNotDisturbOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
