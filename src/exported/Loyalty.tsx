import IconLoyaltyFill0Wght100Grad0Opsz48 from '../components/LoyaltyFill0Wght100Grad0Opsz48'
import IconLoyaltyFill0Wght200Grad0Opsz48 from '../components/LoyaltyFill0Wght200Grad0Opsz48'
import IconLoyaltyFill0Wght300Grad0Opsz48 from '../components/LoyaltyFill0Wght300Grad0Opsz48'
import IconLoyaltyFill0Wght400Grad0Opsz48 from '../components/LoyaltyFill0Wght400Grad0Opsz48'
import IconLoyaltyFill0Wght500Grad0Opsz48 from '../components/LoyaltyFill0Wght500Grad0Opsz48'
import IconLoyaltyFill0Wght600Grad0Opsz48 from '../components/LoyaltyFill0Wght600Grad0Opsz48'
import IconLoyaltyFill0Wght700Grad0Opsz48 from '../components/LoyaltyFill0Wght700Grad0Opsz48'
import IconLoyaltyFill1Wght100Grad0Opsz48 from '../components/LoyaltyFill1Wght100Grad0Opsz48'
import IconLoyaltyFill1Wght200Grad0Opsz48 from '../components/LoyaltyFill1Wght200Grad0Opsz48'
import IconLoyaltyFill1Wght300Grad0Opsz48 from '../components/LoyaltyFill1Wght300Grad0Opsz48'
import IconLoyaltyFill1Wght400Grad0Opsz48 from '../components/LoyaltyFill1Wght400Grad0Opsz48'
import IconLoyaltyFill1Wght500Grad0Opsz48 from '../components/LoyaltyFill1Wght500Grad0Opsz48'
import IconLoyaltyFill1Wght600Grad0Opsz48 from '../components/LoyaltyFill1Wght600Grad0Opsz48'
import IconLoyaltyFill1Wght700Grad0Opsz48 from '../components/LoyaltyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLoyalty = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLoyaltyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLoyaltyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLoyaltyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLoyaltyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLoyaltyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLoyaltyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLoyaltyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLoyaltyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLoyaltyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLoyaltyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLoyaltyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLoyaltyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLoyaltyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLoyaltyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
