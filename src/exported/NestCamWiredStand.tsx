import IconNestCamWiredStandFill0Wght100Grad0Opsz48 from '../components/NestCamWiredStandFill0Wght100Grad0Opsz48'
import IconNestCamWiredStandFill0Wght200Grad0Opsz48 from '../components/NestCamWiredStandFill0Wght200Grad0Opsz48'
import IconNestCamWiredStandFill0Wght300Grad0Opsz48 from '../components/NestCamWiredStandFill0Wght300Grad0Opsz48'
import IconNestCamWiredStandFill0Wght400Grad0Opsz48 from '../components/NestCamWiredStandFill0Wght400Grad0Opsz48'
import IconNestCamWiredStandFill0Wght500Grad0Opsz48 from '../components/NestCamWiredStandFill0Wght500Grad0Opsz48'
import IconNestCamWiredStandFill0Wght600Grad0Opsz48 from '../components/NestCamWiredStandFill0Wght600Grad0Opsz48'
import IconNestCamWiredStandFill0Wght700Grad0Opsz48 from '../components/NestCamWiredStandFill0Wght700Grad0Opsz48'
import IconNestCamWiredStandFill1Wght100Grad0Opsz48 from '../components/NestCamWiredStandFill1Wght100Grad0Opsz48'
import IconNestCamWiredStandFill1Wght200Grad0Opsz48 from '../components/NestCamWiredStandFill1Wght200Grad0Opsz48'
import IconNestCamWiredStandFill1Wght300Grad0Opsz48 from '../components/NestCamWiredStandFill1Wght300Grad0Opsz48'
import IconNestCamWiredStandFill1Wght400Grad0Opsz48 from '../components/NestCamWiredStandFill1Wght400Grad0Opsz48'
import IconNestCamWiredStandFill1Wght500Grad0Opsz48 from '../components/NestCamWiredStandFill1Wght500Grad0Opsz48'
import IconNestCamWiredStandFill1Wght600Grad0Opsz48 from '../components/NestCamWiredStandFill1Wght600Grad0Opsz48'
import IconNestCamWiredStandFill1Wght700Grad0Opsz48 from '../components/NestCamWiredStandFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestCamWiredStand = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestCamWiredStandFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestCamWiredStandFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestCamWiredStandFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestCamWiredStandFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestCamWiredStandFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestCamWiredStandFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestCamWiredStandFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestCamWiredStandFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestCamWiredStandFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestCamWiredStandFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestCamWiredStandFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestCamWiredStandFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestCamWiredStandFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestCamWiredStandFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
