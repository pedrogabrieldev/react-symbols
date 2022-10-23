import IconCookingFill0Wght100Grad0Opsz48 from '../components/CookingFill0Wght100Grad0Opsz48'
import IconCookingFill0Wght200Grad0Opsz48 from '../components/CookingFill0Wght200Grad0Opsz48'
import IconCookingFill0Wght300Grad0Opsz48 from '../components/CookingFill0Wght300Grad0Opsz48'
import IconCookingFill0Wght400Grad0Opsz48 from '../components/CookingFill0Wght400Grad0Opsz48'
import IconCookingFill0Wght500Grad0Opsz48 from '../components/CookingFill0Wght500Grad0Opsz48'
import IconCookingFill0Wght600Grad0Opsz48 from '../components/CookingFill0Wght600Grad0Opsz48'
import IconCookingFill0Wght700Grad0Opsz48 from '../components/CookingFill0Wght700Grad0Opsz48'
import IconCookingFill1Wght100Grad0Opsz48 from '../components/CookingFill1Wght100Grad0Opsz48'
import IconCookingFill1Wght200Grad0Opsz48 from '../components/CookingFill1Wght200Grad0Opsz48'
import IconCookingFill1Wght300Grad0Opsz48 from '../components/CookingFill1Wght300Grad0Opsz48'
import IconCookingFill1Wght400Grad0Opsz48 from '../components/CookingFill1Wght400Grad0Opsz48'
import IconCookingFill1Wght500Grad0Opsz48 from '../components/CookingFill1Wght500Grad0Opsz48'
import IconCookingFill1Wght600Grad0Opsz48 from '../components/CookingFill1Wght600Grad0Opsz48'
import IconCookingFill1Wght700Grad0Opsz48 from '../components/CookingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCooking = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCookingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCookingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCookingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCookingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCookingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCookingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCookingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCookingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCookingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCookingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCookingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCookingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCookingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCookingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
