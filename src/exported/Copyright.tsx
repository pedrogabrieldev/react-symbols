import IconCopyrightFill0Wght100Grad0Opsz48 from '../components/CopyrightFill0Wght100Grad0Opsz48'
import IconCopyrightFill0Wght200Grad0Opsz48 from '../components/CopyrightFill0Wght200Grad0Opsz48'
import IconCopyrightFill0Wght300Grad0Opsz48 from '../components/CopyrightFill0Wght300Grad0Opsz48'
import IconCopyrightFill0Wght400Grad0Opsz48 from '../components/CopyrightFill0Wght400Grad0Opsz48'
import IconCopyrightFill0Wght500Grad0Opsz48 from '../components/CopyrightFill0Wght500Grad0Opsz48'
import IconCopyrightFill0Wght600Grad0Opsz48 from '../components/CopyrightFill0Wght600Grad0Opsz48'
import IconCopyrightFill0Wght700Grad0Opsz48 from '../components/CopyrightFill0Wght700Grad0Opsz48'
import IconCopyrightFill1Wght100Grad0Opsz48 from '../components/CopyrightFill1Wght100Grad0Opsz48'
import IconCopyrightFill1Wght200Grad0Opsz48 from '../components/CopyrightFill1Wght200Grad0Opsz48'
import IconCopyrightFill1Wght300Grad0Opsz48 from '../components/CopyrightFill1Wght300Grad0Opsz48'
import IconCopyrightFill1Wght400Grad0Opsz48 from '../components/CopyrightFill1Wght400Grad0Opsz48'
import IconCopyrightFill1Wght500Grad0Opsz48 from '../components/CopyrightFill1Wght500Grad0Opsz48'
import IconCopyrightFill1Wght600Grad0Opsz48 from '../components/CopyrightFill1Wght600Grad0Opsz48'
import IconCopyrightFill1Wght700Grad0Opsz48 from '../components/CopyrightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCopyright = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCopyrightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCopyrightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCopyrightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCopyrightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCopyrightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCopyrightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCopyrightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCopyrightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCopyrightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCopyrightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCopyrightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCopyrightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCopyrightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCopyrightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
