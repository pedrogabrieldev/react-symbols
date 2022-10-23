import IconNestDetectFill0Wght100Grad0Opsz48 from '../components/NestDetectFill0Wght100Grad0Opsz48'
import IconNestDetectFill0Wght200Grad0Opsz48 from '../components/NestDetectFill0Wght200Grad0Opsz48'
import IconNestDetectFill0Wght300Grad0Opsz48 from '../components/NestDetectFill0Wght300Grad0Opsz48'
import IconNestDetectFill0Wght400Grad0Opsz48 from '../components/NestDetectFill0Wght400Grad0Opsz48'
import IconNestDetectFill0Wght500Grad0Opsz48 from '../components/NestDetectFill0Wght500Grad0Opsz48'
import IconNestDetectFill0Wght600Grad0Opsz48 from '../components/NestDetectFill0Wght600Grad0Opsz48'
import IconNestDetectFill0Wght700Grad0Opsz48 from '../components/NestDetectFill0Wght700Grad0Opsz48'
import IconNestDetectFill1Wght100Grad0Opsz48 from '../components/NestDetectFill1Wght100Grad0Opsz48'
import IconNestDetectFill1Wght200Grad0Opsz48 from '../components/NestDetectFill1Wght200Grad0Opsz48'
import IconNestDetectFill1Wght300Grad0Opsz48 from '../components/NestDetectFill1Wght300Grad0Opsz48'
import IconNestDetectFill1Wght400Grad0Opsz48 from '../components/NestDetectFill1Wght400Grad0Opsz48'
import IconNestDetectFill1Wght500Grad0Opsz48 from '../components/NestDetectFill1Wght500Grad0Opsz48'
import IconNestDetectFill1Wght600Grad0Opsz48 from '../components/NestDetectFill1Wght600Grad0Opsz48'
import IconNestDetectFill1Wght700Grad0Opsz48 from '../components/NestDetectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestDetect = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestDetectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestDetectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestDetectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestDetectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestDetectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestDetectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestDetectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestDetectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestDetectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestDetectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestDetectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestDetectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestDetectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestDetectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
