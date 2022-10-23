import IconDoorbellFill0Wght100Grad0Opsz48 from '../components/DoorbellFill0Wght100Grad0Opsz48'
import IconDoorbellFill0Wght200Grad0Opsz48 from '../components/DoorbellFill0Wght200Grad0Opsz48'
import IconDoorbellFill0Wght300Grad0Opsz48 from '../components/DoorbellFill0Wght300Grad0Opsz48'
import IconDoorbellFill0Wght400Grad0Opsz48 from '../components/DoorbellFill0Wght400Grad0Opsz48'
import IconDoorbellFill0Wght500Grad0Opsz48 from '../components/DoorbellFill0Wght500Grad0Opsz48'
import IconDoorbellFill0Wght600Grad0Opsz48 from '../components/DoorbellFill0Wght600Grad0Opsz48'
import IconDoorbellFill0Wght700Grad0Opsz48 from '../components/DoorbellFill0Wght700Grad0Opsz48'
import IconDoorbellFill1Wght100Grad0Opsz48 from '../components/DoorbellFill1Wght100Grad0Opsz48'
import IconDoorbellFill1Wght200Grad0Opsz48 from '../components/DoorbellFill1Wght200Grad0Opsz48'
import IconDoorbellFill1Wght300Grad0Opsz48 from '../components/DoorbellFill1Wght300Grad0Opsz48'
import IconDoorbellFill1Wght400Grad0Opsz48 from '../components/DoorbellFill1Wght400Grad0Opsz48'
import IconDoorbellFill1Wght500Grad0Opsz48 from '../components/DoorbellFill1Wght500Grad0Opsz48'
import IconDoorbellFill1Wght600Grad0Opsz48 from '../components/DoorbellFill1Wght600Grad0Opsz48'
import IconDoorbellFill1Wght700Grad0Opsz48 from '../components/DoorbellFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoorbell = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoorbellFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoorbellFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoorbellFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoorbellFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoorbellFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoorbellFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoorbellFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoorbellFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoorbellFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoorbellFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoorbellFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoorbellFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoorbellFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoorbellFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
