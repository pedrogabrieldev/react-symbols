import IconSportsVolleyballFill0Wght100Grad0Opsz48 from '../components/SportsVolleyballFill0Wght100Grad0Opsz48'
import IconSportsVolleyballFill0Wght200Grad0Opsz48 from '../components/SportsVolleyballFill0Wght200Grad0Opsz48'
import IconSportsVolleyballFill0Wght300Grad0Opsz48 from '../components/SportsVolleyballFill0Wght300Grad0Opsz48'
import IconSportsVolleyballFill0Wght400Grad0Opsz48 from '../components/SportsVolleyballFill0Wght400Grad0Opsz48'
import IconSportsVolleyballFill0Wght500Grad0Opsz48 from '../components/SportsVolleyballFill0Wght500Grad0Opsz48'
import IconSportsVolleyballFill0Wght600Grad0Opsz48 from '../components/SportsVolleyballFill0Wght600Grad0Opsz48'
import IconSportsVolleyballFill0Wght700Grad0Opsz48 from '../components/SportsVolleyballFill0Wght700Grad0Opsz48'
import IconSportsVolleyballFill1Wght100Grad0Opsz48 from '../components/SportsVolleyballFill1Wght100Grad0Opsz48'
import IconSportsVolleyballFill1Wght200Grad0Opsz48 from '../components/SportsVolleyballFill1Wght200Grad0Opsz48'
import IconSportsVolleyballFill1Wght300Grad0Opsz48 from '../components/SportsVolleyballFill1Wght300Grad0Opsz48'
import IconSportsVolleyballFill1Wght400Grad0Opsz48 from '../components/SportsVolleyballFill1Wght400Grad0Opsz48'
import IconSportsVolleyballFill1Wght500Grad0Opsz48 from '../components/SportsVolleyballFill1Wght500Grad0Opsz48'
import IconSportsVolleyballFill1Wght600Grad0Opsz48 from '../components/SportsVolleyballFill1Wght600Grad0Opsz48'
import IconSportsVolleyballFill1Wght700Grad0Opsz48 from '../components/SportsVolleyballFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsVolleyball = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsVolleyballFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsVolleyballFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsVolleyballFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsVolleyballFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsVolleyballFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsVolleyballFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsVolleyballFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsVolleyballFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsVolleyballFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsVolleyballFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsVolleyballFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsVolleyballFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsVolleyballFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsVolleyballFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
