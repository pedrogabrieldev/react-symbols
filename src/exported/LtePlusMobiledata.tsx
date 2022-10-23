import IconLtePlusMobiledataFill0Wght100Grad0Opsz48 from '../components/LtePlusMobiledataFill0Wght100Grad0Opsz48'
import IconLtePlusMobiledataFill0Wght200Grad0Opsz48 from '../components/LtePlusMobiledataFill0Wght200Grad0Opsz48'
import IconLtePlusMobiledataFill0Wght300Grad0Opsz48 from '../components/LtePlusMobiledataFill0Wght300Grad0Opsz48'
import IconLtePlusMobiledataFill0Wght400Grad0Opsz48 from '../components/LtePlusMobiledataFill0Wght400Grad0Opsz48'
import IconLtePlusMobiledataFill0Wght500Grad0Opsz48 from '../components/LtePlusMobiledataFill0Wght500Grad0Opsz48'
import IconLtePlusMobiledataFill0Wght600Grad0Opsz48 from '../components/LtePlusMobiledataFill0Wght600Grad0Opsz48'
import IconLtePlusMobiledataFill0Wght700Grad0Opsz48 from '../components/LtePlusMobiledataFill0Wght700Grad0Opsz48'
import IconLtePlusMobiledataFill1Wght100Grad0Opsz48 from '../components/LtePlusMobiledataFill1Wght100Grad0Opsz48'
import IconLtePlusMobiledataFill1Wght200Grad0Opsz48 from '../components/LtePlusMobiledataFill1Wght200Grad0Opsz48'
import IconLtePlusMobiledataFill1Wght300Grad0Opsz48 from '../components/LtePlusMobiledataFill1Wght300Grad0Opsz48'
import IconLtePlusMobiledataFill1Wght400Grad0Opsz48 from '../components/LtePlusMobiledataFill1Wght400Grad0Opsz48'
import IconLtePlusMobiledataFill1Wght500Grad0Opsz48 from '../components/LtePlusMobiledataFill1Wght500Grad0Opsz48'
import IconLtePlusMobiledataFill1Wght600Grad0Opsz48 from '../components/LtePlusMobiledataFill1Wght600Grad0Opsz48'
import IconLtePlusMobiledataFill1Wght700Grad0Opsz48 from '../components/LtePlusMobiledataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLtePlusMobiledata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLtePlusMobiledataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLtePlusMobiledataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLtePlusMobiledataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLtePlusMobiledataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLtePlusMobiledataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLtePlusMobiledataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLtePlusMobiledataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLtePlusMobiledataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLtePlusMobiledataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLtePlusMobiledataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLtePlusMobiledataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLtePlusMobiledataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLtePlusMobiledataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLtePlusMobiledataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
