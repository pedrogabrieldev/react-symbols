import IconSmartOutletFill0Wght100Grad0Opsz48 from '../components/SmartOutletFill0Wght100Grad0Opsz48'
import IconSmartOutletFill0Wght200Grad0Opsz48 from '../components/SmartOutletFill0Wght200Grad0Opsz48'
import IconSmartOutletFill0Wght300Grad0Opsz48 from '../components/SmartOutletFill0Wght300Grad0Opsz48'
import IconSmartOutletFill0Wght400Grad0Opsz48 from '../components/SmartOutletFill0Wght400Grad0Opsz48'
import IconSmartOutletFill0Wght500Grad0Opsz48 from '../components/SmartOutletFill0Wght500Grad0Opsz48'
import IconSmartOutletFill0Wght600Grad0Opsz48 from '../components/SmartOutletFill0Wght600Grad0Opsz48'
import IconSmartOutletFill0Wght700Grad0Opsz48 from '../components/SmartOutletFill0Wght700Grad0Opsz48'
import IconSmartOutletFill1Wght100Grad0Opsz48 from '../components/SmartOutletFill1Wght100Grad0Opsz48'
import IconSmartOutletFill1Wght200Grad0Opsz48 from '../components/SmartOutletFill1Wght200Grad0Opsz48'
import IconSmartOutletFill1Wght300Grad0Opsz48 from '../components/SmartOutletFill1Wght300Grad0Opsz48'
import IconSmartOutletFill1Wght400Grad0Opsz48 from '../components/SmartOutletFill1Wght400Grad0Opsz48'
import IconSmartOutletFill1Wght500Grad0Opsz48 from '../components/SmartOutletFill1Wght500Grad0Opsz48'
import IconSmartOutletFill1Wght600Grad0Opsz48 from '../components/SmartOutletFill1Wght600Grad0Opsz48'
import IconSmartOutletFill1Wght700Grad0Opsz48 from '../components/SmartOutletFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSmartOutlet = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSmartOutletFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSmartOutletFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSmartOutletFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSmartOutletFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSmartOutletFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSmartOutletFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSmartOutletFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSmartOutletFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSmartOutletFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSmartOutletFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSmartOutletFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSmartOutletFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSmartOutletFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSmartOutletFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
