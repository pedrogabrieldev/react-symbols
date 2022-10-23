import IconModeOfTravelFill0Wght100Grad0Opsz48 from '../components/ModeOfTravelFill0Wght100Grad0Opsz48'
import IconModeOfTravelFill0Wght200Grad0Opsz48 from '../components/ModeOfTravelFill0Wght200Grad0Opsz48'
import IconModeOfTravelFill0Wght300Grad0Opsz48 from '../components/ModeOfTravelFill0Wght300Grad0Opsz48'
import IconModeOfTravelFill0Wght400Grad0Opsz48 from '../components/ModeOfTravelFill0Wght400Grad0Opsz48'
import IconModeOfTravelFill0Wght500Grad0Opsz48 from '../components/ModeOfTravelFill0Wght500Grad0Opsz48'
import IconModeOfTravelFill0Wght600Grad0Opsz48 from '../components/ModeOfTravelFill0Wght600Grad0Opsz48'
import IconModeOfTravelFill0Wght700Grad0Opsz48 from '../components/ModeOfTravelFill0Wght700Grad0Opsz48'
import IconModeOfTravelFill1Wght100Grad0Opsz48 from '../components/ModeOfTravelFill1Wght100Grad0Opsz48'
import IconModeOfTravelFill1Wght200Grad0Opsz48 from '../components/ModeOfTravelFill1Wght200Grad0Opsz48'
import IconModeOfTravelFill1Wght300Grad0Opsz48 from '../components/ModeOfTravelFill1Wght300Grad0Opsz48'
import IconModeOfTravelFill1Wght400Grad0Opsz48 from '../components/ModeOfTravelFill1Wght400Grad0Opsz48'
import IconModeOfTravelFill1Wght500Grad0Opsz48 from '../components/ModeOfTravelFill1Wght500Grad0Opsz48'
import IconModeOfTravelFill1Wght600Grad0Opsz48 from '../components/ModeOfTravelFill1Wght600Grad0Opsz48'
import IconModeOfTravelFill1Wght700Grad0Opsz48 from '../components/ModeOfTravelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeOfTravel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeOfTravelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeOfTravelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeOfTravelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeOfTravelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeOfTravelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeOfTravelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeOfTravelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeOfTravelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeOfTravelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeOfTravelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeOfTravelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeOfTravelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeOfTravelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeOfTravelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
