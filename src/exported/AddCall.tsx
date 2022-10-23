import IconAddCallFill0Wght100Grad0Opsz48 from '../components/AddCallFill0Wght100Grad0Opsz48'
import IconAddCallFill0Wght200Grad0Opsz48 from '../components/AddCallFill0Wght200Grad0Opsz48'
import IconAddCallFill0Wght300Grad0Opsz48 from '../components/AddCallFill0Wght300Grad0Opsz48'
import IconAddCallFill0Wght400Grad0Opsz48 from '../components/AddCallFill0Wght400Grad0Opsz48'
import IconAddCallFill0Wght500Grad0Opsz48 from '../components/AddCallFill0Wght500Grad0Opsz48'
import IconAddCallFill0Wght600Grad0Opsz48 from '../components/AddCallFill0Wght600Grad0Opsz48'
import IconAddCallFill0Wght700Grad0Opsz48 from '../components/AddCallFill0Wght700Grad0Opsz48'
import IconAddCallFill1Wght100Grad0Opsz48 from '../components/AddCallFill1Wght100Grad0Opsz48'
import IconAddCallFill1Wght200Grad0Opsz48 from '../components/AddCallFill1Wght200Grad0Opsz48'
import IconAddCallFill1Wght300Grad0Opsz48 from '../components/AddCallFill1Wght300Grad0Opsz48'
import IconAddCallFill1Wght400Grad0Opsz48 from '../components/AddCallFill1Wght400Grad0Opsz48'
import IconAddCallFill1Wght500Grad0Opsz48 from '../components/AddCallFill1Wght500Grad0Opsz48'
import IconAddCallFill1Wght600Grad0Opsz48 from '../components/AddCallFill1Wght600Grad0Opsz48'
import IconAddCallFill1Wght700Grad0Opsz48 from '../components/AddCallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddCall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddCallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddCallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddCallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddCallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddCallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddCallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddCallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddCallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddCallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddCallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddCallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddCallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddCallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddCallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
