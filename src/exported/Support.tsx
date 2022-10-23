import IconSupportFill0Wght100Grad0Opsz48 from '../components/SupportFill0Wght100Grad0Opsz48'
import IconSupportFill0Wght200Grad0Opsz48 from '../components/SupportFill0Wght200Grad0Opsz48'
import IconSupportFill0Wght300Grad0Opsz48 from '../components/SupportFill0Wght300Grad0Opsz48'
import IconSupportFill0Wght400Grad0Opsz48 from '../components/SupportFill0Wght400Grad0Opsz48'
import IconSupportFill0Wght500Grad0Opsz48 from '../components/SupportFill0Wght500Grad0Opsz48'
import IconSupportFill0Wght600Grad0Opsz48 from '../components/SupportFill0Wght600Grad0Opsz48'
import IconSupportFill0Wght700Grad0Opsz48 from '../components/SupportFill0Wght700Grad0Opsz48'
import IconSupportFill1Wght100Grad0Opsz48 from '../components/SupportFill1Wght100Grad0Opsz48'
import IconSupportFill1Wght200Grad0Opsz48 from '../components/SupportFill1Wght200Grad0Opsz48'
import IconSupportFill1Wght300Grad0Opsz48 from '../components/SupportFill1Wght300Grad0Opsz48'
import IconSupportFill1Wght400Grad0Opsz48 from '../components/SupportFill1Wght400Grad0Opsz48'
import IconSupportFill1Wght500Grad0Opsz48 from '../components/SupportFill1Wght500Grad0Opsz48'
import IconSupportFill1Wght600Grad0Opsz48 from '../components/SupportFill1Wght600Grad0Opsz48'
import IconSupportFill1Wght700Grad0Opsz48 from '../components/SupportFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSupport = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSupportFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSupportFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSupportFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSupportFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSupportFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSupportFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSupportFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSupportFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSupportFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSupportFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSupportFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSupportFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSupportFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSupportFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
