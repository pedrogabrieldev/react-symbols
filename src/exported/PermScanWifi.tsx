import IconPermScanWifiFill0Wght100Grad0Opsz48 from '../components/PermScanWifiFill0Wght100Grad0Opsz48'
import IconPermScanWifiFill0Wght200Grad0Opsz48 from '../components/PermScanWifiFill0Wght200Grad0Opsz48'
import IconPermScanWifiFill0Wght300Grad0Opsz48 from '../components/PermScanWifiFill0Wght300Grad0Opsz48'
import IconPermScanWifiFill0Wght400Grad0Opsz48 from '../components/PermScanWifiFill0Wght400Grad0Opsz48'
import IconPermScanWifiFill0Wght500Grad0Opsz48 from '../components/PermScanWifiFill0Wght500Grad0Opsz48'
import IconPermScanWifiFill0Wght600Grad0Opsz48 from '../components/PermScanWifiFill0Wght600Grad0Opsz48'
import IconPermScanWifiFill0Wght700Grad0Opsz48 from '../components/PermScanWifiFill0Wght700Grad0Opsz48'
import IconPermScanWifiFill1Wght100Grad0Opsz48 from '../components/PermScanWifiFill1Wght100Grad0Opsz48'
import IconPermScanWifiFill1Wght200Grad0Opsz48 from '../components/PermScanWifiFill1Wght200Grad0Opsz48'
import IconPermScanWifiFill1Wght300Grad0Opsz48 from '../components/PermScanWifiFill1Wght300Grad0Opsz48'
import IconPermScanWifiFill1Wght400Grad0Opsz48 from '../components/PermScanWifiFill1Wght400Grad0Opsz48'
import IconPermScanWifiFill1Wght500Grad0Opsz48 from '../components/PermScanWifiFill1Wght500Grad0Opsz48'
import IconPermScanWifiFill1Wght600Grad0Opsz48 from '../components/PermScanWifiFill1Wght600Grad0Opsz48'
import IconPermScanWifiFill1Wght700Grad0Opsz48 from '../components/PermScanWifiFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPermScanWifi = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPermScanWifiFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPermScanWifiFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPermScanWifiFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPermScanWifiFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPermScanWifiFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPermScanWifiFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPermScanWifiFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPermScanWifiFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPermScanWifiFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPermScanWifiFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPermScanWifiFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPermScanWifiFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPermScanWifiFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPermScanWifiFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
