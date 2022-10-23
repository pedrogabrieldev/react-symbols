import IconDresserFill0Wght100Grad0Opsz48 from '../components/DresserFill0Wght100Grad0Opsz48'
import IconDresserFill0Wght200Grad0Opsz48 from '../components/DresserFill0Wght200Grad0Opsz48'
import IconDresserFill0Wght300Grad0Opsz48 from '../components/DresserFill0Wght300Grad0Opsz48'
import IconDresserFill0Wght400Grad0Opsz48 from '../components/DresserFill0Wght400Grad0Opsz48'
import IconDresserFill0Wght500Grad0Opsz48 from '../components/DresserFill0Wght500Grad0Opsz48'
import IconDresserFill0Wght600Grad0Opsz48 from '../components/DresserFill0Wght600Grad0Opsz48'
import IconDresserFill0Wght700Grad0Opsz48 from '../components/DresserFill0Wght700Grad0Opsz48'
import IconDresserFill1Wght100Grad0Opsz48 from '../components/DresserFill1Wght100Grad0Opsz48'
import IconDresserFill1Wght200Grad0Opsz48 from '../components/DresserFill1Wght200Grad0Opsz48'
import IconDresserFill1Wght300Grad0Opsz48 from '../components/DresserFill1Wght300Grad0Opsz48'
import IconDresserFill1Wght400Grad0Opsz48 from '../components/DresserFill1Wght400Grad0Opsz48'
import IconDresserFill1Wght500Grad0Opsz48 from '../components/DresserFill1Wght500Grad0Opsz48'
import IconDresserFill1Wght600Grad0Opsz48 from '../components/DresserFill1Wght600Grad0Opsz48'
import IconDresserFill1Wght700Grad0Opsz48 from '../components/DresserFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDresser = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDresserFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDresserFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDresserFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDresserFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDresserFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDresserFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDresserFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDresserFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDresserFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDresserFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDresserFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDresserFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDresserFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDresserFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
