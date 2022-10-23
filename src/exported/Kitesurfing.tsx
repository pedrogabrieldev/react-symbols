import IconKitesurfingFill0Wght100Grad0Opsz48 from '../components/KitesurfingFill0Wght100Grad0Opsz48'
import IconKitesurfingFill0Wght200Grad0Opsz48 from '../components/KitesurfingFill0Wght200Grad0Opsz48'
import IconKitesurfingFill0Wght300Grad0Opsz48 from '../components/KitesurfingFill0Wght300Grad0Opsz48'
import IconKitesurfingFill0Wght400Grad0Opsz48 from '../components/KitesurfingFill0Wght400Grad0Opsz48'
import IconKitesurfingFill0Wght500Grad0Opsz48 from '../components/KitesurfingFill0Wght500Grad0Opsz48'
import IconKitesurfingFill0Wght600Grad0Opsz48 from '../components/KitesurfingFill0Wght600Grad0Opsz48'
import IconKitesurfingFill0Wght700Grad0Opsz48 from '../components/KitesurfingFill0Wght700Grad0Opsz48'
import IconKitesurfingFill1Wght100Grad0Opsz48 from '../components/KitesurfingFill1Wght100Grad0Opsz48'
import IconKitesurfingFill1Wght200Grad0Opsz48 from '../components/KitesurfingFill1Wght200Grad0Opsz48'
import IconKitesurfingFill1Wght300Grad0Opsz48 from '../components/KitesurfingFill1Wght300Grad0Opsz48'
import IconKitesurfingFill1Wght400Grad0Opsz48 from '../components/KitesurfingFill1Wght400Grad0Opsz48'
import IconKitesurfingFill1Wght500Grad0Opsz48 from '../components/KitesurfingFill1Wght500Grad0Opsz48'
import IconKitesurfingFill1Wght600Grad0Opsz48 from '../components/KitesurfingFill1Wght600Grad0Opsz48'
import IconKitesurfingFill1Wght700Grad0Opsz48 from '../components/KitesurfingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKitesurfing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKitesurfingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKitesurfingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKitesurfingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKitesurfingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKitesurfingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKitesurfingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKitesurfingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKitesurfingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKitesurfingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKitesurfingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKitesurfingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKitesurfingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKitesurfingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKitesurfingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
