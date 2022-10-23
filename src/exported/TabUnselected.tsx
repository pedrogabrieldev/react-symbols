import IconTabUnselectedFill0Wght100Grad0Opsz48 from '../components/TabUnselectedFill0Wght100Grad0Opsz48'
import IconTabUnselectedFill0Wght200Grad0Opsz48 from '../components/TabUnselectedFill0Wght200Grad0Opsz48'
import IconTabUnselectedFill0Wght300Grad0Opsz48 from '../components/TabUnselectedFill0Wght300Grad0Opsz48'
import IconTabUnselectedFill0Wght400Grad0Opsz48 from '../components/TabUnselectedFill0Wght400Grad0Opsz48'
import IconTabUnselectedFill0Wght500Grad0Opsz48 from '../components/TabUnselectedFill0Wght500Grad0Opsz48'
import IconTabUnselectedFill0Wght600Grad0Opsz48 from '../components/TabUnselectedFill0Wght600Grad0Opsz48'
import IconTabUnselectedFill0Wght700Grad0Opsz48 from '../components/TabUnselectedFill0Wght700Grad0Opsz48'
import IconTabUnselectedFill1Wght100Grad0Opsz48 from '../components/TabUnselectedFill1Wght100Grad0Opsz48'
import IconTabUnselectedFill1Wght200Grad0Opsz48 from '../components/TabUnselectedFill1Wght200Grad0Opsz48'
import IconTabUnselectedFill1Wght300Grad0Opsz48 from '../components/TabUnselectedFill1Wght300Grad0Opsz48'
import IconTabUnselectedFill1Wght400Grad0Opsz48 from '../components/TabUnselectedFill1Wght400Grad0Opsz48'
import IconTabUnselectedFill1Wght500Grad0Opsz48 from '../components/TabUnselectedFill1Wght500Grad0Opsz48'
import IconTabUnselectedFill1Wght600Grad0Opsz48 from '../components/TabUnselectedFill1Wght600Grad0Opsz48'
import IconTabUnselectedFill1Wght700Grad0Opsz48 from '../components/TabUnselectedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTabUnselected = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTabUnselectedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTabUnselectedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTabUnselectedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTabUnselectedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTabUnselectedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTabUnselectedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTabUnselectedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTabUnselectedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTabUnselectedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTabUnselectedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTabUnselectedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTabUnselectedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTabUnselectedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTabUnselectedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
