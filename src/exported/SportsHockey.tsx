import IconSportsHockeyFill0Wght100Grad0Opsz48 from '../components/SportsHockeyFill0Wght100Grad0Opsz48'
import IconSportsHockeyFill0Wght200Grad0Opsz48 from '../components/SportsHockeyFill0Wght200Grad0Opsz48'
import IconSportsHockeyFill0Wght300Grad0Opsz48 from '../components/SportsHockeyFill0Wght300Grad0Opsz48'
import IconSportsHockeyFill0Wght400Grad0Opsz48 from '../components/SportsHockeyFill0Wght400Grad0Opsz48'
import IconSportsHockeyFill0Wght500Grad0Opsz48 from '../components/SportsHockeyFill0Wght500Grad0Opsz48'
import IconSportsHockeyFill0Wght600Grad0Opsz48 from '../components/SportsHockeyFill0Wght600Grad0Opsz48'
import IconSportsHockeyFill0Wght700Grad0Opsz48 from '../components/SportsHockeyFill0Wght700Grad0Opsz48'
import IconSportsHockeyFill1Wght100Grad0Opsz48 from '../components/SportsHockeyFill1Wght100Grad0Opsz48'
import IconSportsHockeyFill1Wght200Grad0Opsz48 from '../components/SportsHockeyFill1Wght200Grad0Opsz48'
import IconSportsHockeyFill1Wght300Grad0Opsz48 from '../components/SportsHockeyFill1Wght300Grad0Opsz48'
import IconSportsHockeyFill1Wght400Grad0Opsz48 from '../components/SportsHockeyFill1Wght400Grad0Opsz48'
import IconSportsHockeyFill1Wght500Grad0Opsz48 from '../components/SportsHockeyFill1Wght500Grad0Opsz48'
import IconSportsHockeyFill1Wght600Grad0Opsz48 from '../components/SportsHockeyFill1Wght600Grad0Opsz48'
import IconSportsHockeyFill1Wght700Grad0Opsz48 from '../components/SportsHockeyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsHockey = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsHockeyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsHockeyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsHockeyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsHockeyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsHockeyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsHockeyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsHockeyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsHockeyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsHockeyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsHockeyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsHockeyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsHockeyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsHockeyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsHockeyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
