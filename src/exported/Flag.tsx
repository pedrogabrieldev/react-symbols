import IconFlagFill0Wght100Grad0Opsz48 from '../components/FlagFill0Wght100Grad0Opsz48'
import IconFlagFill0Wght200Grad0Opsz48 from '../components/FlagFill0Wght200Grad0Opsz48'
import IconFlagFill0Wght300Grad0Opsz48 from '../components/FlagFill0Wght300Grad0Opsz48'
import IconFlagFill0Wght400Grad0Opsz48 from '../components/FlagFill0Wght400Grad0Opsz48'
import IconFlagFill0Wght500Grad0Opsz48 from '../components/FlagFill0Wght500Grad0Opsz48'
import IconFlagFill0Wght600Grad0Opsz48 from '../components/FlagFill0Wght600Grad0Opsz48'
import IconFlagFill0Wght700Grad0Opsz48 from '../components/FlagFill0Wght700Grad0Opsz48'
import IconFlagFill1Wght100Grad0Opsz48 from '../components/FlagFill1Wght100Grad0Opsz48'
import IconFlagFill1Wght200Grad0Opsz48 from '../components/FlagFill1Wght200Grad0Opsz48'
import IconFlagFill1Wght300Grad0Opsz48 from '../components/FlagFill1Wght300Grad0Opsz48'
import IconFlagFill1Wght400Grad0Opsz48 from '../components/FlagFill1Wght400Grad0Opsz48'
import IconFlagFill1Wght500Grad0Opsz48 from '../components/FlagFill1Wght500Grad0Opsz48'
import IconFlagFill1Wght600Grad0Opsz48 from '../components/FlagFill1Wght600Grad0Opsz48'
import IconFlagFill1Wght700Grad0Opsz48 from '../components/FlagFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlag = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlagFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlagFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlagFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlagFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlagFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlagFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlagFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlagFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlagFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlagFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlagFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlagFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlagFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlagFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
