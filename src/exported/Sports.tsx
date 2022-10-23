import IconSportsFill0Wght100Grad0Opsz48 from '../components/SportsFill0Wght100Grad0Opsz48'
import IconSportsFill0Wght200Grad0Opsz48 from '../components/SportsFill0Wght200Grad0Opsz48'
import IconSportsFill0Wght300Grad0Opsz48 from '../components/SportsFill0Wght300Grad0Opsz48'
import IconSportsFill0Wght400Grad0Opsz48 from '../components/SportsFill0Wght400Grad0Opsz48'
import IconSportsFill0Wght500Grad0Opsz48 from '../components/SportsFill0Wght500Grad0Opsz48'
import IconSportsFill0Wght600Grad0Opsz48 from '../components/SportsFill0Wght600Grad0Opsz48'
import IconSportsFill0Wght700Grad0Opsz48 from '../components/SportsFill0Wght700Grad0Opsz48'
import IconSportsFill1Wght100Grad0Opsz48 from '../components/SportsFill1Wght100Grad0Opsz48'
import IconSportsFill1Wght200Grad0Opsz48 from '../components/SportsFill1Wght200Grad0Opsz48'
import IconSportsFill1Wght300Grad0Opsz48 from '../components/SportsFill1Wght300Grad0Opsz48'
import IconSportsFill1Wght400Grad0Opsz48 from '../components/SportsFill1Wght400Grad0Opsz48'
import IconSportsFill1Wght500Grad0Opsz48 from '../components/SportsFill1Wght500Grad0Opsz48'
import IconSportsFill1Wght600Grad0Opsz48 from '../components/SportsFill1Wght600Grad0Opsz48'
import IconSportsFill1Wght700Grad0Opsz48 from '../components/SportsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSports = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
