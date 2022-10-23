import IconNestTrueRadiantFill0Wght100Grad0Opsz48 from '../components/NestTrueRadiantFill0Wght100Grad0Opsz48'
import IconNestTrueRadiantFill0Wght200Grad0Opsz48 from '../components/NestTrueRadiantFill0Wght200Grad0Opsz48'
import IconNestTrueRadiantFill0Wght300Grad0Opsz48 from '../components/NestTrueRadiantFill0Wght300Grad0Opsz48'
import IconNestTrueRadiantFill0Wght400Grad0Opsz48 from '../components/NestTrueRadiantFill0Wght400Grad0Opsz48'
import IconNestTrueRadiantFill0Wght500Grad0Opsz48 from '../components/NestTrueRadiantFill0Wght500Grad0Opsz48'
import IconNestTrueRadiantFill0Wght600Grad0Opsz48 from '../components/NestTrueRadiantFill0Wght600Grad0Opsz48'
import IconNestTrueRadiantFill0Wght700Grad0Opsz48 from '../components/NestTrueRadiantFill0Wght700Grad0Opsz48'
import IconNestTrueRadiantFill1Wght100Grad0Opsz48 from '../components/NestTrueRadiantFill1Wght100Grad0Opsz48'
import IconNestTrueRadiantFill1Wght200Grad0Opsz48 from '../components/NestTrueRadiantFill1Wght200Grad0Opsz48'
import IconNestTrueRadiantFill1Wght300Grad0Opsz48 from '../components/NestTrueRadiantFill1Wght300Grad0Opsz48'
import IconNestTrueRadiantFill1Wght400Grad0Opsz48 from '../components/NestTrueRadiantFill1Wght400Grad0Opsz48'
import IconNestTrueRadiantFill1Wght500Grad0Opsz48 from '../components/NestTrueRadiantFill1Wght500Grad0Opsz48'
import IconNestTrueRadiantFill1Wght600Grad0Opsz48 from '../components/NestTrueRadiantFill1Wght600Grad0Opsz48'
import IconNestTrueRadiantFill1Wght700Grad0Opsz48 from '../components/NestTrueRadiantFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestTrueRadiant = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestTrueRadiantFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestTrueRadiantFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestTrueRadiantFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestTrueRadiantFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestTrueRadiantFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestTrueRadiantFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestTrueRadiantFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestTrueRadiantFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestTrueRadiantFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestTrueRadiantFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestTrueRadiantFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestTrueRadiantFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestTrueRadiantFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestTrueRadiantFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
