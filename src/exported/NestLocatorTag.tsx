import IconNestLocatorTagFill0Wght100Grad0Opsz48 from '../components/NestLocatorTagFill0Wght100Grad0Opsz48'
import IconNestLocatorTagFill0Wght200Grad0Opsz48 from '../components/NestLocatorTagFill0Wght200Grad0Opsz48'
import IconNestLocatorTagFill0Wght300Grad0Opsz48 from '../components/NestLocatorTagFill0Wght300Grad0Opsz48'
import IconNestLocatorTagFill0Wght400Grad0Opsz48 from '../components/NestLocatorTagFill0Wght400Grad0Opsz48'
import IconNestLocatorTagFill0Wght500Grad0Opsz48 from '../components/NestLocatorTagFill0Wght500Grad0Opsz48'
import IconNestLocatorTagFill0Wght600Grad0Opsz48 from '../components/NestLocatorTagFill0Wght600Grad0Opsz48'
import IconNestLocatorTagFill0Wght700Grad0Opsz48 from '../components/NestLocatorTagFill0Wght700Grad0Opsz48'
import IconNestLocatorTagFill1Wght100Grad0Opsz48 from '../components/NestLocatorTagFill1Wght100Grad0Opsz48'
import IconNestLocatorTagFill1Wght200Grad0Opsz48 from '../components/NestLocatorTagFill1Wght200Grad0Opsz48'
import IconNestLocatorTagFill1Wght300Grad0Opsz48 from '../components/NestLocatorTagFill1Wght300Grad0Opsz48'
import IconNestLocatorTagFill1Wght400Grad0Opsz48 from '../components/NestLocatorTagFill1Wght400Grad0Opsz48'
import IconNestLocatorTagFill1Wght500Grad0Opsz48 from '../components/NestLocatorTagFill1Wght500Grad0Opsz48'
import IconNestLocatorTagFill1Wght600Grad0Opsz48 from '../components/NestLocatorTagFill1Wght600Grad0Opsz48'
import IconNestLocatorTagFill1Wght700Grad0Opsz48 from '../components/NestLocatorTagFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestLocatorTag = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestLocatorTagFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestLocatorTagFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestLocatorTagFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestLocatorTagFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestLocatorTagFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestLocatorTagFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestLocatorTagFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestLocatorTagFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestLocatorTagFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestLocatorTagFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestLocatorTagFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestLocatorTagFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestLocatorTagFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestLocatorTagFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
