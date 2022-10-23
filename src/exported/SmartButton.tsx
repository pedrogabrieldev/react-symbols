import IconSmartButtonFill0Wght100Grad0Opsz48 from '../components/SmartButtonFill0Wght100Grad0Opsz48'
import IconSmartButtonFill0Wght200Grad0Opsz48 from '../components/SmartButtonFill0Wght200Grad0Opsz48'
import IconSmartButtonFill0Wght300Grad0Opsz48 from '../components/SmartButtonFill0Wght300Grad0Opsz48'
import IconSmartButtonFill0Wght400Grad0Opsz48 from '../components/SmartButtonFill0Wght400Grad0Opsz48'
import IconSmartButtonFill0Wght500Grad0Opsz48 from '../components/SmartButtonFill0Wght500Grad0Opsz48'
import IconSmartButtonFill0Wght600Grad0Opsz48 from '../components/SmartButtonFill0Wght600Grad0Opsz48'
import IconSmartButtonFill0Wght700Grad0Opsz48 from '../components/SmartButtonFill0Wght700Grad0Opsz48'
import IconSmartButtonFill1Wght100Grad0Opsz48 from '../components/SmartButtonFill1Wght100Grad0Opsz48'
import IconSmartButtonFill1Wght200Grad0Opsz48 from '../components/SmartButtonFill1Wght200Grad0Opsz48'
import IconSmartButtonFill1Wght300Grad0Opsz48 from '../components/SmartButtonFill1Wght300Grad0Opsz48'
import IconSmartButtonFill1Wght400Grad0Opsz48 from '../components/SmartButtonFill1Wght400Grad0Opsz48'
import IconSmartButtonFill1Wght500Grad0Opsz48 from '../components/SmartButtonFill1Wght500Grad0Opsz48'
import IconSmartButtonFill1Wght600Grad0Opsz48 from '../components/SmartButtonFill1Wght600Grad0Opsz48'
import IconSmartButtonFill1Wght700Grad0Opsz48 from '../components/SmartButtonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSmartButton = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSmartButtonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSmartButtonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSmartButtonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSmartButtonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSmartButtonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSmartButtonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSmartButtonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSmartButtonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSmartButtonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSmartButtonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSmartButtonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSmartButtonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSmartButtonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSmartButtonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
