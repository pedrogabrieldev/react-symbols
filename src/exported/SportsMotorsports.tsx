import IconSportsMotorsportsFill0Wght100Grad0Opsz48 from '../components/SportsMotorsportsFill0Wght100Grad0Opsz48'
import IconSportsMotorsportsFill0Wght200Grad0Opsz48 from '../components/SportsMotorsportsFill0Wght200Grad0Opsz48'
import IconSportsMotorsportsFill0Wght300Grad0Opsz48 from '../components/SportsMotorsportsFill0Wght300Grad0Opsz48'
import IconSportsMotorsportsFill0Wght400Grad0Opsz48 from '../components/SportsMotorsportsFill0Wght400Grad0Opsz48'
import IconSportsMotorsportsFill0Wght500Grad0Opsz48 from '../components/SportsMotorsportsFill0Wght500Grad0Opsz48'
import IconSportsMotorsportsFill0Wght600Grad0Opsz48 from '../components/SportsMotorsportsFill0Wght600Grad0Opsz48'
import IconSportsMotorsportsFill0Wght700Grad0Opsz48 from '../components/SportsMotorsportsFill0Wght700Grad0Opsz48'
import IconSportsMotorsportsFill1Wght100Grad0Opsz48 from '../components/SportsMotorsportsFill1Wght100Grad0Opsz48'
import IconSportsMotorsportsFill1Wght200Grad0Opsz48 from '../components/SportsMotorsportsFill1Wght200Grad0Opsz48'
import IconSportsMotorsportsFill1Wght300Grad0Opsz48 from '../components/SportsMotorsportsFill1Wght300Grad0Opsz48'
import IconSportsMotorsportsFill1Wght400Grad0Opsz48 from '../components/SportsMotorsportsFill1Wght400Grad0Opsz48'
import IconSportsMotorsportsFill1Wght500Grad0Opsz48 from '../components/SportsMotorsportsFill1Wght500Grad0Opsz48'
import IconSportsMotorsportsFill1Wght600Grad0Opsz48 from '../components/SportsMotorsportsFill1Wght600Grad0Opsz48'
import IconSportsMotorsportsFill1Wght700Grad0Opsz48 from '../components/SportsMotorsportsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsMotorsports = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsMotorsportsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsMotorsportsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsMotorsportsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsMotorsportsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsMotorsportsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsMotorsportsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsMotorsportsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsMotorsportsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsMotorsportsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsMotorsportsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsMotorsportsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsMotorsportsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsMotorsportsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsMotorsportsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
