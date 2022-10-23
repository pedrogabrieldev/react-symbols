import IconSportsEsportsFill0Wght100Grad0Opsz48 from '../components/SportsEsportsFill0Wght100Grad0Opsz48'
import IconSportsEsportsFill0Wght200Grad0Opsz48 from '../components/SportsEsportsFill0Wght200Grad0Opsz48'
import IconSportsEsportsFill0Wght300Grad0Opsz48 from '../components/SportsEsportsFill0Wght300Grad0Opsz48'
import IconSportsEsportsFill0Wght400Grad0Opsz48 from '../components/SportsEsportsFill0Wght400Grad0Opsz48'
import IconSportsEsportsFill0Wght500Grad0Opsz48 from '../components/SportsEsportsFill0Wght500Grad0Opsz48'
import IconSportsEsportsFill0Wght600Grad0Opsz48 from '../components/SportsEsportsFill0Wght600Grad0Opsz48'
import IconSportsEsportsFill0Wght700Grad0Opsz48 from '../components/SportsEsportsFill0Wght700Grad0Opsz48'
import IconSportsEsportsFill1Wght100Grad0Opsz48 from '../components/SportsEsportsFill1Wght100Grad0Opsz48'
import IconSportsEsportsFill1Wght200Grad0Opsz48 from '../components/SportsEsportsFill1Wght200Grad0Opsz48'
import IconSportsEsportsFill1Wght300Grad0Opsz48 from '../components/SportsEsportsFill1Wght300Grad0Opsz48'
import IconSportsEsportsFill1Wght400Grad0Opsz48 from '../components/SportsEsportsFill1Wght400Grad0Opsz48'
import IconSportsEsportsFill1Wght500Grad0Opsz48 from '../components/SportsEsportsFill1Wght500Grad0Opsz48'
import IconSportsEsportsFill1Wght600Grad0Opsz48 from '../components/SportsEsportsFill1Wght600Grad0Opsz48'
import IconSportsEsportsFill1Wght700Grad0Opsz48 from '../components/SportsEsportsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsEsports = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsEsportsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsEsportsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsEsportsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsEsportsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsEsportsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsEsportsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsEsportsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsEsportsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsEsportsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsEsportsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsEsportsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsEsportsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsEsportsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsEsportsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
