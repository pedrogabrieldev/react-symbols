import IconListAltFill0Wght100Grad0Opsz48 from '../components/ListAltFill0Wght100Grad0Opsz48'
import IconListAltFill0Wght200Grad0Opsz48 from '../components/ListAltFill0Wght200Grad0Opsz48'
import IconListAltFill0Wght300Grad0Opsz48 from '../components/ListAltFill0Wght300Grad0Opsz48'
import IconListAltFill0Wght400Grad0Opsz48 from '../components/ListAltFill0Wght400Grad0Opsz48'
import IconListAltFill0Wght500Grad0Opsz48 from '../components/ListAltFill0Wght500Grad0Opsz48'
import IconListAltFill0Wght600Grad0Opsz48 from '../components/ListAltFill0Wght600Grad0Opsz48'
import IconListAltFill0Wght700Grad0Opsz48 from '../components/ListAltFill0Wght700Grad0Opsz48'
import IconListAltFill1Wght100Grad0Opsz48 from '../components/ListAltFill1Wght100Grad0Opsz48'
import IconListAltFill1Wght200Grad0Opsz48 from '../components/ListAltFill1Wght200Grad0Opsz48'
import IconListAltFill1Wght300Grad0Opsz48 from '../components/ListAltFill1Wght300Grad0Opsz48'
import IconListAltFill1Wght400Grad0Opsz48 from '../components/ListAltFill1Wght400Grad0Opsz48'
import IconListAltFill1Wght500Grad0Opsz48 from '../components/ListAltFill1Wght500Grad0Opsz48'
import IconListAltFill1Wght600Grad0Opsz48 from '../components/ListAltFill1Wght600Grad0Opsz48'
import IconListAltFill1Wght700Grad0Opsz48 from '../components/ListAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconListAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconListAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconListAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconListAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconListAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconListAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconListAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconListAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconListAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconListAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconListAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconListAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconListAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconListAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconListAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
