import IconSmartDisplayFill0Wght100Grad0Opsz48 from '../components/SmartDisplayFill0Wght100Grad0Opsz48'
import IconSmartDisplayFill0Wght200Grad0Opsz48 from '../components/SmartDisplayFill0Wght200Grad0Opsz48'
import IconSmartDisplayFill0Wght300Grad0Opsz48 from '../components/SmartDisplayFill0Wght300Grad0Opsz48'
import IconSmartDisplayFill0Wght400Grad0Opsz48 from '../components/SmartDisplayFill0Wght400Grad0Opsz48'
import IconSmartDisplayFill0Wght500Grad0Opsz48 from '../components/SmartDisplayFill0Wght500Grad0Opsz48'
import IconSmartDisplayFill0Wght600Grad0Opsz48 from '../components/SmartDisplayFill0Wght600Grad0Opsz48'
import IconSmartDisplayFill0Wght700Grad0Opsz48 from '../components/SmartDisplayFill0Wght700Grad0Opsz48'
import IconSmartDisplayFill1Wght100Grad0Opsz48 from '../components/SmartDisplayFill1Wght100Grad0Opsz48'
import IconSmartDisplayFill1Wght200Grad0Opsz48 from '../components/SmartDisplayFill1Wght200Grad0Opsz48'
import IconSmartDisplayFill1Wght300Grad0Opsz48 from '../components/SmartDisplayFill1Wght300Grad0Opsz48'
import IconSmartDisplayFill1Wght400Grad0Opsz48 from '../components/SmartDisplayFill1Wght400Grad0Opsz48'
import IconSmartDisplayFill1Wght500Grad0Opsz48 from '../components/SmartDisplayFill1Wght500Grad0Opsz48'
import IconSmartDisplayFill1Wght600Grad0Opsz48 from '../components/SmartDisplayFill1Wght600Grad0Opsz48'
import IconSmartDisplayFill1Wght700Grad0Opsz48 from '../components/SmartDisplayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSmartDisplay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSmartDisplayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSmartDisplayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSmartDisplayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSmartDisplayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSmartDisplayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSmartDisplayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSmartDisplayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSmartDisplayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSmartDisplayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSmartDisplayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSmartDisplayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSmartDisplayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSmartDisplayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSmartDisplayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
