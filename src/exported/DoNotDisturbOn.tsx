import IconDoNotDisturbOnFill0Wght100Grad0Opsz48 from '../components/DoNotDisturbOnFill0Wght100Grad0Opsz48'
import IconDoNotDisturbOnFill0Wght200Grad0Opsz48 from '../components/DoNotDisturbOnFill0Wght200Grad0Opsz48'
import IconDoNotDisturbOnFill0Wght300Grad0Opsz48 from '../components/DoNotDisturbOnFill0Wght300Grad0Opsz48'
import IconDoNotDisturbOnFill0Wght400Grad0Opsz48 from '../components/DoNotDisturbOnFill0Wght400Grad0Opsz48'
import IconDoNotDisturbOnFill0Wght500Grad0Opsz48 from '../components/DoNotDisturbOnFill0Wght500Grad0Opsz48'
import IconDoNotDisturbOnFill0Wght600Grad0Opsz48 from '../components/DoNotDisturbOnFill0Wght600Grad0Opsz48'
import IconDoNotDisturbOnFill0Wght700Grad0Opsz48 from '../components/DoNotDisturbOnFill0Wght700Grad0Opsz48'
import IconDoNotDisturbOnFill1Wght100Grad0Opsz48 from '../components/DoNotDisturbOnFill1Wght100Grad0Opsz48'
import IconDoNotDisturbOnFill1Wght200Grad0Opsz48 from '../components/DoNotDisturbOnFill1Wght200Grad0Opsz48'
import IconDoNotDisturbOnFill1Wght300Grad0Opsz48 from '../components/DoNotDisturbOnFill1Wght300Grad0Opsz48'
import IconDoNotDisturbOnFill1Wght400Grad0Opsz48 from '../components/DoNotDisturbOnFill1Wght400Grad0Opsz48'
import IconDoNotDisturbOnFill1Wght500Grad0Opsz48 from '../components/DoNotDisturbOnFill1Wght500Grad0Opsz48'
import IconDoNotDisturbOnFill1Wght600Grad0Opsz48 from '../components/DoNotDisturbOnFill1Wght600Grad0Opsz48'
import IconDoNotDisturbOnFill1Wght700Grad0Opsz48 from '../components/DoNotDisturbOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoNotDisturbOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoNotDisturbOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoNotDisturbOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoNotDisturbOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoNotDisturbOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoNotDisturbOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoNotDisturbOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoNotDisturbOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoNotDisturbOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoNotDisturbOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoNotDisturbOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoNotDisturbOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoNotDisturbOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoNotDisturbOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoNotDisturbOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
