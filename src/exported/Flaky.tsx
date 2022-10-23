import IconFlakyFill0Wght100Grad0Opsz48 from '../components/FlakyFill0Wght100Grad0Opsz48'
import IconFlakyFill0Wght200Grad0Opsz48 from '../components/FlakyFill0Wght200Grad0Opsz48'
import IconFlakyFill0Wght300Grad0Opsz48 from '../components/FlakyFill0Wght300Grad0Opsz48'
import IconFlakyFill0Wght400Grad0Opsz48 from '../components/FlakyFill0Wght400Grad0Opsz48'
import IconFlakyFill0Wght500Grad0Opsz48 from '../components/FlakyFill0Wght500Grad0Opsz48'
import IconFlakyFill0Wght600Grad0Opsz48 from '../components/FlakyFill0Wght600Grad0Opsz48'
import IconFlakyFill0Wght700Grad0Opsz48 from '../components/FlakyFill0Wght700Grad0Opsz48'
import IconFlakyFill1Wght100Grad0Opsz48 from '../components/FlakyFill1Wght100Grad0Opsz48'
import IconFlakyFill1Wght200Grad0Opsz48 from '../components/FlakyFill1Wght200Grad0Opsz48'
import IconFlakyFill1Wght300Grad0Opsz48 from '../components/FlakyFill1Wght300Grad0Opsz48'
import IconFlakyFill1Wght400Grad0Opsz48 from '../components/FlakyFill1Wght400Grad0Opsz48'
import IconFlakyFill1Wght500Grad0Opsz48 from '../components/FlakyFill1Wght500Grad0Opsz48'
import IconFlakyFill1Wght600Grad0Opsz48 from '../components/FlakyFill1Wght600Grad0Opsz48'
import IconFlakyFill1Wght700Grad0Opsz48 from '../components/FlakyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlaky = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlakyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlakyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlakyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlakyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlakyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlakyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlakyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlakyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlakyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlakyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlakyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlakyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlakyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlakyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
