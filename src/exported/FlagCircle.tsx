import IconFlagCircleFill0Wght100Grad0Opsz48 from '../components/FlagCircleFill0Wght100Grad0Opsz48'
import IconFlagCircleFill0Wght200Grad0Opsz48 from '../components/FlagCircleFill0Wght200Grad0Opsz48'
import IconFlagCircleFill0Wght300Grad0Opsz48 from '../components/FlagCircleFill0Wght300Grad0Opsz48'
import IconFlagCircleFill0Wght400Grad0Opsz48 from '../components/FlagCircleFill0Wght400Grad0Opsz48'
import IconFlagCircleFill0Wght500Grad0Opsz48 from '../components/FlagCircleFill0Wght500Grad0Opsz48'
import IconFlagCircleFill0Wght600Grad0Opsz48 from '../components/FlagCircleFill0Wght600Grad0Opsz48'
import IconFlagCircleFill0Wght700Grad0Opsz48 from '../components/FlagCircleFill0Wght700Grad0Opsz48'
import IconFlagCircleFill1Wght100Grad0Opsz48 from '../components/FlagCircleFill1Wght100Grad0Opsz48'
import IconFlagCircleFill1Wght200Grad0Opsz48 from '../components/FlagCircleFill1Wght200Grad0Opsz48'
import IconFlagCircleFill1Wght300Grad0Opsz48 from '../components/FlagCircleFill1Wght300Grad0Opsz48'
import IconFlagCircleFill1Wght400Grad0Opsz48 from '../components/FlagCircleFill1Wght400Grad0Opsz48'
import IconFlagCircleFill1Wght500Grad0Opsz48 from '../components/FlagCircleFill1Wght500Grad0Opsz48'
import IconFlagCircleFill1Wght600Grad0Opsz48 from '../components/FlagCircleFill1Wght600Grad0Opsz48'
import IconFlagCircleFill1Wght700Grad0Opsz48 from '../components/FlagCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlagCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlagCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlagCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlagCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlagCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlagCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlagCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlagCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlagCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlagCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlagCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlagCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlagCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlagCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlagCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
