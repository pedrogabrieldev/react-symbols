import IconTabletMacFill0Wght100Grad0Opsz48 from '../components/TabletMacFill0Wght100Grad0Opsz48'
import IconTabletMacFill0Wght200Grad0Opsz48 from '../components/TabletMacFill0Wght200Grad0Opsz48'
import IconTabletMacFill0Wght300Grad0Opsz48 from '../components/TabletMacFill0Wght300Grad0Opsz48'
import IconTabletMacFill0Wght400Grad0Opsz48 from '../components/TabletMacFill0Wght400Grad0Opsz48'
import IconTabletMacFill0Wght500Grad0Opsz48 from '../components/TabletMacFill0Wght500Grad0Opsz48'
import IconTabletMacFill0Wght600Grad0Opsz48 from '../components/TabletMacFill0Wght600Grad0Opsz48'
import IconTabletMacFill0Wght700Grad0Opsz48 from '../components/TabletMacFill0Wght700Grad0Opsz48'
import IconTabletMacFill1Wght100Grad0Opsz48 from '../components/TabletMacFill1Wght100Grad0Opsz48'
import IconTabletMacFill1Wght200Grad0Opsz48 from '../components/TabletMacFill1Wght200Grad0Opsz48'
import IconTabletMacFill1Wght300Grad0Opsz48 from '../components/TabletMacFill1Wght300Grad0Opsz48'
import IconTabletMacFill1Wght400Grad0Opsz48 from '../components/TabletMacFill1Wght400Grad0Opsz48'
import IconTabletMacFill1Wght500Grad0Opsz48 from '../components/TabletMacFill1Wght500Grad0Opsz48'
import IconTabletMacFill1Wght600Grad0Opsz48 from '../components/TabletMacFill1Wght600Grad0Opsz48'
import IconTabletMacFill1Wght700Grad0Opsz48 from '../components/TabletMacFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTabletMac = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTabletMacFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTabletMacFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTabletMacFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTabletMacFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTabletMacFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTabletMacFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTabletMacFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTabletMacFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTabletMacFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTabletMacFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTabletMacFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTabletMacFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTabletMacFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTabletMacFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
