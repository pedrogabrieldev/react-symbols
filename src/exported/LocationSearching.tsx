import IconLocationSearchingFill0Wght100Grad0Opsz48 from '../components/LocationSearchingFill0Wght100Grad0Opsz48'
import IconLocationSearchingFill0Wght200Grad0Opsz48 from '../components/LocationSearchingFill0Wght200Grad0Opsz48'
import IconLocationSearchingFill0Wght300Grad0Opsz48 from '../components/LocationSearchingFill0Wght300Grad0Opsz48'
import IconLocationSearchingFill0Wght400Grad0Opsz48 from '../components/LocationSearchingFill0Wght400Grad0Opsz48'
import IconLocationSearchingFill0Wght500Grad0Opsz48 from '../components/LocationSearchingFill0Wght500Grad0Opsz48'
import IconLocationSearchingFill0Wght600Grad0Opsz48 from '../components/LocationSearchingFill0Wght600Grad0Opsz48'
import IconLocationSearchingFill0Wght700Grad0Opsz48 from '../components/LocationSearchingFill0Wght700Grad0Opsz48'
import IconLocationSearchingFill1Wght100Grad0Opsz48 from '../components/LocationSearchingFill1Wght100Grad0Opsz48'
import IconLocationSearchingFill1Wght200Grad0Opsz48 from '../components/LocationSearchingFill1Wght200Grad0Opsz48'
import IconLocationSearchingFill1Wght300Grad0Opsz48 from '../components/LocationSearchingFill1Wght300Grad0Opsz48'
import IconLocationSearchingFill1Wght400Grad0Opsz48 from '../components/LocationSearchingFill1Wght400Grad0Opsz48'
import IconLocationSearchingFill1Wght500Grad0Opsz48 from '../components/LocationSearchingFill1Wght500Grad0Opsz48'
import IconLocationSearchingFill1Wght600Grad0Opsz48 from '../components/LocationSearchingFill1Wght600Grad0Opsz48'
import IconLocationSearchingFill1Wght700Grad0Opsz48 from '../components/LocationSearchingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocationSearching = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocationSearchingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocationSearchingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocationSearchingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocationSearchingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocationSearchingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocationSearchingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocationSearchingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocationSearchingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocationSearchingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocationSearchingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocationSearchingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocationSearchingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocationSearchingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocationSearchingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
