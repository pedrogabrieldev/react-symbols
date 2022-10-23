import IconNestWakeOnPressFill0Wght100Grad0Opsz48 from '../components/NestWakeOnPressFill0Wght100Grad0Opsz48'
import IconNestWakeOnPressFill0Wght200Grad0Opsz48 from '../components/NestWakeOnPressFill0Wght200Grad0Opsz48'
import IconNestWakeOnPressFill0Wght300Grad0Opsz48 from '../components/NestWakeOnPressFill0Wght300Grad0Opsz48'
import IconNestWakeOnPressFill0Wght400Grad0Opsz48 from '../components/NestWakeOnPressFill0Wght400Grad0Opsz48'
import IconNestWakeOnPressFill0Wght500Grad0Opsz48 from '../components/NestWakeOnPressFill0Wght500Grad0Opsz48'
import IconNestWakeOnPressFill0Wght600Grad0Opsz48 from '../components/NestWakeOnPressFill0Wght600Grad0Opsz48'
import IconNestWakeOnPressFill0Wght700Grad0Opsz48 from '../components/NestWakeOnPressFill0Wght700Grad0Opsz48'
import IconNestWakeOnPressFill1Wght100Grad0Opsz48 from '../components/NestWakeOnPressFill1Wght100Grad0Opsz48'
import IconNestWakeOnPressFill1Wght200Grad0Opsz48 from '../components/NestWakeOnPressFill1Wght200Grad0Opsz48'
import IconNestWakeOnPressFill1Wght300Grad0Opsz48 from '../components/NestWakeOnPressFill1Wght300Grad0Opsz48'
import IconNestWakeOnPressFill1Wght400Grad0Opsz48 from '../components/NestWakeOnPressFill1Wght400Grad0Opsz48'
import IconNestWakeOnPressFill1Wght500Grad0Opsz48 from '../components/NestWakeOnPressFill1Wght500Grad0Opsz48'
import IconNestWakeOnPressFill1Wght600Grad0Opsz48 from '../components/NestWakeOnPressFill1Wght600Grad0Opsz48'
import IconNestWakeOnPressFill1Wght700Grad0Opsz48 from '../components/NestWakeOnPressFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestWakeOnPress = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestWakeOnPressFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestWakeOnPressFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestWakeOnPressFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestWakeOnPressFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestWakeOnPressFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestWakeOnPressFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestWakeOnPressFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestWakeOnPressFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestWakeOnPressFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestWakeOnPressFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestWakeOnPressFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestWakeOnPressFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestWakeOnPressFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestWakeOnPressFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
