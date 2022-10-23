import IconNestSunblockFill0Wght100Grad0Opsz48 from '../components/NestSunblockFill0Wght100Grad0Opsz48'
import IconNestSunblockFill0Wght200Grad0Opsz48 from '../components/NestSunblockFill0Wght200Grad0Opsz48'
import IconNestSunblockFill0Wght300Grad0Opsz48 from '../components/NestSunblockFill0Wght300Grad0Opsz48'
import IconNestSunblockFill0Wght400Grad0Opsz48 from '../components/NestSunblockFill0Wght400Grad0Opsz48'
import IconNestSunblockFill0Wght500Grad0Opsz48 from '../components/NestSunblockFill0Wght500Grad0Opsz48'
import IconNestSunblockFill0Wght600Grad0Opsz48 from '../components/NestSunblockFill0Wght600Grad0Opsz48'
import IconNestSunblockFill0Wght700Grad0Opsz48 from '../components/NestSunblockFill0Wght700Grad0Opsz48'
import IconNestSunblockFill1Wght100Grad0Opsz48 from '../components/NestSunblockFill1Wght100Grad0Opsz48'
import IconNestSunblockFill1Wght200Grad0Opsz48 from '../components/NestSunblockFill1Wght200Grad0Opsz48'
import IconNestSunblockFill1Wght300Grad0Opsz48 from '../components/NestSunblockFill1Wght300Grad0Opsz48'
import IconNestSunblockFill1Wght400Grad0Opsz48 from '../components/NestSunblockFill1Wght400Grad0Opsz48'
import IconNestSunblockFill1Wght500Grad0Opsz48 from '../components/NestSunblockFill1Wght500Grad0Opsz48'
import IconNestSunblockFill1Wght600Grad0Opsz48 from '../components/NestSunblockFill1Wght600Grad0Opsz48'
import IconNestSunblockFill1Wght700Grad0Opsz48 from '../components/NestSunblockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestSunblock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestSunblockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestSunblockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestSunblockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestSunblockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestSunblockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestSunblockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestSunblockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestSunblockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestSunblockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestSunblockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestSunblockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestSunblockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestSunblockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestSunblockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
