import IconNestDisplayFill0Wght100Grad0Opsz48 from '../components/NestDisplayFill0Wght100Grad0Opsz48'
import IconNestDisplayFill0Wght200Grad0Opsz48 from '../components/NestDisplayFill0Wght200Grad0Opsz48'
import IconNestDisplayFill0Wght300Grad0Opsz48 from '../components/NestDisplayFill0Wght300Grad0Opsz48'
import IconNestDisplayFill0Wght400Grad0Opsz48 from '../components/NestDisplayFill0Wght400Grad0Opsz48'
import IconNestDisplayFill0Wght500Grad0Opsz48 from '../components/NestDisplayFill0Wght500Grad0Opsz48'
import IconNestDisplayFill0Wght600Grad0Opsz48 from '../components/NestDisplayFill0Wght600Grad0Opsz48'
import IconNestDisplayFill0Wght700Grad0Opsz48 from '../components/NestDisplayFill0Wght700Grad0Opsz48'
import IconNestDisplayFill1Wght100Grad0Opsz48 from '../components/NestDisplayFill1Wght100Grad0Opsz48'
import IconNestDisplayFill1Wght200Grad0Opsz48 from '../components/NestDisplayFill1Wght200Grad0Opsz48'
import IconNestDisplayFill1Wght300Grad0Opsz48 from '../components/NestDisplayFill1Wght300Grad0Opsz48'
import IconNestDisplayFill1Wght400Grad0Opsz48 from '../components/NestDisplayFill1Wght400Grad0Opsz48'
import IconNestDisplayFill1Wght500Grad0Opsz48 from '../components/NestDisplayFill1Wght500Grad0Opsz48'
import IconNestDisplayFill1Wght600Grad0Opsz48 from '../components/NestDisplayFill1Wght600Grad0Opsz48'
import IconNestDisplayFill1Wght700Grad0Opsz48 from '../components/NestDisplayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestDisplay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestDisplayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestDisplayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestDisplayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestDisplayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestDisplayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestDisplayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestDisplayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestDisplayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestDisplayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestDisplayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestDisplayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestDisplayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestDisplayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestDisplayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
