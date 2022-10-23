import IconSoupKitchenFill0Wght100Grad0Opsz48 from '../components/SoupKitchenFill0Wght100Grad0Opsz48'
import IconSoupKitchenFill0Wght200Grad0Opsz48 from '../components/SoupKitchenFill0Wght200Grad0Opsz48'
import IconSoupKitchenFill0Wght300Grad0Opsz48 from '../components/SoupKitchenFill0Wght300Grad0Opsz48'
import IconSoupKitchenFill0Wght400Grad0Opsz48 from '../components/SoupKitchenFill0Wght400Grad0Opsz48'
import IconSoupKitchenFill0Wght500Grad0Opsz48 from '../components/SoupKitchenFill0Wght500Grad0Opsz48'
import IconSoupKitchenFill0Wght600Grad0Opsz48 from '../components/SoupKitchenFill0Wght600Grad0Opsz48'
import IconSoupKitchenFill0Wght700Grad0Opsz48 from '../components/SoupKitchenFill0Wght700Grad0Opsz48'
import IconSoupKitchenFill1Wght100Grad0Opsz48 from '../components/SoupKitchenFill1Wght100Grad0Opsz48'
import IconSoupKitchenFill1Wght200Grad0Opsz48 from '../components/SoupKitchenFill1Wght200Grad0Opsz48'
import IconSoupKitchenFill1Wght300Grad0Opsz48 from '../components/SoupKitchenFill1Wght300Grad0Opsz48'
import IconSoupKitchenFill1Wght400Grad0Opsz48 from '../components/SoupKitchenFill1Wght400Grad0Opsz48'
import IconSoupKitchenFill1Wght500Grad0Opsz48 from '../components/SoupKitchenFill1Wght500Grad0Opsz48'
import IconSoupKitchenFill1Wght600Grad0Opsz48 from '../components/SoupKitchenFill1Wght600Grad0Opsz48'
import IconSoupKitchenFill1Wght700Grad0Opsz48 from '../components/SoupKitchenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSoupKitchen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSoupKitchenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSoupKitchenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSoupKitchenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSoupKitchenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSoupKitchenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSoupKitchenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSoupKitchenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSoupKitchenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSoupKitchenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSoupKitchenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSoupKitchenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSoupKitchenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSoupKitchenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSoupKitchenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
