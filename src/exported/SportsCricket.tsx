import IconSportsCricketFill0Wght100Grad0Opsz48 from '../components/SportsCricketFill0Wght100Grad0Opsz48'
import IconSportsCricketFill0Wght200Grad0Opsz48 from '../components/SportsCricketFill0Wght200Grad0Opsz48'
import IconSportsCricketFill0Wght300Grad0Opsz48 from '../components/SportsCricketFill0Wght300Grad0Opsz48'
import IconSportsCricketFill0Wght400Grad0Opsz48 from '../components/SportsCricketFill0Wght400Grad0Opsz48'
import IconSportsCricketFill0Wght500Grad0Opsz48 from '../components/SportsCricketFill0Wght500Grad0Opsz48'
import IconSportsCricketFill0Wght600Grad0Opsz48 from '../components/SportsCricketFill0Wght600Grad0Opsz48'
import IconSportsCricketFill0Wght700Grad0Opsz48 from '../components/SportsCricketFill0Wght700Grad0Opsz48'
import IconSportsCricketFill1Wght100Grad0Opsz48 from '../components/SportsCricketFill1Wght100Grad0Opsz48'
import IconSportsCricketFill1Wght200Grad0Opsz48 from '../components/SportsCricketFill1Wght200Grad0Opsz48'
import IconSportsCricketFill1Wght300Grad0Opsz48 from '../components/SportsCricketFill1Wght300Grad0Opsz48'
import IconSportsCricketFill1Wght400Grad0Opsz48 from '../components/SportsCricketFill1Wght400Grad0Opsz48'
import IconSportsCricketFill1Wght500Grad0Opsz48 from '../components/SportsCricketFill1Wght500Grad0Opsz48'
import IconSportsCricketFill1Wght600Grad0Opsz48 from '../components/SportsCricketFill1Wght600Grad0Opsz48'
import IconSportsCricketFill1Wght700Grad0Opsz48 from '../components/SportsCricketFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsCricket = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsCricketFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsCricketFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsCricketFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsCricketFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsCricketFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsCricketFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsCricketFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsCricketFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsCricketFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsCricketFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsCricketFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsCricketFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsCricketFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsCricketFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
