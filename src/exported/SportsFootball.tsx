import IconSportsFootballFill0Wght100Grad0Opsz48 from '../components/SportsFootballFill0Wght100Grad0Opsz48'
import IconSportsFootballFill0Wght200Grad0Opsz48 from '../components/SportsFootballFill0Wght200Grad0Opsz48'
import IconSportsFootballFill0Wght300Grad0Opsz48 from '../components/SportsFootballFill0Wght300Grad0Opsz48'
import IconSportsFootballFill0Wght400Grad0Opsz48 from '../components/SportsFootballFill0Wght400Grad0Opsz48'
import IconSportsFootballFill0Wght500Grad0Opsz48 from '../components/SportsFootballFill0Wght500Grad0Opsz48'
import IconSportsFootballFill0Wght600Grad0Opsz48 from '../components/SportsFootballFill0Wght600Grad0Opsz48'
import IconSportsFootballFill0Wght700Grad0Opsz48 from '../components/SportsFootballFill0Wght700Grad0Opsz48'
import IconSportsFootballFill1Wght100Grad0Opsz48 from '../components/SportsFootballFill1Wght100Grad0Opsz48'
import IconSportsFootballFill1Wght200Grad0Opsz48 from '../components/SportsFootballFill1Wght200Grad0Opsz48'
import IconSportsFootballFill1Wght300Grad0Opsz48 from '../components/SportsFootballFill1Wght300Grad0Opsz48'
import IconSportsFootballFill1Wght400Grad0Opsz48 from '../components/SportsFootballFill1Wght400Grad0Opsz48'
import IconSportsFootballFill1Wght500Grad0Opsz48 from '../components/SportsFootballFill1Wght500Grad0Opsz48'
import IconSportsFootballFill1Wght600Grad0Opsz48 from '../components/SportsFootballFill1Wght600Grad0Opsz48'
import IconSportsFootballFill1Wght700Grad0Opsz48 from '../components/SportsFootballFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsFootball = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsFootballFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsFootballFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsFootballFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsFootballFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsFootballFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsFootballFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsFootballFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsFootballFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsFootballFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsFootballFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsFootballFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsFootballFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsFootballFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsFootballFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
