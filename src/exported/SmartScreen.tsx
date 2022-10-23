import IconSmartScreenFill0Wght100Grad0Opsz48 from '../components/SmartScreenFill0Wght100Grad0Opsz48'
import IconSmartScreenFill0Wght200Grad0Opsz48 from '../components/SmartScreenFill0Wght200Grad0Opsz48'
import IconSmartScreenFill0Wght300Grad0Opsz48 from '../components/SmartScreenFill0Wght300Grad0Opsz48'
import IconSmartScreenFill0Wght400Grad0Opsz48 from '../components/SmartScreenFill0Wght400Grad0Opsz48'
import IconSmartScreenFill0Wght500Grad0Opsz48 from '../components/SmartScreenFill0Wght500Grad0Opsz48'
import IconSmartScreenFill0Wght600Grad0Opsz48 from '../components/SmartScreenFill0Wght600Grad0Opsz48'
import IconSmartScreenFill0Wght700Grad0Opsz48 from '../components/SmartScreenFill0Wght700Grad0Opsz48'
import IconSmartScreenFill1Wght100Grad0Opsz48 from '../components/SmartScreenFill1Wght100Grad0Opsz48'
import IconSmartScreenFill1Wght200Grad0Opsz48 from '../components/SmartScreenFill1Wght200Grad0Opsz48'
import IconSmartScreenFill1Wght300Grad0Opsz48 from '../components/SmartScreenFill1Wght300Grad0Opsz48'
import IconSmartScreenFill1Wght400Grad0Opsz48 from '../components/SmartScreenFill1Wght400Grad0Opsz48'
import IconSmartScreenFill1Wght500Grad0Opsz48 from '../components/SmartScreenFill1Wght500Grad0Opsz48'
import IconSmartScreenFill1Wght600Grad0Opsz48 from '../components/SmartScreenFill1Wght600Grad0Opsz48'
import IconSmartScreenFill1Wght700Grad0Opsz48 from '../components/SmartScreenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSmartScreen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSmartScreenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSmartScreenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSmartScreenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSmartScreenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSmartScreenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSmartScreenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSmartScreenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSmartScreenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSmartScreenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSmartScreenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSmartScreenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSmartScreenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSmartScreenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSmartScreenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
