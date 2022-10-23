import IconKitchenFill0Wght100Grad0Opsz48 from '../components/KitchenFill0Wght100Grad0Opsz48'
import IconKitchenFill0Wght200Grad0Opsz48 from '../components/KitchenFill0Wght200Grad0Opsz48'
import IconKitchenFill0Wght300Grad0Opsz48 from '../components/KitchenFill0Wght300Grad0Opsz48'
import IconKitchenFill0Wght400Grad0Opsz48 from '../components/KitchenFill0Wght400Grad0Opsz48'
import IconKitchenFill0Wght500Grad0Opsz48 from '../components/KitchenFill0Wght500Grad0Opsz48'
import IconKitchenFill0Wght600Grad0Opsz48 from '../components/KitchenFill0Wght600Grad0Opsz48'
import IconKitchenFill0Wght700Grad0Opsz48 from '../components/KitchenFill0Wght700Grad0Opsz48'
import IconKitchenFill1Wght100Grad0Opsz48 from '../components/KitchenFill1Wght100Grad0Opsz48'
import IconKitchenFill1Wght200Grad0Opsz48 from '../components/KitchenFill1Wght200Grad0Opsz48'
import IconKitchenFill1Wght300Grad0Opsz48 from '../components/KitchenFill1Wght300Grad0Opsz48'
import IconKitchenFill1Wght400Grad0Opsz48 from '../components/KitchenFill1Wght400Grad0Opsz48'
import IconKitchenFill1Wght500Grad0Opsz48 from '../components/KitchenFill1Wght500Grad0Opsz48'
import IconKitchenFill1Wght600Grad0Opsz48 from '../components/KitchenFill1Wght600Grad0Opsz48'
import IconKitchenFill1Wght700Grad0Opsz48 from '../components/KitchenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKitchen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKitchenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKitchenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKitchenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKitchenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKitchenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKitchenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKitchenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKitchenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKitchenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKitchenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKitchenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKitchenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKitchenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKitchenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
