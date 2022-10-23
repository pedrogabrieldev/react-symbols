import IconStreetviewFill0Wght100Grad0Opsz48 from '../components/StreetviewFill0Wght100Grad0Opsz48'
import IconStreetviewFill0Wght200Grad0Opsz48 from '../components/StreetviewFill0Wght200Grad0Opsz48'
import IconStreetviewFill0Wght300Grad0Opsz48 from '../components/StreetviewFill0Wght300Grad0Opsz48'
import IconStreetviewFill0Wght400Grad0Opsz48 from '../components/StreetviewFill0Wght400Grad0Opsz48'
import IconStreetviewFill0Wght500Grad0Opsz48 from '../components/StreetviewFill0Wght500Grad0Opsz48'
import IconStreetviewFill0Wght600Grad0Opsz48 from '../components/StreetviewFill0Wght600Grad0Opsz48'
import IconStreetviewFill0Wght700Grad0Opsz48 from '../components/StreetviewFill0Wght700Grad0Opsz48'
import IconStreetviewFill1Wght100Grad0Opsz48 from '../components/StreetviewFill1Wght100Grad0Opsz48'
import IconStreetviewFill1Wght200Grad0Opsz48 from '../components/StreetviewFill1Wght200Grad0Opsz48'
import IconStreetviewFill1Wght300Grad0Opsz48 from '../components/StreetviewFill1Wght300Grad0Opsz48'
import IconStreetviewFill1Wght400Grad0Opsz48 from '../components/StreetviewFill1Wght400Grad0Opsz48'
import IconStreetviewFill1Wght500Grad0Opsz48 from '../components/StreetviewFill1Wght500Grad0Opsz48'
import IconStreetviewFill1Wght600Grad0Opsz48 from '../components/StreetviewFill1Wght600Grad0Opsz48'
import IconStreetviewFill1Wght700Grad0Opsz48 from '../components/StreetviewFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStreetview = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStreetviewFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStreetviewFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStreetviewFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStreetviewFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStreetviewFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStreetviewFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStreetviewFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStreetviewFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStreetviewFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStreetviewFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStreetviewFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStreetviewFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStreetviewFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStreetviewFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
