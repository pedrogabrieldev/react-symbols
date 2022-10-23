import IconFilterAltOffFill0Wght100Grad0Opsz48 from '../components/FilterAltOffFill0Wght100Grad0Opsz48'
import IconFilterAltOffFill0Wght200Grad0Opsz48 from '../components/FilterAltOffFill0Wght200Grad0Opsz48'
import IconFilterAltOffFill0Wght300Grad0Opsz48 from '../components/FilterAltOffFill0Wght300Grad0Opsz48'
import IconFilterAltOffFill0Wght400Grad0Opsz48 from '../components/FilterAltOffFill0Wght400Grad0Opsz48'
import IconFilterAltOffFill0Wght500Grad0Opsz48 from '../components/FilterAltOffFill0Wght500Grad0Opsz48'
import IconFilterAltOffFill0Wght600Grad0Opsz48 from '../components/FilterAltOffFill0Wght600Grad0Opsz48'
import IconFilterAltOffFill0Wght700Grad0Opsz48 from '../components/FilterAltOffFill0Wght700Grad0Opsz48'
import IconFilterAltOffFill1Wght100Grad0Opsz48 from '../components/FilterAltOffFill1Wght100Grad0Opsz48'
import IconFilterAltOffFill1Wght200Grad0Opsz48 from '../components/FilterAltOffFill1Wght200Grad0Opsz48'
import IconFilterAltOffFill1Wght300Grad0Opsz48 from '../components/FilterAltOffFill1Wght300Grad0Opsz48'
import IconFilterAltOffFill1Wght400Grad0Opsz48 from '../components/FilterAltOffFill1Wght400Grad0Opsz48'
import IconFilterAltOffFill1Wght500Grad0Opsz48 from '../components/FilterAltOffFill1Wght500Grad0Opsz48'
import IconFilterAltOffFill1Wght600Grad0Opsz48 from '../components/FilterAltOffFill1Wght600Grad0Opsz48'
import IconFilterAltOffFill1Wght700Grad0Opsz48 from '../components/FilterAltOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterAltOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterAltOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterAltOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterAltOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterAltOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterAltOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterAltOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterAltOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterAltOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterAltOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterAltOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterAltOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterAltOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterAltOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterAltOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
