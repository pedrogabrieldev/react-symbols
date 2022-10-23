import IconTsunamiFill0Wght100Grad0Opsz48 from '../components/TsunamiFill0Wght100Grad0Opsz48'
import IconTsunamiFill0Wght200Grad0Opsz48 from '../components/TsunamiFill0Wght200Grad0Opsz48'
import IconTsunamiFill0Wght300Grad0Opsz48 from '../components/TsunamiFill0Wght300Grad0Opsz48'
import IconTsunamiFill0Wght400Grad0Opsz48 from '../components/TsunamiFill0Wght400Grad0Opsz48'
import IconTsunamiFill0Wght500Grad0Opsz48 from '../components/TsunamiFill0Wght500Grad0Opsz48'
import IconTsunamiFill0Wght600Grad0Opsz48 from '../components/TsunamiFill0Wght600Grad0Opsz48'
import IconTsunamiFill0Wght700Grad0Opsz48 from '../components/TsunamiFill0Wght700Grad0Opsz48'
import IconTsunamiFill1Wght100Grad0Opsz48 from '../components/TsunamiFill1Wght100Grad0Opsz48'
import IconTsunamiFill1Wght200Grad0Opsz48 from '../components/TsunamiFill1Wght200Grad0Opsz48'
import IconTsunamiFill1Wght300Grad0Opsz48 from '../components/TsunamiFill1Wght300Grad0Opsz48'
import IconTsunamiFill1Wght400Grad0Opsz48 from '../components/TsunamiFill1Wght400Grad0Opsz48'
import IconTsunamiFill1Wght500Grad0Opsz48 from '../components/TsunamiFill1Wght500Grad0Opsz48'
import IconTsunamiFill1Wght600Grad0Opsz48 from '../components/TsunamiFill1Wght600Grad0Opsz48'
import IconTsunamiFill1Wght700Grad0Opsz48 from '../components/TsunamiFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTsunami = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTsunamiFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTsunamiFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTsunamiFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTsunamiFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTsunamiFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTsunamiFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTsunamiFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTsunamiFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTsunamiFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTsunamiFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTsunamiFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTsunamiFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTsunamiFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTsunamiFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
