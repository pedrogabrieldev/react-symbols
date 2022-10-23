import IconNestHeatLinkEFill0Wght100Grad0Opsz48 from '../components/NestHeatLinkEFill0Wght100Grad0Opsz48'
import IconNestHeatLinkEFill0Wght200Grad0Opsz48 from '../components/NestHeatLinkEFill0Wght200Grad0Opsz48'
import IconNestHeatLinkEFill0Wght300Grad0Opsz48 from '../components/NestHeatLinkEFill0Wght300Grad0Opsz48'
import IconNestHeatLinkEFill0Wght400Grad0Opsz48 from '../components/NestHeatLinkEFill0Wght400Grad0Opsz48'
import IconNestHeatLinkEFill0Wght500Grad0Opsz48 from '../components/NestHeatLinkEFill0Wght500Grad0Opsz48'
import IconNestHeatLinkEFill0Wght600Grad0Opsz48 from '../components/NestHeatLinkEFill0Wght600Grad0Opsz48'
import IconNestHeatLinkEFill0Wght700Grad0Opsz48 from '../components/NestHeatLinkEFill0Wght700Grad0Opsz48'
import IconNestHeatLinkEFill1Wght100Grad0Opsz48 from '../components/NestHeatLinkEFill1Wght100Grad0Opsz48'
import IconNestHeatLinkEFill1Wght200Grad0Opsz48 from '../components/NestHeatLinkEFill1Wght200Grad0Opsz48'
import IconNestHeatLinkEFill1Wght300Grad0Opsz48 from '../components/NestHeatLinkEFill1Wght300Grad0Opsz48'
import IconNestHeatLinkEFill1Wght400Grad0Opsz48 from '../components/NestHeatLinkEFill1Wght400Grad0Opsz48'
import IconNestHeatLinkEFill1Wght500Grad0Opsz48 from '../components/NestHeatLinkEFill1Wght500Grad0Opsz48'
import IconNestHeatLinkEFill1Wght600Grad0Opsz48 from '../components/NestHeatLinkEFill1Wght600Grad0Opsz48'
import IconNestHeatLinkEFill1Wght700Grad0Opsz48 from '../components/NestHeatLinkEFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestHeatLinkE = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestHeatLinkEFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestHeatLinkEFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestHeatLinkEFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestHeatLinkEFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestHeatLinkEFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestHeatLinkEFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestHeatLinkEFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestHeatLinkEFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestHeatLinkEFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestHeatLinkEFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestHeatLinkEFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestHeatLinkEFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestHeatLinkEFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestHeatLinkEFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
