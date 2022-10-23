import IconLocationAwayFill0Wght100Grad0Opsz48 from '../components/LocationAwayFill0Wght100Grad0Opsz48'
import IconLocationAwayFill0Wght200Grad0Opsz48 from '../components/LocationAwayFill0Wght200Grad0Opsz48'
import IconLocationAwayFill0Wght300Grad0Opsz48 from '../components/LocationAwayFill0Wght300Grad0Opsz48'
import IconLocationAwayFill0Wght400Grad0Opsz48 from '../components/LocationAwayFill0Wght400Grad0Opsz48'
import IconLocationAwayFill0Wght500Grad0Opsz48 from '../components/LocationAwayFill0Wght500Grad0Opsz48'
import IconLocationAwayFill0Wght600Grad0Opsz48 from '../components/LocationAwayFill0Wght600Grad0Opsz48'
import IconLocationAwayFill0Wght700Grad0Opsz48 from '../components/LocationAwayFill0Wght700Grad0Opsz48'
import IconLocationAwayFill1Wght100Grad0Opsz48 from '../components/LocationAwayFill1Wght100Grad0Opsz48'
import IconLocationAwayFill1Wght200Grad0Opsz48 from '../components/LocationAwayFill1Wght200Grad0Opsz48'
import IconLocationAwayFill1Wght300Grad0Opsz48 from '../components/LocationAwayFill1Wght300Grad0Opsz48'
import IconLocationAwayFill1Wght400Grad0Opsz48 from '../components/LocationAwayFill1Wght400Grad0Opsz48'
import IconLocationAwayFill1Wght500Grad0Opsz48 from '../components/LocationAwayFill1Wght500Grad0Opsz48'
import IconLocationAwayFill1Wght600Grad0Opsz48 from '../components/LocationAwayFill1Wght600Grad0Opsz48'
import IconLocationAwayFill1Wght700Grad0Opsz48 from '../components/LocationAwayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocationAway = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocationAwayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocationAwayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocationAwayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocationAwayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocationAwayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocationAwayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocationAwayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocationAwayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocationAwayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocationAwayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocationAwayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocationAwayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocationAwayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocationAwayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
