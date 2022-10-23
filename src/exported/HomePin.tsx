import IconHomePinFill0Wght100Grad0Opsz48 from '../components/HomePinFill0Wght100Grad0Opsz48'
import IconHomePinFill0Wght200Grad0Opsz48 from '../components/HomePinFill0Wght200Grad0Opsz48'
import IconHomePinFill0Wght300Grad0Opsz48 from '../components/HomePinFill0Wght300Grad0Opsz48'
import IconHomePinFill0Wght400Grad0Opsz48 from '../components/HomePinFill0Wght400Grad0Opsz48'
import IconHomePinFill0Wght500Grad0Opsz48 from '../components/HomePinFill0Wght500Grad0Opsz48'
import IconHomePinFill0Wght600Grad0Opsz48 from '../components/HomePinFill0Wght600Grad0Opsz48'
import IconHomePinFill0Wght700Grad0Opsz48 from '../components/HomePinFill0Wght700Grad0Opsz48'
import IconHomePinFill1Wght100Grad0Opsz48 from '../components/HomePinFill1Wght100Grad0Opsz48'
import IconHomePinFill1Wght200Grad0Opsz48 from '../components/HomePinFill1Wght200Grad0Opsz48'
import IconHomePinFill1Wght300Grad0Opsz48 from '../components/HomePinFill1Wght300Grad0Opsz48'
import IconHomePinFill1Wght400Grad0Opsz48 from '../components/HomePinFill1Wght400Grad0Opsz48'
import IconHomePinFill1Wght500Grad0Opsz48 from '../components/HomePinFill1Wght500Grad0Opsz48'
import IconHomePinFill1Wght600Grad0Opsz48 from '../components/HomePinFill1Wght600Grad0Opsz48'
import IconHomePinFill1Wght700Grad0Opsz48 from '../components/HomePinFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHomePin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomePinFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomePinFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomePinFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomePinFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomePinFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomePinFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomePinFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomePinFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomePinFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomePinFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomePinFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomePinFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomePinFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomePinFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
