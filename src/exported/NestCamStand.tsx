import IconNestCamStandFill0Wght100Grad0Opsz48 from '../components/NestCamStandFill0Wght100Grad0Opsz48'
import IconNestCamStandFill0Wght200Grad0Opsz48 from '../components/NestCamStandFill0Wght200Grad0Opsz48'
import IconNestCamStandFill0Wght300Grad0Opsz48 from '../components/NestCamStandFill0Wght300Grad0Opsz48'
import IconNestCamStandFill0Wght400Grad0Opsz48 from '../components/NestCamStandFill0Wght400Grad0Opsz48'
import IconNestCamStandFill0Wght500Grad0Opsz48 from '../components/NestCamStandFill0Wght500Grad0Opsz48'
import IconNestCamStandFill0Wght600Grad0Opsz48 from '../components/NestCamStandFill0Wght600Grad0Opsz48'
import IconNestCamStandFill0Wght700Grad0Opsz48 from '../components/NestCamStandFill0Wght700Grad0Opsz48'
import IconNestCamStandFill1Wght100Grad0Opsz48 from '../components/NestCamStandFill1Wght100Grad0Opsz48'
import IconNestCamStandFill1Wght200Grad0Opsz48 from '../components/NestCamStandFill1Wght200Grad0Opsz48'
import IconNestCamStandFill1Wght300Grad0Opsz48 from '../components/NestCamStandFill1Wght300Grad0Opsz48'
import IconNestCamStandFill1Wght400Grad0Opsz48 from '../components/NestCamStandFill1Wght400Grad0Opsz48'
import IconNestCamStandFill1Wght500Grad0Opsz48 from '../components/NestCamStandFill1Wght500Grad0Opsz48'
import IconNestCamStandFill1Wght600Grad0Opsz48 from '../components/NestCamStandFill1Wght600Grad0Opsz48'
import IconNestCamStandFill1Wght700Grad0Opsz48 from '../components/NestCamStandFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestCamStand = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestCamStandFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestCamStandFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestCamStandFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestCamStandFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestCamStandFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestCamStandFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestCamStandFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestCamStandFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestCamStandFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestCamStandFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestCamStandFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestCamStandFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestCamStandFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestCamStandFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
