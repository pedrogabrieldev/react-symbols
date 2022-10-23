import IconSportsBasketballFill0Wght100Grad0Opsz48 from '../components/SportsBasketballFill0Wght100Grad0Opsz48'
import IconSportsBasketballFill0Wght200Grad0Opsz48 from '../components/SportsBasketballFill0Wght200Grad0Opsz48'
import IconSportsBasketballFill0Wght300Grad0Opsz48 from '../components/SportsBasketballFill0Wght300Grad0Opsz48'
import IconSportsBasketballFill0Wght400Grad0Opsz48 from '../components/SportsBasketballFill0Wght400Grad0Opsz48'
import IconSportsBasketballFill0Wght500Grad0Opsz48 from '../components/SportsBasketballFill0Wght500Grad0Opsz48'
import IconSportsBasketballFill0Wght600Grad0Opsz48 from '../components/SportsBasketballFill0Wght600Grad0Opsz48'
import IconSportsBasketballFill0Wght700Grad0Opsz48 from '../components/SportsBasketballFill0Wght700Grad0Opsz48'
import IconSportsBasketballFill1Wght100Grad0Opsz48 from '../components/SportsBasketballFill1Wght100Grad0Opsz48'
import IconSportsBasketballFill1Wght200Grad0Opsz48 from '../components/SportsBasketballFill1Wght200Grad0Opsz48'
import IconSportsBasketballFill1Wght300Grad0Opsz48 from '../components/SportsBasketballFill1Wght300Grad0Opsz48'
import IconSportsBasketballFill1Wght400Grad0Opsz48 from '../components/SportsBasketballFill1Wght400Grad0Opsz48'
import IconSportsBasketballFill1Wght500Grad0Opsz48 from '../components/SportsBasketballFill1Wght500Grad0Opsz48'
import IconSportsBasketballFill1Wght600Grad0Opsz48 from '../components/SportsBasketballFill1Wght600Grad0Opsz48'
import IconSportsBasketballFill1Wght700Grad0Opsz48 from '../components/SportsBasketballFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsBasketball = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsBasketballFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsBasketballFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsBasketballFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsBasketballFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsBasketballFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsBasketballFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsBasketballFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsBasketballFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsBasketballFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsBasketballFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsBasketballFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsBasketballFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsBasketballFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsBasketballFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
