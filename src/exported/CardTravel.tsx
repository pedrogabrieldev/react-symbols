import IconCardTravelFill0Wght100Grad0Opsz48 from '../components/CardTravelFill0Wght100Grad0Opsz48'
import IconCardTravelFill0Wght200Grad0Opsz48 from '../components/CardTravelFill0Wght200Grad0Opsz48'
import IconCardTravelFill0Wght300Grad0Opsz48 from '../components/CardTravelFill0Wght300Grad0Opsz48'
import IconCardTravelFill0Wght400Grad0Opsz48 from '../components/CardTravelFill0Wght400Grad0Opsz48'
import IconCardTravelFill0Wght500Grad0Opsz48 from '../components/CardTravelFill0Wght500Grad0Opsz48'
import IconCardTravelFill0Wght600Grad0Opsz48 from '../components/CardTravelFill0Wght600Grad0Opsz48'
import IconCardTravelFill0Wght700Grad0Opsz48 from '../components/CardTravelFill0Wght700Grad0Opsz48'
import IconCardTravelFill1Wght100Grad0Opsz48 from '../components/CardTravelFill1Wght100Grad0Opsz48'
import IconCardTravelFill1Wght200Grad0Opsz48 from '../components/CardTravelFill1Wght200Grad0Opsz48'
import IconCardTravelFill1Wght300Grad0Opsz48 from '../components/CardTravelFill1Wght300Grad0Opsz48'
import IconCardTravelFill1Wght400Grad0Opsz48 from '../components/CardTravelFill1Wght400Grad0Opsz48'
import IconCardTravelFill1Wght500Grad0Opsz48 from '../components/CardTravelFill1Wght500Grad0Opsz48'
import IconCardTravelFill1Wght600Grad0Opsz48 from '../components/CardTravelFill1Wght600Grad0Opsz48'
import IconCardTravelFill1Wght700Grad0Opsz48 from '../components/CardTravelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCardTravel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCardTravelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCardTravelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCardTravelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCardTravelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCardTravelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCardTravelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCardTravelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCardTravelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCardTravelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCardTravelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCardTravelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCardTravelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCardTravelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCardTravelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
