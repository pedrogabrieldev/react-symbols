import IconExtensionFill0Wght100Grad0Opsz48 from '../components/ExtensionFill0Wght100Grad0Opsz48'
import IconExtensionFill0Wght200Grad0Opsz48 from '../components/ExtensionFill0Wght200Grad0Opsz48'
import IconExtensionFill0Wght300Grad0Opsz48 from '../components/ExtensionFill0Wght300Grad0Opsz48'
import IconExtensionFill0Wght400Grad0Opsz48 from '../components/ExtensionFill0Wght400Grad0Opsz48'
import IconExtensionFill0Wght500Grad0Opsz48 from '../components/ExtensionFill0Wght500Grad0Opsz48'
import IconExtensionFill0Wght600Grad0Opsz48 from '../components/ExtensionFill0Wght600Grad0Opsz48'
import IconExtensionFill0Wght700Grad0Opsz48 from '../components/ExtensionFill0Wght700Grad0Opsz48'
import IconExtensionFill1Wght100Grad0Opsz48 from '../components/ExtensionFill1Wght100Grad0Opsz48'
import IconExtensionFill1Wght200Grad0Opsz48 from '../components/ExtensionFill1Wght200Grad0Opsz48'
import IconExtensionFill1Wght300Grad0Opsz48 from '../components/ExtensionFill1Wght300Grad0Opsz48'
import IconExtensionFill1Wght400Grad0Opsz48 from '../components/ExtensionFill1Wght400Grad0Opsz48'
import IconExtensionFill1Wght500Grad0Opsz48 from '../components/ExtensionFill1Wght500Grad0Opsz48'
import IconExtensionFill1Wght600Grad0Opsz48 from '../components/ExtensionFill1Wght600Grad0Opsz48'
import IconExtensionFill1Wght700Grad0Opsz48 from '../components/ExtensionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExtension = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExtensionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExtensionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExtensionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExtensionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExtensionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExtensionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExtensionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExtensionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExtensionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExtensionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExtensionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExtensionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExtensionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExtensionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
