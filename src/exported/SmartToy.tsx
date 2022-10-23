import IconSmartToyFill0Wght100Grad0Opsz48 from '../components/SmartToyFill0Wght100Grad0Opsz48'
import IconSmartToyFill0Wght200Grad0Opsz48 from '../components/SmartToyFill0Wght200Grad0Opsz48'
import IconSmartToyFill0Wght300Grad0Opsz48 from '../components/SmartToyFill0Wght300Grad0Opsz48'
import IconSmartToyFill0Wght400Grad0Opsz48 from '../components/SmartToyFill0Wght400Grad0Opsz48'
import IconSmartToyFill0Wght500Grad0Opsz48 from '../components/SmartToyFill0Wght500Grad0Opsz48'
import IconSmartToyFill0Wght600Grad0Opsz48 from '../components/SmartToyFill0Wght600Grad0Opsz48'
import IconSmartToyFill0Wght700Grad0Opsz48 from '../components/SmartToyFill0Wght700Grad0Opsz48'
import IconSmartToyFill1Wght100Grad0Opsz48 from '../components/SmartToyFill1Wght100Grad0Opsz48'
import IconSmartToyFill1Wght200Grad0Opsz48 from '../components/SmartToyFill1Wght200Grad0Opsz48'
import IconSmartToyFill1Wght300Grad0Opsz48 from '../components/SmartToyFill1Wght300Grad0Opsz48'
import IconSmartToyFill1Wght400Grad0Opsz48 from '../components/SmartToyFill1Wght400Grad0Opsz48'
import IconSmartToyFill1Wght500Grad0Opsz48 from '../components/SmartToyFill1Wght500Grad0Opsz48'
import IconSmartToyFill1Wght600Grad0Opsz48 from '../components/SmartToyFill1Wght600Grad0Opsz48'
import IconSmartToyFill1Wght700Grad0Opsz48 from '../components/SmartToyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSmartToy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSmartToyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSmartToyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSmartToyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSmartToyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSmartToyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSmartToyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSmartToyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSmartToyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSmartToyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSmartToyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSmartToyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSmartToyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSmartToyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSmartToyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
