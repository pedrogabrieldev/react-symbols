import IconWbIncandescentFill0Wght100Grad0Opsz48 from '../components/WbIncandescentFill0Wght100Grad0Opsz48'
import IconWbIncandescentFill0Wght200Grad0Opsz48 from '../components/WbIncandescentFill0Wght200Grad0Opsz48'
import IconWbIncandescentFill0Wght300Grad0Opsz48 from '../components/WbIncandescentFill0Wght300Grad0Opsz48'
import IconWbIncandescentFill0Wght400Grad0Opsz48 from '../components/WbIncandescentFill0Wght400Grad0Opsz48'
import IconWbIncandescentFill0Wght500Grad0Opsz48 from '../components/WbIncandescentFill0Wght500Grad0Opsz48'
import IconWbIncandescentFill0Wght600Grad0Opsz48 from '../components/WbIncandescentFill0Wght600Grad0Opsz48'
import IconWbIncandescentFill0Wght700Grad0Opsz48 from '../components/WbIncandescentFill0Wght700Grad0Opsz48'
import IconWbIncandescentFill1Wght100Grad0Opsz48 from '../components/WbIncandescentFill1Wght100Grad0Opsz48'
import IconWbIncandescentFill1Wght200Grad0Opsz48 from '../components/WbIncandescentFill1Wght200Grad0Opsz48'
import IconWbIncandescentFill1Wght300Grad0Opsz48 from '../components/WbIncandescentFill1Wght300Grad0Opsz48'
import IconWbIncandescentFill1Wght400Grad0Opsz48 from '../components/WbIncandescentFill1Wght400Grad0Opsz48'
import IconWbIncandescentFill1Wght500Grad0Opsz48 from '../components/WbIncandescentFill1Wght500Grad0Opsz48'
import IconWbIncandescentFill1Wght600Grad0Opsz48 from '../components/WbIncandescentFill1Wght600Grad0Opsz48'
import IconWbIncandescentFill1Wght700Grad0Opsz48 from '../components/WbIncandescentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWbIncandescent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWbIncandescentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWbIncandescentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWbIncandescentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWbIncandescentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWbIncandescentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWbIncandescentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWbIncandescentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWbIncandescentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWbIncandescentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWbIncandescentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWbIncandescentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWbIncandescentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWbIncandescentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWbIncandescentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
