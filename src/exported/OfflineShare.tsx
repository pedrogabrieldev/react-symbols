import IconOfflineShareFill0Wght100Grad0Opsz48 from '../components/OfflineShareFill0Wght100Grad0Opsz48'
import IconOfflineShareFill0Wght200Grad0Opsz48 from '../components/OfflineShareFill0Wght200Grad0Opsz48'
import IconOfflineShareFill0Wght300Grad0Opsz48 from '../components/OfflineShareFill0Wght300Grad0Opsz48'
import IconOfflineShareFill0Wght400Grad0Opsz48 from '../components/OfflineShareFill0Wght400Grad0Opsz48'
import IconOfflineShareFill0Wght500Grad0Opsz48 from '../components/OfflineShareFill0Wght500Grad0Opsz48'
import IconOfflineShareFill0Wght600Grad0Opsz48 from '../components/OfflineShareFill0Wght600Grad0Opsz48'
import IconOfflineShareFill0Wght700Grad0Opsz48 from '../components/OfflineShareFill0Wght700Grad0Opsz48'
import IconOfflineShareFill1Wght100Grad0Opsz48 from '../components/OfflineShareFill1Wght100Grad0Opsz48'
import IconOfflineShareFill1Wght200Grad0Opsz48 from '../components/OfflineShareFill1Wght200Grad0Opsz48'
import IconOfflineShareFill1Wght300Grad0Opsz48 from '../components/OfflineShareFill1Wght300Grad0Opsz48'
import IconOfflineShareFill1Wght400Grad0Opsz48 from '../components/OfflineShareFill1Wght400Grad0Opsz48'
import IconOfflineShareFill1Wght500Grad0Opsz48 from '../components/OfflineShareFill1Wght500Grad0Opsz48'
import IconOfflineShareFill1Wght600Grad0Opsz48 from '../components/OfflineShareFill1Wght600Grad0Opsz48'
import IconOfflineShareFill1Wght700Grad0Opsz48 from '../components/OfflineShareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOfflineShare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOfflineShareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOfflineShareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOfflineShareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOfflineShareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOfflineShareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOfflineShareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOfflineShareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOfflineShareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOfflineShareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOfflineShareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOfflineShareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOfflineShareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOfflineShareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOfflineShareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
