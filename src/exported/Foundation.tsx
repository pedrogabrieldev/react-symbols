import IconFoundationFill0Wght100Grad0Opsz48 from '../components/FoundationFill0Wght100Grad0Opsz48'
import IconFoundationFill0Wght200Grad0Opsz48 from '../components/FoundationFill0Wght200Grad0Opsz48'
import IconFoundationFill0Wght300Grad0Opsz48 from '../components/FoundationFill0Wght300Grad0Opsz48'
import IconFoundationFill0Wght400Grad0Opsz48 from '../components/FoundationFill0Wght400Grad0Opsz48'
import IconFoundationFill0Wght500Grad0Opsz48 from '../components/FoundationFill0Wght500Grad0Opsz48'
import IconFoundationFill0Wght600Grad0Opsz48 from '../components/FoundationFill0Wght600Grad0Opsz48'
import IconFoundationFill0Wght700Grad0Opsz48 from '../components/FoundationFill0Wght700Grad0Opsz48'
import IconFoundationFill1Wght100Grad0Opsz48 from '../components/FoundationFill1Wght100Grad0Opsz48'
import IconFoundationFill1Wght200Grad0Opsz48 from '../components/FoundationFill1Wght200Grad0Opsz48'
import IconFoundationFill1Wght300Grad0Opsz48 from '../components/FoundationFill1Wght300Grad0Opsz48'
import IconFoundationFill1Wght400Grad0Opsz48 from '../components/FoundationFill1Wght400Grad0Opsz48'
import IconFoundationFill1Wght500Grad0Opsz48 from '../components/FoundationFill1Wght500Grad0Opsz48'
import IconFoundationFill1Wght600Grad0Opsz48 from '../components/FoundationFill1Wght600Grad0Opsz48'
import IconFoundationFill1Wght700Grad0Opsz48 from '../components/FoundationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFoundation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFoundationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFoundationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFoundationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFoundationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFoundationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFoundationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFoundationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFoundationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFoundationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFoundationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFoundationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFoundationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFoundationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFoundationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
