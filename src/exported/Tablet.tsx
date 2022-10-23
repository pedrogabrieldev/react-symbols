import IconTabletFill0Wght100Grad0Opsz48 from '../components/TabletFill0Wght100Grad0Opsz48'
import IconTabletFill0Wght200Grad0Opsz48 from '../components/TabletFill0Wght200Grad0Opsz48'
import IconTabletFill0Wght300Grad0Opsz48 from '../components/TabletFill0Wght300Grad0Opsz48'
import IconTabletFill0Wght400Grad0Opsz48 from '../components/TabletFill0Wght400Grad0Opsz48'
import IconTabletFill0Wght500Grad0Opsz48 from '../components/TabletFill0Wght500Grad0Opsz48'
import IconTabletFill0Wght600Grad0Opsz48 from '../components/TabletFill0Wght600Grad0Opsz48'
import IconTabletFill0Wght700Grad0Opsz48 from '../components/TabletFill0Wght700Grad0Opsz48'
import IconTabletFill1Wght100Grad0Opsz48 from '../components/TabletFill1Wght100Grad0Opsz48'
import IconTabletFill1Wght200Grad0Opsz48 from '../components/TabletFill1Wght200Grad0Opsz48'
import IconTabletFill1Wght300Grad0Opsz48 from '../components/TabletFill1Wght300Grad0Opsz48'
import IconTabletFill1Wght400Grad0Opsz48 from '../components/TabletFill1Wght400Grad0Opsz48'
import IconTabletFill1Wght500Grad0Opsz48 from '../components/TabletFill1Wght500Grad0Opsz48'
import IconTabletFill1Wght600Grad0Opsz48 from '../components/TabletFill1Wght600Grad0Opsz48'
import IconTabletFill1Wght700Grad0Opsz48 from '../components/TabletFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTablet = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTabletFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTabletFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTabletFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTabletFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTabletFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTabletFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTabletFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTabletFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTabletFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTabletFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTabletFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTabletFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTabletFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTabletFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
