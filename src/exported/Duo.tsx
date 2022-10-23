import IconDuoFill0Wght100Grad0Opsz48 from '../components/DuoFill0Wght100Grad0Opsz48'
import IconDuoFill0Wght200Grad0Opsz48 from '../components/DuoFill0Wght200Grad0Opsz48'
import IconDuoFill0Wght300Grad0Opsz48 from '../components/DuoFill0Wght300Grad0Opsz48'
import IconDuoFill0Wght400Grad0Opsz48 from '../components/DuoFill0Wght400Grad0Opsz48'
import IconDuoFill0Wght500Grad0Opsz48 from '../components/DuoFill0Wght500Grad0Opsz48'
import IconDuoFill0Wght600Grad0Opsz48 from '../components/DuoFill0Wght600Grad0Opsz48'
import IconDuoFill0Wght700Grad0Opsz48 from '../components/DuoFill0Wght700Grad0Opsz48'
import IconDuoFill1Wght100Grad0Opsz48 from '../components/DuoFill1Wght100Grad0Opsz48'
import IconDuoFill1Wght200Grad0Opsz48 from '../components/DuoFill1Wght200Grad0Opsz48'
import IconDuoFill1Wght300Grad0Opsz48 from '../components/DuoFill1Wght300Grad0Opsz48'
import IconDuoFill1Wght400Grad0Opsz48 from '../components/DuoFill1Wght400Grad0Opsz48'
import IconDuoFill1Wght500Grad0Opsz48 from '../components/DuoFill1Wght500Grad0Opsz48'
import IconDuoFill1Wght600Grad0Opsz48 from '../components/DuoFill1Wght600Grad0Opsz48'
import IconDuoFill1Wght700Grad0Opsz48 from '../components/DuoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDuo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDuoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDuoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDuoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDuoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDuoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDuoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDuoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDuoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDuoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDuoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDuoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDuoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDuoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDuoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
