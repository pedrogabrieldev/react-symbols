import IconSportsHandballFill0Wght100Grad0Opsz48 from '../components/SportsHandballFill0Wght100Grad0Opsz48'
import IconSportsHandballFill0Wght200Grad0Opsz48 from '../components/SportsHandballFill0Wght200Grad0Opsz48'
import IconSportsHandballFill0Wght300Grad0Opsz48 from '../components/SportsHandballFill0Wght300Grad0Opsz48'
import IconSportsHandballFill0Wght400Grad0Opsz48 from '../components/SportsHandballFill0Wght400Grad0Opsz48'
import IconSportsHandballFill0Wght500Grad0Opsz48 from '../components/SportsHandballFill0Wght500Grad0Opsz48'
import IconSportsHandballFill0Wght600Grad0Opsz48 from '../components/SportsHandballFill0Wght600Grad0Opsz48'
import IconSportsHandballFill0Wght700Grad0Opsz48 from '../components/SportsHandballFill0Wght700Grad0Opsz48'
import IconSportsHandballFill1Wght100Grad0Opsz48 from '../components/SportsHandballFill1Wght100Grad0Opsz48'
import IconSportsHandballFill1Wght200Grad0Opsz48 from '../components/SportsHandballFill1Wght200Grad0Opsz48'
import IconSportsHandballFill1Wght300Grad0Opsz48 from '../components/SportsHandballFill1Wght300Grad0Opsz48'
import IconSportsHandballFill1Wght400Grad0Opsz48 from '../components/SportsHandballFill1Wght400Grad0Opsz48'
import IconSportsHandballFill1Wght500Grad0Opsz48 from '../components/SportsHandballFill1Wght500Grad0Opsz48'
import IconSportsHandballFill1Wght600Grad0Opsz48 from '../components/SportsHandballFill1Wght600Grad0Opsz48'
import IconSportsHandballFill1Wght700Grad0Opsz48 from '../components/SportsHandballFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsHandball = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsHandballFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsHandballFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsHandballFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsHandballFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsHandballFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsHandballFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsHandballFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsHandballFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsHandballFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsHandballFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsHandballFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsHandballFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsHandballFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsHandballFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
