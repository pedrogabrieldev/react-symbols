import IconSportsBaseballFill0Wght100Grad0Opsz48 from '../components/SportsBaseballFill0Wght100Grad0Opsz48'
import IconSportsBaseballFill0Wght200Grad0Opsz48 from '../components/SportsBaseballFill0Wght200Grad0Opsz48'
import IconSportsBaseballFill0Wght300Grad0Opsz48 from '../components/SportsBaseballFill0Wght300Grad0Opsz48'
import IconSportsBaseballFill0Wght400Grad0Opsz48 from '../components/SportsBaseballFill0Wght400Grad0Opsz48'
import IconSportsBaseballFill0Wght500Grad0Opsz48 from '../components/SportsBaseballFill0Wght500Grad0Opsz48'
import IconSportsBaseballFill0Wght600Grad0Opsz48 from '../components/SportsBaseballFill0Wght600Grad0Opsz48'
import IconSportsBaseballFill0Wght700Grad0Opsz48 from '../components/SportsBaseballFill0Wght700Grad0Opsz48'
import IconSportsBaseballFill1Wght100Grad0Opsz48 from '../components/SportsBaseballFill1Wght100Grad0Opsz48'
import IconSportsBaseballFill1Wght200Grad0Opsz48 from '../components/SportsBaseballFill1Wght200Grad0Opsz48'
import IconSportsBaseballFill1Wght300Grad0Opsz48 from '../components/SportsBaseballFill1Wght300Grad0Opsz48'
import IconSportsBaseballFill1Wght400Grad0Opsz48 from '../components/SportsBaseballFill1Wght400Grad0Opsz48'
import IconSportsBaseballFill1Wght500Grad0Opsz48 from '../components/SportsBaseballFill1Wght500Grad0Opsz48'
import IconSportsBaseballFill1Wght600Grad0Opsz48 from '../components/SportsBaseballFill1Wght600Grad0Opsz48'
import IconSportsBaseballFill1Wght700Grad0Opsz48 from '../components/SportsBaseballFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsBaseball = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsBaseballFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsBaseballFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsBaseballFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsBaseballFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsBaseballFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsBaseballFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsBaseballFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsBaseballFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsBaseballFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsBaseballFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsBaseballFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsBaseballFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsBaseballFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsBaseballFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
