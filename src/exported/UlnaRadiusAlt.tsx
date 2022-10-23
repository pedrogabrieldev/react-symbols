import IconUlnaRadiusAltFill0Wght100Grad0Opsz48 from '../components/UlnaRadiusAltFill0Wght100Grad0Opsz48'
import IconUlnaRadiusAltFill0Wght200Grad0Opsz48 from '../components/UlnaRadiusAltFill0Wght200Grad0Opsz48'
import IconUlnaRadiusAltFill0Wght300Grad0Opsz48 from '../components/UlnaRadiusAltFill0Wght300Grad0Opsz48'
import IconUlnaRadiusAltFill0Wght400Grad0Opsz48 from '../components/UlnaRadiusAltFill0Wght400Grad0Opsz48'
import IconUlnaRadiusAltFill0Wght500Grad0Opsz48 from '../components/UlnaRadiusAltFill0Wght500Grad0Opsz48'
import IconUlnaRadiusAltFill0Wght600Grad0Opsz48 from '../components/UlnaRadiusAltFill0Wght600Grad0Opsz48'
import IconUlnaRadiusAltFill0Wght700Grad0Opsz48 from '../components/UlnaRadiusAltFill0Wght700Grad0Opsz48'
import IconUlnaRadiusAltFill1Wght100Grad0Opsz48 from '../components/UlnaRadiusAltFill1Wght100Grad0Opsz48'
import IconUlnaRadiusAltFill1Wght200Grad0Opsz48 from '../components/UlnaRadiusAltFill1Wght200Grad0Opsz48'
import IconUlnaRadiusAltFill1Wght300Grad0Opsz48 from '../components/UlnaRadiusAltFill1Wght300Grad0Opsz48'
import IconUlnaRadiusAltFill1Wght400Grad0Opsz48 from '../components/UlnaRadiusAltFill1Wght400Grad0Opsz48'
import IconUlnaRadiusAltFill1Wght500Grad0Opsz48 from '../components/UlnaRadiusAltFill1Wght500Grad0Opsz48'
import IconUlnaRadiusAltFill1Wght600Grad0Opsz48 from '../components/UlnaRadiusAltFill1Wght600Grad0Opsz48'
import IconUlnaRadiusAltFill1Wght700Grad0Opsz48 from '../components/UlnaRadiusAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUlnaRadiusAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUlnaRadiusAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUlnaRadiusAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUlnaRadiusAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUlnaRadiusAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUlnaRadiusAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUlnaRadiusAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUlnaRadiusAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUlnaRadiusAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUlnaRadiusAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUlnaRadiusAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUlnaRadiusAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUlnaRadiusAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUlnaRadiusAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUlnaRadiusAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
