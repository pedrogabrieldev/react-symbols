import IconSportsSoccerFill0Wght100Grad0Opsz48 from '../components/SportsSoccerFill0Wght100Grad0Opsz48'
import IconSportsSoccerFill0Wght200Grad0Opsz48 from '../components/SportsSoccerFill0Wght200Grad0Opsz48'
import IconSportsSoccerFill0Wght300Grad0Opsz48 from '../components/SportsSoccerFill0Wght300Grad0Opsz48'
import IconSportsSoccerFill0Wght400Grad0Opsz48 from '../components/SportsSoccerFill0Wght400Grad0Opsz48'
import IconSportsSoccerFill0Wght500Grad0Opsz48 from '../components/SportsSoccerFill0Wght500Grad0Opsz48'
import IconSportsSoccerFill0Wght600Grad0Opsz48 from '../components/SportsSoccerFill0Wght600Grad0Opsz48'
import IconSportsSoccerFill0Wght700Grad0Opsz48 from '../components/SportsSoccerFill0Wght700Grad0Opsz48'
import IconSportsSoccerFill1Wght100Grad0Opsz48 from '../components/SportsSoccerFill1Wght100Grad0Opsz48'
import IconSportsSoccerFill1Wght200Grad0Opsz48 from '../components/SportsSoccerFill1Wght200Grad0Opsz48'
import IconSportsSoccerFill1Wght300Grad0Opsz48 from '../components/SportsSoccerFill1Wght300Grad0Opsz48'
import IconSportsSoccerFill1Wght400Grad0Opsz48 from '../components/SportsSoccerFill1Wght400Grad0Opsz48'
import IconSportsSoccerFill1Wght500Grad0Opsz48 from '../components/SportsSoccerFill1Wght500Grad0Opsz48'
import IconSportsSoccerFill1Wght600Grad0Opsz48 from '../components/SportsSoccerFill1Wght600Grad0Opsz48'
import IconSportsSoccerFill1Wght700Grad0Opsz48 from '../components/SportsSoccerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsSoccer = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsSoccerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsSoccerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsSoccerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsSoccerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsSoccerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsSoccerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsSoccerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsSoccerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsSoccerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsSoccerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsSoccerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsSoccerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsSoccerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsSoccerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
