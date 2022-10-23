import IconNestCamOutdoorFill0Wght100Grad0Opsz48 from '../components/NestCamOutdoorFill0Wght100Grad0Opsz48'
import IconNestCamOutdoorFill0Wght200Grad0Opsz48 from '../components/NestCamOutdoorFill0Wght200Grad0Opsz48'
import IconNestCamOutdoorFill0Wght300Grad0Opsz48 from '../components/NestCamOutdoorFill0Wght300Grad0Opsz48'
import IconNestCamOutdoorFill0Wght400Grad0Opsz48 from '../components/NestCamOutdoorFill0Wght400Grad0Opsz48'
import IconNestCamOutdoorFill0Wght500Grad0Opsz48 from '../components/NestCamOutdoorFill0Wght500Grad0Opsz48'
import IconNestCamOutdoorFill0Wght600Grad0Opsz48 from '../components/NestCamOutdoorFill0Wght600Grad0Opsz48'
import IconNestCamOutdoorFill0Wght700Grad0Opsz48 from '../components/NestCamOutdoorFill0Wght700Grad0Opsz48'
import IconNestCamOutdoorFill1Wght100Grad0Opsz48 from '../components/NestCamOutdoorFill1Wght100Grad0Opsz48'
import IconNestCamOutdoorFill1Wght200Grad0Opsz48 from '../components/NestCamOutdoorFill1Wght200Grad0Opsz48'
import IconNestCamOutdoorFill1Wght300Grad0Opsz48 from '../components/NestCamOutdoorFill1Wght300Grad0Opsz48'
import IconNestCamOutdoorFill1Wght400Grad0Opsz48 from '../components/NestCamOutdoorFill1Wght400Grad0Opsz48'
import IconNestCamOutdoorFill1Wght500Grad0Opsz48 from '../components/NestCamOutdoorFill1Wght500Grad0Opsz48'
import IconNestCamOutdoorFill1Wght600Grad0Opsz48 from '../components/NestCamOutdoorFill1Wght600Grad0Opsz48'
import IconNestCamOutdoorFill1Wght700Grad0Opsz48 from '../components/NestCamOutdoorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestCamOutdoor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestCamOutdoorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestCamOutdoorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestCamOutdoorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestCamOutdoorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestCamOutdoorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestCamOutdoorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestCamOutdoorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestCamOutdoorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestCamOutdoorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestCamOutdoorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestCamOutdoorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestCamOutdoorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestCamOutdoorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestCamOutdoorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
