import IconNestCamIqOutdoorFill0Wght100Grad0Opsz48 from '../components/NestCamIqOutdoorFill0Wght100Grad0Opsz48'
import IconNestCamIqOutdoorFill0Wght200Grad0Opsz48 from '../components/NestCamIqOutdoorFill0Wght200Grad0Opsz48'
import IconNestCamIqOutdoorFill0Wght300Grad0Opsz48 from '../components/NestCamIqOutdoorFill0Wght300Grad0Opsz48'
import IconNestCamIqOutdoorFill0Wght400Grad0Opsz48 from '../components/NestCamIqOutdoorFill0Wght400Grad0Opsz48'
import IconNestCamIqOutdoorFill0Wght500Grad0Opsz48 from '../components/NestCamIqOutdoorFill0Wght500Grad0Opsz48'
import IconNestCamIqOutdoorFill0Wght600Grad0Opsz48 from '../components/NestCamIqOutdoorFill0Wght600Grad0Opsz48'
import IconNestCamIqOutdoorFill0Wght700Grad0Opsz48 from '../components/NestCamIqOutdoorFill0Wght700Grad0Opsz48'
import IconNestCamIqOutdoorFill1Wght100Grad0Opsz48 from '../components/NestCamIqOutdoorFill1Wght100Grad0Opsz48'
import IconNestCamIqOutdoorFill1Wght200Grad0Opsz48 from '../components/NestCamIqOutdoorFill1Wght200Grad0Opsz48'
import IconNestCamIqOutdoorFill1Wght300Grad0Opsz48 from '../components/NestCamIqOutdoorFill1Wght300Grad0Opsz48'
import IconNestCamIqOutdoorFill1Wght400Grad0Opsz48 from '../components/NestCamIqOutdoorFill1Wght400Grad0Opsz48'
import IconNestCamIqOutdoorFill1Wght500Grad0Opsz48 from '../components/NestCamIqOutdoorFill1Wght500Grad0Opsz48'
import IconNestCamIqOutdoorFill1Wght600Grad0Opsz48 from '../components/NestCamIqOutdoorFill1Wght600Grad0Opsz48'
import IconNestCamIqOutdoorFill1Wght700Grad0Opsz48 from '../components/NestCamIqOutdoorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestCamIqOutdoor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestCamIqOutdoorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestCamIqOutdoorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestCamIqOutdoorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestCamIqOutdoorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestCamIqOutdoorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestCamIqOutdoorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestCamIqOutdoorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestCamIqOutdoorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestCamIqOutdoorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestCamIqOutdoorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestCamIqOutdoorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestCamIqOutdoorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestCamIqOutdoorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestCamIqOutdoorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
