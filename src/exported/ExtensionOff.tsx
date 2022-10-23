import IconExtensionOffFill0Wght100Grad0Opsz48 from '../components/ExtensionOffFill0Wght100Grad0Opsz48'
import IconExtensionOffFill0Wght200Grad0Opsz48 from '../components/ExtensionOffFill0Wght200Grad0Opsz48'
import IconExtensionOffFill0Wght300Grad0Opsz48 from '../components/ExtensionOffFill0Wght300Grad0Opsz48'
import IconExtensionOffFill0Wght400Grad0Opsz48 from '../components/ExtensionOffFill0Wght400Grad0Opsz48'
import IconExtensionOffFill0Wght500Grad0Opsz48 from '../components/ExtensionOffFill0Wght500Grad0Opsz48'
import IconExtensionOffFill0Wght600Grad0Opsz48 from '../components/ExtensionOffFill0Wght600Grad0Opsz48'
import IconExtensionOffFill0Wght700Grad0Opsz48 from '../components/ExtensionOffFill0Wght700Grad0Opsz48'
import IconExtensionOffFill1Wght100Grad0Opsz48 from '../components/ExtensionOffFill1Wght100Grad0Opsz48'
import IconExtensionOffFill1Wght200Grad0Opsz48 from '../components/ExtensionOffFill1Wght200Grad0Opsz48'
import IconExtensionOffFill1Wght300Grad0Opsz48 from '../components/ExtensionOffFill1Wght300Grad0Opsz48'
import IconExtensionOffFill1Wght400Grad0Opsz48 from '../components/ExtensionOffFill1Wght400Grad0Opsz48'
import IconExtensionOffFill1Wght500Grad0Opsz48 from '../components/ExtensionOffFill1Wght500Grad0Opsz48'
import IconExtensionOffFill1Wght600Grad0Opsz48 from '../components/ExtensionOffFill1Wght600Grad0Opsz48'
import IconExtensionOffFill1Wght700Grad0Opsz48 from '../components/ExtensionOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExtensionOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExtensionOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExtensionOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExtensionOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExtensionOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExtensionOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExtensionOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExtensionOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExtensionOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExtensionOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExtensionOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExtensionOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExtensionOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExtensionOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExtensionOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
