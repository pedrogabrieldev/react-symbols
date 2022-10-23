import IconLocationOnFill0Wght100Grad0Opsz48 from '../components/LocationOnFill0Wght100Grad0Opsz48'
import IconLocationOnFill0Wght200Grad0Opsz48 from '../components/LocationOnFill0Wght200Grad0Opsz48'
import IconLocationOnFill0Wght300Grad0Opsz48 from '../components/LocationOnFill0Wght300Grad0Opsz48'
import IconLocationOnFill0Wght400Grad0Opsz48 from '../components/LocationOnFill0Wght400Grad0Opsz48'
import IconLocationOnFill0Wght500Grad0Opsz48 from '../components/LocationOnFill0Wght500Grad0Opsz48'
import IconLocationOnFill0Wght600Grad0Opsz48 from '../components/LocationOnFill0Wght600Grad0Opsz48'
import IconLocationOnFill0Wght700Grad0Opsz48 from '../components/LocationOnFill0Wght700Grad0Opsz48'
import IconLocationOnFill1Wght100Grad0Opsz48 from '../components/LocationOnFill1Wght100Grad0Opsz48'
import IconLocationOnFill1Wght200Grad0Opsz48 from '../components/LocationOnFill1Wght200Grad0Opsz48'
import IconLocationOnFill1Wght300Grad0Opsz48 from '../components/LocationOnFill1Wght300Grad0Opsz48'
import IconLocationOnFill1Wght400Grad0Opsz48 from '../components/LocationOnFill1Wght400Grad0Opsz48'
import IconLocationOnFill1Wght500Grad0Opsz48 from '../components/LocationOnFill1Wght500Grad0Opsz48'
import IconLocationOnFill1Wght600Grad0Opsz48 from '../components/LocationOnFill1Wght600Grad0Opsz48'
import IconLocationOnFill1Wght700Grad0Opsz48 from '../components/LocationOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocationOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocationOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocationOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocationOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocationOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocationOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocationOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocationOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocationOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocationOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocationOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocationOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocationOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocationOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocationOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
