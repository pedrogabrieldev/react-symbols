import IconNestHeatLinkGen3Fill0Wght100Grad0Opsz48 from '../components/NestHeatLinkGen3Fill0Wght100Grad0Opsz48'
import IconNestHeatLinkGen3Fill0Wght200Grad0Opsz48 from '../components/NestHeatLinkGen3Fill0Wght200Grad0Opsz48'
import IconNestHeatLinkGen3Fill0Wght300Grad0Opsz48 from '../components/NestHeatLinkGen3Fill0Wght300Grad0Opsz48'
import IconNestHeatLinkGen3Fill0Wght400Grad0Opsz48 from '../components/NestHeatLinkGen3Fill0Wght400Grad0Opsz48'
import IconNestHeatLinkGen3Fill0Wght500Grad0Opsz48 from '../components/NestHeatLinkGen3Fill0Wght500Grad0Opsz48'
import IconNestHeatLinkGen3Fill0Wght600Grad0Opsz48 from '../components/NestHeatLinkGen3Fill0Wght600Grad0Opsz48'
import IconNestHeatLinkGen3Fill0Wght700Grad0Opsz48 from '../components/NestHeatLinkGen3Fill0Wght700Grad0Opsz48'
import IconNestHeatLinkGen3Fill1Wght100Grad0Opsz48 from '../components/NestHeatLinkGen3Fill1Wght100Grad0Opsz48'
import IconNestHeatLinkGen3Fill1Wght200Grad0Opsz48 from '../components/NestHeatLinkGen3Fill1Wght200Grad0Opsz48'
import IconNestHeatLinkGen3Fill1Wght300Grad0Opsz48 from '../components/NestHeatLinkGen3Fill1Wght300Grad0Opsz48'
import IconNestHeatLinkGen3Fill1Wght400Grad0Opsz48 from '../components/NestHeatLinkGen3Fill1Wght400Grad0Opsz48'
import IconNestHeatLinkGen3Fill1Wght500Grad0Opsz48 from '../components/NestHeatLinkGen3Fill1Wght500Grad0Opsz48'
import IconNestHeatLinkGen3Fill1Wght600Grad0Opsz48 from '../components/NestHeatLinkGen3Fill1Wght600Grad0Opsz48'
import IconNestHeatLinkGen3Fill1Wght700Grad0Opsz48 from '../components/NestHeatLinkGen3Fill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestHeatLinkGen3 = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestHeatLinkGen3Fill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestHeatLinkGen3Fill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestHeatLinkGen3Fill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestHeatLinkGen3Fill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestHeatLinkGen3Fill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestHeatLinkGen3Fill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestHeatLinkGen3Fill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestHeatLinkGen3Fill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestHeatLinkGen3Fill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestHeatLinkGen3Fill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestHeatLinkGen3Fill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestHeatLinkGen3Fill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestHeatLinkGen3Fill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestHeatLinkGen3Fill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
