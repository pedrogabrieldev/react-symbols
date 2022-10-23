import IconSportsGolfFill0Wght100Grad0Opsz48 from '../components/SportsGolfFill0Wght100Grad0Opsz48'
import IconSportsGolfFill0Wght200Grad0Opsz48 from '../components/SportsGolfFill0Wght200Grad0Opsz48'
import IconSportsGolfFill0Wght300Grad0Opsz48 from '../components/SportsGolfFill0Wght300Grad0Opsz48'
import IconSportsGolfFill0Wght400Grad0Opsz48 from '../components/SportsGolfFill0Wght400Grad0Opsz48'
import IconSportsGolfFill0Wght500Grad0Opsz48 from '../components/SportsGolfFill0Wght500Grad0Opsz48'
import IconSportsGolfFill0Wght600Grad0Opsz48 from '../components/SportsGolfFill0Wght600Grad0Opsz48'
import IconSportsGolfFill0Wght700Grad0Opsz48 from '../components/SportsGolfFill0Wght700Grad0Opsz48'
import IconSportsGolfFill1Wght100Grad0Opsz48 from '../components/SportsGolfFill1Wght100Grad0Opsz48'
import IconSportsGolfFill1Wght200Grad0Opsz48 from '../components/SportsGolfFill1Wght200Grad0Opsz48'
import IconSportsGolfFill1Wght300Grad0Opsz48 from '../components/SportsGolfFill1Wght300Grad0Opsz48'
import IconSportsGolfFill1Wght400Grad0Opsz48 from '../components/SportsGolfFill1Wght400Grad0Opsz48'
import IconSportsGolfFill1Wght500Grad0Opsz48 from '../components/SportsGolfFill1Wght500Grad0Opsz48'
import IconSportsGolfFill1Wght600Grad0Opsz48 from '../components/SportsGolfFill1Wght600Grad0Opsz48'
import IconSportsGolfFill1Wght700Grad0Opsz48 from '../components/SportsGolfFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsGolf = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsGolfFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsGolfFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsGolfFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsGolfFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsGolfFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsGolfFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsGolfFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsGolfFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsGolfFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsGolfFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsGolfFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsGolfFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsGolfFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsGolfFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
