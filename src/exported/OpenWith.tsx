import IconOpenWithFill0Wght100Grad0Opsz48 from '../components/OpenWithFill0Wght100Grad0Opsz48'
import IconOpenWithFill0Wght200Grad0Opsz48 from '../components/OpenWithFill0Wght200Grad0Opsz48'
import IconOpenWithFill0Wght300Grad0Opsz48 from '../components/OpenWithFill0Wght300Grad0Opsz48'
import IconOpenWithFill0Wght400Grad0Opsz48 from '../components/OpenWithFill0Wght400Grad0Opsz48'
import IconOpenWithFill0Wght500Grad0Opsz48 from '../components/OpenWithFill0Wght500Grad0Opsz48'
import IconOpenWithFill0Wght600Grad0Opsz48 from '../components/OpenWithFill0Wght600Grad0Opsz48'
import IconOpenWithFill0Wght700Grad0Opsz48 from '../components/OpenWithFill0Wght700Grad0Opsz48'
import IconOpenWithFill1Wght100Grad0Opsz48 from '../components/OpenWithFill1Wght100Grad0Opsz48'
import IconOpenWithFill1Wght200Grad0Opsz48 from '../components/OpenWithFill1Wght200Grad0Opsz48'
import IconOpenWithFill1Wght300Grad0Opsz48 from '../components/OpenWithFill1Wght300Grad0Opsz48'
import IconOpenWithFill1Wght400Grad0Opsz48 from '../components/OpenWithFill1Wght400Grad0Opsz48'
import IconOpenWithFill1Wght500Grad0Opsz48 from '../components/OpenWithFill1Wght500Grad0Opsz48'
import IconOpenWithFill1Wght600Grad0Opsz48 from '../components/OpenWithFill1Wght600Grad0Opsz48'
import IconOpenWithFill1Wght700Grad0Opsz48 from '../components/OpenWithFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOpenWith = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOpenWithFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOpenWithFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOpenWithFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOpenWithFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOpenWithFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOpenWithFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOpenWithFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOpenWithFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOpenWithFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOpenWithFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOpenWithFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOpenWithFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOpenWithFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOpenWithFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
