import IconNestCamFloodlightFill0Wght100Grad0Opsz48 from '../components/NestCamFloodlightFill0Wght100Grad0Opsz48'
import IconNestCamFloodlightFill0Wght200Grad0Opsz48 from '../components/NestCamFloodlightFill0Wght200Grad0Opsz48'
import IconNestCamFloodlightFill0Wght300Grad0Opsz48 from '../components/NestCamFloodlightFill0Wght300Grad0Opsz48'
import IconNestCamFloodlightFill0Wght400Grad0Opsz48 from '../components/NestCamFloodlightFill0Wght400Grad0Opsz48'
import IconNestCamFloodlightFill0Wght500Grad0Opsz48 from '../components/NestCamFloodlightFill0Wght500Grad0Opsz48'
import IconNestCamFloodlightFill0Wght600Grad0Opsz48 from '../components/NestCamFloodlightFill0Wght600Grad0Opsz48'
import IconNestCamFloodlightFill0Wght700Grad0Opsz48 from '../components/NestCamFloodlightFill0Wght700Grad0Opsz48'
import IconNestCamFloodlightFill1Wght100Grad0Opsz48 from '../components/NestCamFloodlightFill1Wght100Grad0Opsz48'
import IconNestCamFloodlightFill1Wght200Grad0Opsz48 from '../components/NestCamFloodlightFill1Wght200Grad0Opsz48'
import IconNestCamFloodlightFill1Wght300Grad0Opsz48 from '../components/NestCamFloodlightFill1Wght300Grad0Opsz48'
import IconNestCamFloodlightFill1Wght400Grad0Opsz48 from '../components/NestCamFloodlightFill1Wght400Grad0Opsz48'
import IconNestCamFloodlightFill1Wght500Grad0Opsz48 from '../components/NestCamFloodlightFill1Wght500Grad0Opsz48'
import IconNestCamFloodlightFill1Wght600Grad0Opsz48 from '../components/NestCamFloodlightFill1Wght600Grad0Opsz48'
import IconNestCamFloodlightFill1Wght700Grad0Opsz48 from '../components/NestCamFloodlightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestCamFloodlight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestCamFloodlightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestCamFloodlightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestCamFloodlightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestCamFloodlightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestCamFloodlightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestCamFloodlightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestCamFloodlightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestCamFloodlightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestCamFloodlightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestCamFloodlightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestCamFloodlightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestCamFloodlightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestCamFloodlightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestCamFloodlightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
