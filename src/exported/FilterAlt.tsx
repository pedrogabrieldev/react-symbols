import IconFilterAltFill0Wght100Grad0Opsz48 from '../components/FilterAltFill0Wght100Grad0Opsz48'
import IconFilterAltFill0Wght200Grad0Opsz48 from '../components/FilterAltFill0Wght200Grad0Opsz48'
import IconFilterAltFill0Wght300Grad0Opsz48 from '../components/FilterAltFill0Wght300Grad0Opsz48'
import IconFilterAltFill0Wght400Grad0Opsz48 from '../components/FilterAltFill0Wght400Grad0Opsz48'
import IconFilterAltFill0Wght500Grad0Opsz48 from '../components/FilterAltFill0Wght500Grad0Opsz48'
import IconFilterAltFill0Wght600Grad0Opsz48 from '../components/FilterAltFill0Wght600Grad0Opsz48'
import IconFilterAltFill0Wght700Grad0Opsz48 from '../components/FilterAltFill0Wght700Grad0Opsz48'
import IconFilterAltFill1Wght100Grad0Opsz48 from '../components/FilterAltFill1Wght100Grad0Opsz48'
import IconFilterAltFill1Wght200Grad0Opsz48 from '../components/FilterAltFill1Wght200Grad0Opsz48'
import IconFilterAltFill1Wght300Grad0Opsz48 from '../components/FilterAltFill1Wght300Grad0Opsz48'
import IconFilterAltFill1Wght400Grad0Opsz48 from '../components/FilterAltFill1Wght400Grad0Opsz48'
import IconFilterAltFill1Wght500Grad0Opsz48 from '../components/FilterAltFill1Wght500Grad0Opsz48'
import IconFilterAltFill1Wght600Grad0Opsz48 from '../components/FilterAltFill1Wght600Grad0Opsz48'
import IconFilterAltFill1Wght700Grad0Opsz48 from '../components/FilterAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
