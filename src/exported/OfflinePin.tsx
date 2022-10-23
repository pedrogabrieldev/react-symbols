import IconOfflinePinFill0Wght100Grad0Opsz48 from '../components/OfflinePinFill0Wght100Grad0Opsz48'
import IconOfflinePinFill0Wght200Grad0Opsz48 from '../components/OfflinePinFill0Wght200Grad0Opsz48'
import IconOfflinePinFill0Wght300Grad0Opsz48 from '../components/OfflinePinFill0Wght300Grad0Opsz48'
import IconOfflinePinFill0Wght400Grad0Opsz48 from '../components/OfflinePinFill0Wght400Grad0Opsz48'
import IconOfflinePinFill0Wght500Grad0Opsz48 from '../components/OfflinePinFill0Wght500Grad0Opsz48'
import IconOfflinePinFill0Wght600Grad0Opsz48 from '../components/OfflinePinFill0Wght600Grad0Opsz48'
import IconOfflinePinFill0Wght700Grad0Opsz48 from '../components/OfflinePinFill0Wght700Grad0Opsz48'
import IconOfflinePinFill1Wght100Grad0Opsz48 from '../components/OfflinePinFill1Wght100Grad0Opsz48'
import IconOfflinePinFill1Wght200Grad0Opsz48 from '../components/OfflinePinFill1Wght200Grad0Opsz48'
import IconOfflinePinFill1Wght300Grad0Opsz48 from '../components/OfflinePinFill1Wght300Grad0Opsz48'
import IconOfflinePinFill1Wght400Grad0Opsz48 from '../components/OfflinePinFill1Wght400Grad0Opsz48'
import IconOfflinePinFill1Wght500Grad0Opsz48 from '../components/OfflinePinFill1Wght500Grad0Opsz48'
import IconOfflinePinFill1Wght600Grad0Opsz48 from '../components/OfflinePinFill1Wght600Grad0Opsz48'
import IconOfflinePinFill1Wght700Grad0Opsz48 from '../components/OfflinePinFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOfflinePin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOfflinePinFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOfflinePinFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOfflinePinFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOfflinePinFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOfflinePinFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOfflinePinFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOfflinePinFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOfflinePinFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOfflinePinFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOfflinePinFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOfflinePinFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOfflinePinFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOfflinePinFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOfflinePinFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
