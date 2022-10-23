import IconLteMobiledataFill0Wght100Grad0Opsz48 from '../components/LteMobiledataFill0Wght100Grad0Opsz48'
import IconLteMobiledataFill0Wght200Grad0Opsz48 from '../components/LteMobiledataFill0Wght200Grad0Opsz48'
import IconLteMobiledataFill0Wght300Grad0Opsz48 from '../components/LteMobiledataFill0Wght300Grad0Opsz48'
import IconLteMobiledataFill0Wght400Grad0Opsz48 from '../components/LteMobiledataFill0Wght400Grad0Opsz48'
import IconLteMobiledataFill0Wght500Grad0Opsz48 from '../components/LteMobiledataFill0Wght500Grad0Opsz48'
import IconLteMobiledataFill0Wght600Grad0Opsz48 from '../components/LteMobiledataFill0Wght600Grad0Opsz48'
import IconLteMobiledataFill0Wght700Grad0Opsz48 from '../components/LteMobiledataFill0Wght700Grad0Opsz48'
import IconLteMobiledataFill1Wght100Grad0Opsz48 from '../components/LteMobiledataFill1Wght100Grad0Opsz48'
import IconLteMobiledataFill1Wght200Grad0Opsz48 from '../components/LteMobiledataFill1Wght200Grad0Opsz48'
import IconLteMobiledataFill1Wght300Grad0Opsz48 from '../components/LteMobiledataFill1Wght300Grad0Opsz48'
import IconLteMobiledataFill1Wght400Grad0Opsz48 from '../components/LteMobiledataFill1Wght400Grad0Opsz48'
import IconLteMobiledataFill1Wght500Grad0Opsz48 from '../components/LteMobiledataFill1Wght500Grad0Opsz48'
import IconLteMobiledataFill1Wght600Grad0Opsz48 from '../components/LteMobiledataFill1Wght600Grad0Opsz48'
import IconLteMobiledataFill1Wght700Grad0Opsz48 from '../components/LteMobiledataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLteMobiledata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLteMobiledataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLteMobiledataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLteMobiledataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLteMobiledataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLteMobiledataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLteMobiledataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLteMobiledataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLteMobiledataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLteMobiledataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLteMobiledataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLteMobiledataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLteMobiledataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLteMobiledataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLteMobiledataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
