import IconSanitizerFill0Wght100Grad0Opsz48 from '../components/SanitizerFill0Wght100Grad0Opsz48'
import IconSanitizerFill0Wght200Grad0Opsz48 from '../components/SanitizerFill0Wght200Grad0Opsz48'
import IconSanitizerFill0Wght300Grad0Opsz48 from '../components/SanitizerFill0Wght300Grad0Opsz48'
import IconSanitizerFill0Wght400Grad0Opsz48 from '../components/SanitizerFill0Wght400Grad0Opsz48'
import IconSanitizerFill0Wght500Grad0Opsz48 from '../components/SanitizerFill0Wght500Grad0Opsz48'
import IconSanitizerFill0Wght600Grad0Opsz48 from '../components/SanitizerFill0Wght600Grad0Opsz48'
import IconSanitizerFill0Wght700Grad0Opsz48 from '../components/SanitizerFill0Wght700Grad0Opsz48'
import IconSanitizerFill1Wght100Grad0Opsz48 from '../components/SanitizerFill1Wght100Grad0Opsz48'
import IconSanitizerFill1Wght200Grad0Opsz48 from '../components/SanitizerFill1Wght200Grad0Opsz48'
import IconSanitizerFill1Wght300Grad0Opsz48 from '../components/SanitizerFill1Wght300Grad0Opsz48'
import IconSanitizerFill1Wght400Grad0Opsz48 from '../components/SanitizerFill1Wght400Grad0Opsz48'
import IconSanitizerFill1Wght500Grad0Opsz48 from '../components/SanitizerFill1Wght500Grad0Opsz48'
import IconSanitizerFill1Wght600Grad0Opsz48 from '../components/SanitizerFill1Wght600Grad0Opsz48'
import IconSanitizerFill1Wght700Grad0Opsz48 from '../components/SanitizerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSanitizer = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSanitizerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSanitizerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSanitizerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSanitizerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSanitizerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSanitizerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSanitizerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSanitizerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSanitizerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSanitizerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSanitizerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSanitizerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSanitizerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSanitizerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
