import IconNestTagFill0Wght100Grad0Opsz48 from '../components/NestTagFill0Wght100Grad0Opsz48'
import IconNestTagFill0Wght200Grad0Opsz48 from '../components/NestTagFill0Wght200Grad0Opsz48'
import IconNestTagFill0Wght300Grad0Opsz48 from '../components/NestTagFill0Wght300Grad0Opsz48'
import IconNestTagFill0Wght400Grad0Opsz48 from '../components/NestTagFill0Wght400Grad0Opsz48'
import IconNestTagFill0Wght500Grad0Opsz48 from '../components/NestTagFill0Wght500Grad0Opsz48'
import IconNestTagFill0Wght600Grad0Opsz48 from '../components/NestTagFill0Wght600Grad0Opsz48'
import IconNestTagFill0Wght700Grad0Opsz48 from '../components/NestTagFill0Wght700Grad0Opsz48'
import IconNestTagFill1Wght100Grad0Opsz48 from '../components/NestTagFill1Wght100Grad0Opsz48'
import IconNestTagFill1Wght200Grad0Opsz48 from '../components/NestTagFill1Wght200Grad0Opsz48'
import IconNestTagFill1Wght300Grad0Opsz48 from '../components/NestTagFill1Wght300Grad0Opsz48'
import IconNestTagFill1Wght400Grad0Opsz48 from '../components/NestTagFill1Wght400Grad0Opsz48'
import IconNestTagFill1Wght500Grad0Opsz48 from '../components/NestTagFill1Wght500Grad0Opsz48'
import IconNestTagFill1Wght600Grad0Opsz48 from '../components/NestTagFill1Wght600Grad0Opsz48'
import IconNestTagFill1Wght700Grad0Opsz48 from '../components/NestTagFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestTag = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestTagFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestTagFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestTagFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestTagFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestTagFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestTagFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestTagFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestTagFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestTagFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestTagFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestTagFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestTagFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestTagFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestTagFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
