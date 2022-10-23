import IconNestDisplayMaxFill0Wght100Grad0Opsz48 from '../components/NestDisplayMaxFill0Wght100Grad0Opsz48'
import IconNestDisplayMaxFill0Wght200Grad0Opsz48 from '../components/NestDisplayMaxFill0Wght200Grad0Opsz48'
import IconNestDisplayMaxFill0Wght300Grad0Opsz48 from '../components/NestDisplayMaxFill0Wght300Grad0Opsz48'
import IconNestDisplayMaxFill0Wght400Grad0Opsz48 from '../components/NestDisplayMaxFill0Wght400Grad0Opsz48'
import IconNestDisplayMaxFill0Wght500Grad0Opsz48 from '../components/NestDisplayMaxFill0Wght500Grad0Opsz48'
import IconNestDisplayMaxFill0Wght600Grad0Opsz48 from '../components/NestDisplayMaxFill0Wght600Grad0Opsz48'
import IconNestDisplayMaxFill0Wght700Grad0Opsz48 from '../components/NestDisplayMaxFill0Wght700Grad0Opsz48'
import IconNestDisplayMaxFill1Wght100Grad0Opsz48 from '../components/NestDisplayMaxFill1Wght100Grad0Opsz48'
import IconNestDisplayMaxFill1Wght200Grad0Opsz48 from '../components/NestDisplayMaxFill1Wght200Grad0Opsz48'
import IconNestDisplayMaxFill1Wght300Grad0Opsz48 from '../components/NestDisplayMaxFill1Wght300Grad0Opsz48'
import IconNestDisplayMaxFill1Wght400Grad0Opsz48 from '../components/NestDisplayMaxFill1Wght400Grad0Opsz48'
import IconNestDisplayMaxFill1Wght500Grad0Opsz48 from '../components/NestDisplayMaxFill1Wght500Grad0Opsz48'
import IconNestDisplayMaxFill1Wght600Grad0Opsz48 from '../components/NestDisplayMaxFill1Wght600Grad0Opsz48'
import IconNestDisplayMaxFill1Wght700Grad0Opsz48 from '../components/NestDisplayMaxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestDisplayMax = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestDisplayMaxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestDisplayMaxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestDisplayMaxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestDisplayMaxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestDisplayMaxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestDisplayMaxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestDisplayMaxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestDisplayMaxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestDisplayMaxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestDisplayMaxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestDisplayMaxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestDisplayMaxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestDisplayMaxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestDisplayMaxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
